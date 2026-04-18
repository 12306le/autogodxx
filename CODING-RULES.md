# 编码硬约束

这些规则优先级高于用户临时要求;若与用户请求冲突,应先澄清而不是破坏规则。

## 1. API 名称约束

1. 只能使用本 skill 包内 **显式出现** 的对象、方法、属性、常量名。
2. 英文方法名:优先查 `demo-whitelist-en.md` 与 `demo-*.md`。
3. 中文 API 名称以 `api-whitelist-zh.md` 与 `docs/api_cn-*.md` 为准;**禁止自行翻译**成猜测的驼峰/下划线英文。
4. 一个方法找不到时,按此流程处理:
   - 明确告知"当前文档未找到该 API/函数";
   - 提供最接近的替代 API 或伪代码;
   - 说明若需此能力应补充哪份文档。
5. 不要把 `toast(...)` 写成 `$sys.toast(...)`、不要把 `sleep(...)` 写成 `$thread.sleep(...)` —— 以示例实际调用形态为准。

## 2. 运行环境约束

- 脚本引擎为 **Rhino JavaScript**(不是 V8、不是 Node.js)。
- 默认支持 ES5 及部分 ES6 特性,但要避免:
  - `async / await`
  - ESM `import` / `export`(使用 AIGame 的模块机制代替)
  - Node.js 内置模块(`fs`、`path`、`http` 等)
  - 浏览器 API(`document`、`window`、`fetch` 等)
  - npm 包与 `require('some-package')`
- 网络请求用 `$http`,不要用 `fetch` / `XMLHttpRequest` / `axios`。
- 日志用 `$log` / `log()` / `toast()`,不要用 `console.log`。
- 文件操作用 `$file`,不要用 `fs`。

## 3. 权限前置

涉及以下能力前 **必须** 先检查/请求对应权限:

| 能力 | 前置 |
|---|---|
| 点击/滑动/手势/按键 | `$act.hasPermit()` + 必要时 `$act.getPermit()` |
| 截图 / 图像识别 / OCR / 找色 | `$screen.hasPermit()` + `$screen.getPermit()` |
| 悬浮窗(任意 `$floaty.*`) | `$floaty.hasPermit()` + `$floaty.getPermit()` |
| 应用使用情况(任务列表等) | `$app.hasUsagePermit()` + `$app.getUsagePermit()` |
| 通知读取/发送 | `$act.notifications()` / `$permit.*` |
| ROOT / Shizuku | 参考 `demo-permit.md` 里的判断示例 |
| 读写共享存储 | `$permit.*` 相关 |

权限缺失时应 `toast` 或 `log` 明确提示,而不是沉默失败。

## 4. UI 和节点操作

- 涉及界面切换(启动 app、跳转、弹窗)时,**前后都加** `sleep(毫秒)` 或使用 `waitFor` / `waitFirst` / `waitLast`。
- 选中节点后,调用节点方法前 **先判 `node != null`**。
- 不要把 selector 链式调用拆到多行时漏掉 `.` / `;`。
- 对话框/UI 交互默认在 UI 线程执行;耗时逻辑放 `$thread` 里。

## 5. 代码风格

- 用 `let` / `const`,避免隐式全局变量。
- 字符串优先用单引号,与示例保持一致。
- 注释用中文,简明说明"为什么",不写"做了什么"。
- 不凭空引入工具函数文件,除非用户明确要模块化(参考 `demo-module-development.md`)。
- 产出脚本末尾不要附加"以上代码已经过测试"等虚假保证。

## 6. 冲突仲裁

| 场景 | 处理 |
|---|---|
| 示例用了 `$X.foo()` 但白名单没有 | 以示例为准,更新认知,但在回复中注明"白名单未覆盖" |
| docs 与 demo 不一致 | 以 demo 为准(demo 是官方可运行代码) |
| 用户写了未文档化的 API | 指出"该方法在 skill 中未出现",提供替代或请求确认 |
| 用户坚持要用 Node.js / npm | 说明不兼容 AIGame,并停止生成该代码 |

## 7. 输出格式

- 代码块第一行注释:`// AIGame 脚本 - <简述>`
- 权限检查放代码最前面
- 主逻辑集中在单一入口函数或顶层顺序结构
- 不随意把示例里的顺序逻辑重构成"更优雅"的抽象
