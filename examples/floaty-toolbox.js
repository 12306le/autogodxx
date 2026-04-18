// ============================================================
// AIGame 脚本 - 悬浮工具箱 v4(框选坐标版)
//
// v4 变化:把 v3 的"单点拾取坐标"替换为官方的框选悬浮窗
//   $floaty.newSelect((rect) => {...})
// 这是 AIGame 自带的范围选择器,免去自己实现拖动画框。
//
// 其他部分与 v3 保持一致(只使用 demo-floaty.md 里出现过的写法)。
// ============================================================

function showBall() {
    $floaty.closeAll();

    let ball = $floaty.newApp(`
<ui>
    <linear dir="v">
        <button id="ball" text="工具" ripper="#FFFFFF"/>
    </linear>
</ui>
`);

    ball.id("ball").click(() => {
        ball.close();
        showPanel();
    });
}

function showPanel() {
    $floaty.closeAll();

    let panel = $floaty.newApp(`
<ui>
    <linear dir="v" w="max">
        <button id="btnSelect" text="框选坐标并复制" w="max" ripper="#FFFFFF"/>
        <button id="btnHome"   text="回到桌面"       w="max" ripper="#FFFFFF"/>
        <button id="btnBack"   text="按返回键"       w="max" ripper="#FFFFFF"/>
        <button id="btnLock"   text="锁定屏幕"       w="max" ripper="#FFFFFF"/>
        <button id="btnMin"    text="收起为小球"     w="max" ripper="#FFFFFF"/>
        <button id="btnClose"  text="关闭工具箱"     w="max" ripper="#FFFFFF"/>
    </linear>
</ui>
`);

    panel.id("btnClose").click(() => {
        $floaty.closeAll();
    });

    panel.id("btnMin").click(() => {
        panel.close();
        showBall();
    });

    panel.id("btnSelect").click(() => {
        panel.close();
        startSelect();
    });

    panel.id("btnHome").click(() => {
        if (!$act.hasPermit()) { $act.getPermit(); return; }
        $act.home();
    });

    panel.id("btnBack").click(() => {
        if (!$act.hasPermit()) { $act.getPermit(); return; }
        $act.back();
    });

    panel.id("btnLock").click(() => {
        if (!$act.hasPermit()) { $act.getPermit(); return; }
        $act.lock();
    });
}

function startSelect() {
    // 官方 API:$floaty.newSelect 创建一个带可调矩形的悬浮窗
    // 用户关闭时回调 rect。demo-floaty.md 第 282 行 + docs/api_cn-floaty.md 第 139 行
    // 回调类型文档写的是 SimpleFloatArrCallback,实际可能是 float[] 或 Rect,都兼容
    $floaty.newSelect((rect) => {
        log("框选结果 raw:", rect);

        if (rect == null) {
            toast("未获取到框选范围");
            showPanel();
            return;
        }

        let text;
        if (typeof rect.length === "number") {
            // 情况 A:float[] / 数组(按文档的 SimpleFloatArrCallback)
            let parts = [];
            for (let i = 0; i < rect.length; i++) {
                parts.push(Math.round(rect[i]));
            }
            text = parts.join(",");
        } else if (rect.left !== undefined) {
            // 情况 B:android.graphics.Rect 风格对象
            text = Math.round(rect.left) + "," +
                   Math.round(rect.top) + "," +
                   Math.round(rect.right) + "," +
                   Math.round(rect.bottom);
        } else {
            // 兜底:直接 toString
            text = "" + rect;
        }

        setClip(text);
        toast("已复制: " + text);
        showPanel();
    });
}

// ---------- 启动 ----------
if (!$permit.hasFloaty()) {
    toast("请授予悬浮窗权限后重新运行");
    $permit.floaty();
} else {
    showBall();
}
