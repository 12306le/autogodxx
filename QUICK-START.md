# 快速起步模板

每个模板都是 **完整可跑** 的最小脚本,直接复制用。所有模板都已经包含对应的权限检查。

---

## T1. 最小"Hello World"

```javascript
// AIGame 脚本 - Hello World
log('脚本启动');
toast('你好 AIGame');
sleep(1000);
log('脚本结束');
```

---

## T2. 点击固定坐标(带权限检查)

```javascript
// AIGame 脚本 - 定点点击
if (!$act.hasPermit()) {
    toast('请先开启无障碍');
    $act.getPermit();
    exit();
}

$act.click(540, 1200);
sleep(500);
$act.click(540, 1400);
```

---

## T3. 按文本找节点并点击

```javascript
// AIGame 脚本 - 查找并点击按钮
if (!$act.hasPermit()) { $act.getPermit(); exit(); }

let node = $act.selector()
    .text('登录')
    .cls('android.widget.Button')
    .waitFirst(5000);  // 最多等 5 秒

if (node != null) {
    $act.click(node);
} else {
    toast('没找到登录按钮');
}
```

---

## T4. 截图 + OCR 识别一段文字

```javascript
// AIGame 脚本 - OCR 识别屏幕文字
if (!$screen.hasPermit()) {
    $screen.getPermit();
    exit();
}

let img = $screen.cap();
if (img == null) { toast('截图失败'); exit(); }

let results = $ocr.detect(img);  // 具体方法名以 demo-ocr.md 为准
for (let r of results) {
    log(r.text + ' @ ' + r.rect);
}
img.recycle();
```

> 方法签名以 `demo-ocr.md` 和 `docs/api_cn-ocr.md` 为准,可能是 `$ocr.rec` / `$ocr.paddle` / `$ocr.mlkit` 之一。

---

## T5. 找色循环点击

```javascript
// AIGame 脚本 - 找色并点击
if (!$act.hasPermit() || !$screen.hasPermit()) {
    toast('请开启无障碍和截图权限');
    exit();
}

while (true) {
    let img = $screen.cap();
    if (img == null) { sleep(500); continue; }

    let p = $img.findColor(img, '#FF5500', { similarity: 0.9 });
    img.recycle();

    if (p != null) {
        $act.click(p.x, p.y);
        sleep(1200);
    } else {
        sleep(800);
    }
}
```

> `$img.findColor` 的确切参数与返回值以 `demo-img.md` 为准。

---

## T6. 悬浮窗 + 控制按钮

```javascript
// AIGame 脚本 - 悬浮控制按钮
if (!$floaty.hasPermit()) {
    $floaty.getPermit();
    exit();
}

let fw = $floaty.create({
    layout: `<button id="btn" text="开始" w="80" h="40"/>`,
    x: 100, y: 300
});

fw.btn.click(() => {
    toast('点击了悬浮按钮');
});
```

> 悬浮窗的布局 DSL 与事件绑定方式请对照 `demo-floaty.md`。

---

## T7. HTTP GET/POST

```javascript
// AIGame 脚本 - HTTP 请求
let resp = $http.get('https://httpbin.org/get');
log(resp.statusCode + ' ' + resp.body);

let resp2 = $http.post('https://httpbin.org/post', {
    name: 'aigame',
    ts: Date.now()
});
log(resp2.body);
```

> 确认签名:`demo-http.md` 和 `docs/api_cn-http.md`。

---

## T8. 多线程后台任务

```javascript
// AIGame 脚本 - 后台线程
$thread.run(() => {
    for (let i = 0; i < 10; i++) {
        log('后台 ' + i);
        sleep(1000);
    }
});
log('主线程继续');
```

---

## T9. 读写文件 + SQLite

```javascript
// AIGame 脚本 - 文件 + SQLite
let path = '/sdcard/aigame_demo.txt';
$file.write(path, 'hello');
log($file.read(path));

let db = $sqlite.open('/sdcard/aigame_demo.db');
db.exec('CREATE TABLE IF NOT EXISTS t(id INTEGER, name TEXT)');
db.exec("INSERT INTO t VALUES(1,'a')");
let rows = db.query('SELECT * FROM t');
log(JSON.stringify(rows));
db.close();
```

---

## T10. UI 界面 + 事件

```javascript
// AIGame 脚本 - 简单 UI
$ui.layout(`
<vertical padding="16">
    <text text="演示脚本" textSize="18"/>
    <button id="btn_start" text="开始"/>
    <text id="tv_state" text="待机"/>
</vertical>
`);

$ui.btn_start.click(() => {
    $ui.tv_state.text('运行中…');
    $thread.run(() => {
        // 业务逻辑
        sleep(1500);
        $ui.run(() => $ui.tv_state.text('完成'));
    });
});
```

> 布局标签、属性名以 `docs/ui_cn-*.md` 为准。

---

## 写脚本的通用骨架

```javascript
// AIGame 脚本 - <你的脚本名>
// 1) 权限检查
if (!$act.hasPermit()) { $act.getPermit(); exit(); }
// if (!$screen.hasPermit()) { $screen.getPermit(); exit(); }

// 2) 全局配置
const CFG = { retry: 3, waitMs: 1000 };

// 3) 工具函数
function waitAndClick(text, timeout) {
    let n = $act.selector().text(text).waitFirst(timeout || 5000);
    if (n == null) return false;
    $act.click(n);
    return true;
}

// 4) 主流程
function main() {
    log('脚本开始');
    if (!waitAndClick('登录', 5000)) { toast('找不到登录'); return; }
    sleep(CFG.waitMs);
    log('脚本结束');
}

main();
```

---

**接下来**:根据具体需求,打开 `SCENARIOS.md` 找模块,再进 `demo-<模块>.md` 看完整示例。
