# 常见陷阱与反模式

AI 在写 AIGame 脚本时最容易犯的错。先通读一遍再写代码。

## 1. 把 Rhino JS 当成 Node / 浏览器 / V8

| ❌ 错误 | ✅ 正确 |
|---|---|
| `const fs = require('fs');` | `$file.read(...)`、`$file.write(...)` |
| `fetch(url).then(r => r.json())` | `$http.get(url)` 同步返回 |
| `console.log(x)` | `log(x)` 或 `$log.info(x)` |
| `async function run() { await ... }` | 直接写同步代码;并发用 `$thread.run(...)` |
| `import { x } from './mod'` | 使用 AIGame 模块机制(`demo-module-development.md`) |
| `setTimeout(fn, 1000)` | `sleep(1000); fn();` 或 `$thread.run` 配合 |
| `window / document / localStorage` | 无对应物,需改用 `$bus` / `$file` 存储 |

## 2. 把中文方法名强行翻译成英文

AIGame 文档有两套:**中文详细文档**里列的是 `<方法中文标题>`,**英文示例**里出现的才是真实可调用名。

不要干这个:
- 看见中文文档里写"点击" → 自己写成 `$act.dianji()` 或 `$act.clickText()`
- 看见"获取权限" → 猜成 `$act.getPermission()`(实际是 `$act.getPermit()`)

**正确做法**:先查 `demo-whitelist-en.md` 是否出现该英文名,没有就打开对应 `demo-*.md` 搜;都没有就明说"文档未找到"。

## 3. 忘记权限前置

这几个权限不会自动继承上一次脚本的状态:

- 无障碍 — `$act.hasPermit()`
- 截图/录屏 — `$screen.hasPermit()`
- 悬浮窗 — `$floaty.hasPermit()`
- 使用情况 — `$app.hasUsagePermit()`

缺了权限,后续调用 **不会抛异常**,可能只是返回 `null` 或 `false`,很难 debug。

## 4. UI 切换不等待

```javascript
// ❌ 点击后立刻查节点,大概率找不到
$act.click(btn);
let node = $act.selector().text('下一步').findFirst();

// ✅ 使用 waitFirst 带超时
$act.click(btn);
let node = $act.selector().text('下一步').waitFirst(5000);
```

## 5. 图像/截图资源不释放

```javascript
// ❌ 循环里不 recycle,很快 OOM
while (running) {
    let img = $screen.cap();
    $img.findColor(img, '#fff');
}

// ✅
while (running) {
    let img = $screen.cap();
    if (img == null) { sleep(300); continue; }
    $img.findColor(img, '#fff');
    img.recycle();
}
```

## 6. 在 UI 线程里做耗时操作

```javascript
// ❌ 点击后做 HTTP,UI 冻住
$ui.btn.click(() => {
    let r = $http.get('https://slow.example.com');
    $ui.text.text(r.body);
});

// ✅ 耗时操作丢到子线程
$ui.btn.click(() => {
    $thread.run(() => {
        let r = $http.get('https://slow.example.com');
        $ui.run(() => $ui.text.text(r.body));
    });
});
```

## 7. 节点操作前不判空

```javascript
// ❌ 找不到节点时 crash
let n = $act.selector().text('X').findFirst();
n.click();

// ✅
let n = $act.selector().text('X').findFirst();
if (n != null) n.click();
```

## 8. 坐标/分辨率硬编码且不适配

- 用 `$device.width()` / `$device.height()`(或 demo 里示例的等价方法)把坐标换算成比例。
- OCR / 找图结果里的 `rect` 返回的是绝对坐标,不要再乘以比例。

## 9. 阻塞主循环不给系统喘息

- `while(true)` 里必须有 `sleep`(哪怕 100ms),否则 CPU 飙满、系统可能杀进程。
- 长循环里加 `if (shouldStop) break;` 之类的退出条件,配合 `$engine` / `$bus` 信号。

## 10. 混写 `var` / `let` / `const` 和多风格

Rhino 支持 `let` / `const`,**优先用这两个**。少用 `var`,除非模仿示例代码。

## 11. 把脚本写成"全部抛异常式"

AIGame 许多 API 失败时返回 `null` / `false` 而不是抛异常。**别用 `try/catch` 当主逻辑分支**,用返回值判断更符合官方示例风格。

## 12. 随意重构示例

官方示例看起来"啰嗦"或"不优雅"时,不要擅自重构。原因:
- 某些顺序是被环境约束的(例如必须先 `hasPermit` 再 `getPermit`)。
- 某些 `sleep` 数值是经验值,调小可能失效。
- 某些链式调用顺序影响节点筛选语义。

先照抄,跑通,再改。

## 12.5. Rhino Number → Java int 的隐式转换会失败

Rhino 里所有数字都是 **double**。AIGame 很多接受 `int` 参数的方法(`setXY` / `setX` / `setY` / `setW` / `setH` / `setWH` 等)在混淆后的类里只保留了 `int` 重载,传 double 会报:

```
找不到方法 "xxx.setXY(ni.zc,ni.zc)"   // zc 是混淆后的 Double
```

症状尤其阴险:**字面量** 能跑(`panel.setXY(100, 200)` OK),**变量 / 表达式** 不能跑(`panel.setXY(x, y)` 全挂)。这是因为 Rhino 对字面量有编译期常量折叠,运行时 Number 则传 double。

一旦这类异常抛在初始化期,后续所有 `click` / `setOnTouchListener` 绑定都未执行,用户只会看到"界面显示了但点了没反应"。

```javascript
// ❌ 看似一样,运行时会爆
panel.setXY(panelX, panelY);

// ✅ `| 0` 强制 ToInt32
panel.setXY(panelX | 0, panelY | 0);

// ✅ 计算结果也要转
panel.setXY((winX0 + dx) | 0, (winY0 + dy) | 0);
```

**规则**:凡是把 **变量或表达式** 传给 AIGame 的 `int` 参数时,统一加 `| 0`;字面量可省略但加了更稳。

## 12.6. 顶层代码 vs 变量声明顺序(Rhino TDZ)

Rhino 对 `let` / `const` 的 hoisting 行为不稳定。把"调用"写在"声明"之前,会让变量处于 TDZ(临时死区),执行到就抛 `ReferenceError`,脚本立刻结束。

```javascript
// ❌ 立刻崩:启动代码被放最前,SW 还没声明
if ($permit.hasFloaty()) {
    showBall();   // 内部访问 SW → ReferenceError
}
const SW = $device.width;
let x = Math.round(SW - 180);

// ✅ 声明在前,启动在后
const SW = $device.width;
let x = Math.round(SW - 180);
function showBall() { ... }

if ($permit.hasFloaty()) {
    showBall();
}
```

症状很迷惑:有的设备上"立刻结束",有的(Rhino 更宽松的版本)则 `SW` 为 `undefined`,后续 `SW - 180 = NaN`,`setXY(NaN | 0, NaN | 0) = setXY(0, 0)`,窗口出现在左上角看似"能跑但位置全错"。

**规则**:顶层代码一律按 `常量 → let → function → 启动调用` 四段顺序组织;启动永远写在文件最后。

## 13. 把 E4X 当成普通 JSX / XML 字符串

AIGame 里的 UI 布局有时是 E4X(XML 字面量)或字符串模板,语义不同:

- `<text text="x"/>` 作为 E4X 对象,`.text` 可取属性;字符串里要靠字符串拼接。
- 不要把 React / Vue 的 prop 语法搬过来。

具体以 `demo-e4x-support.md` 和 `demo-ui.md` 为准。

## 14. 用 `JSON.stringify` 打印 `Node` / `Image` 对象

这类对象包含 native 引用,`JSON.stringify` 会递归 crash 或返回 `{}`。应:
- Node:打印 `node.text()`、`node.cls()`、`node.rect()` 等属性
- Image:打印尺寸 `img.width() + 'x' + img.height()`,别序列化整张图

## 15. 把脚本当成"定时任务"系统

`$task` / 定时相关是 AIGame 内部的;宿主系统重启后行为依赖具体平台。关键定时任务应有:
- 落盘状态(`$file` 或 `$sqlite`)
- 启动时恢复判断
- 参见 `demo-task.md`

---

遇到 AI 不确定的写法时,**优先回到 `demo-<模块>.md` 找最近示例抄过来**,不要自己发明。
