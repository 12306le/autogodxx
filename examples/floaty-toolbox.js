// ============================================================
// AIGame 脚本 - 悬浮工具箱 v3(基于 autogodx 官方文档)
//
// 设计原则:只使用 demo-floaty.md 里出现过的写法。
//   - XML 属性只用:dir / w / h / bg / id / text / ripper / gravity
//   - 位置不做手动设置(不调 setXY,避免 Rhino Number → Java int 坑)
//   - 不自实现拖动(demo 里没示范)
//   - 不用 setColor / margin / weight / emoji 等 demo 未示范的东西
//   - 面板和球切换 = close 旧的 + newApp 新的
//   - 拾取坐标几乎照抄官方"02.应用级悬浮窗-02.拾取坐标"示例
//
// 界面保持默认 Material 风格,保证能跑,再谈美化。
// ============================================================

// ---------- 函数声明(全部顶层,可安全被后面调用) ----------

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
        <button id="btnPick"  text="拾取屏幕坐标" w="max" ripper="#FFFFFF"/>
        <button id="btnHome"  text="回到桌面"     w="max" ripper="#FFFFFF"/>
        <button id="btnBack"  text="按返回键"     w="max" ripper="#FFFFFF"/>
        <button id="btnLock"  text="锁定屏幕"     w="max" ripper="#FFFFFF"/>
        <button id="btnMin"   text="收起为小球"   w="max" ripper="#FFFFFF"/>
        <button id="btnClose" text="关闭工具箱"   w="max" ripper="#FFFFFF"/>
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

    panel.id("btnPick").click(() => {
        panel.close();
        startPick();
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

function startPick() {
    $floaty.closeAll();

    // 结构完全来自 demo-floaty.md 的"02.应用级悬浮窗-02.拾取坐标"
    // 只把最后按钮的行为改成 "复制并返回面板"
    // bg="#11000000" 是几乎完全透明的蒙版,可以看清下面应用
    let floaty = $floaty.newApp(`
<ui>
    <linear id="mLinear" w="max" h="max" gravity="center" bg="#11000000">
        <text id="mText" text="点击屏幕任意位置拾取坐标"/>
        <button id="mButton" text="复制并返回工具箱" ripper="#FFFFFF"/>
    </linear>
</ui>
`);

    let x = 0;
    let y = 0;

    floaty.fill(true);

    floaty.id("mLinear").getView().setOnTouchListener((view, event) => {
        x = Math.round(event.getRawX());
        y = Math.round(event.getRawY());
        floaty.id("mText").setText(x + " , " + y);
        return true;
    });

    floaty.id("mButton").click(() => {
        floaty.close();
        if (x > 0) {
            setClip(x + "," + y);
            toast("已复制: " + x + "," + y);
        }
        showPanel();
    });
}

// ---------- 启动(放最后,确保所有 function 已就绪) ----------
if (!$permit.hasFloaty()) {
    toast("请授予悬浮窗权限后重新运行");
    $permit.floaty();
} else {
    showBall();
}
