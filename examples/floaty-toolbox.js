// ============================================================
// AIGame 脚本 - 用户友好的悬浮工具箱
// 功能:可拖动主面板 + 拾取坐标 + 回到桌面 + 返回键 + 锁屏
// 参考:demo-floaty.md / demo-permit.md / demo-act.md 官方示例
// 所有 API 均来自 AIGame 官方文档,无自创函数
// ============================================================

// ---------- 1. 权限前置 ----------
if (!$permit.hasFloaty()) {
    toast("请授予悬浮窗权限后重新运行");
    $permit.floaty();
} else {
    // 清理上一次遗留的悬浮窗
    $floaty.closeAll();
    startApp();
}

// ---------- 2. 状态 ----------
// 主面板当前位置(持久化,方便拖动后再展开仍在原处)
let panelX = 60;
let panelY = 300;

// 拖动期间临时变量
let dragRawX0 = 0;
let dragRawY0 = 0;
let winX0 = 0;
let winY0 = 0;

// MotionEvent action 常量(Android 官方)
const A_DOWN = 0;
const A_UP = 1;
const A_MOVE = 2;

// ---------- 3. 启动 ----------
function startApp() {
    showMainPanel();
    toast("悬浮工具箱已启动,按住顶栏可拖动");
}

// ---------- 4. 主面板 ----------
function showMainPanel() {
    const panel = $floaty.newApp(`
<ui>
    <linear dir="v" w="240" bg="#EE1F2937">
        <!-- 标题栏(纯拖动区,不放按钮,避免事件冲突) -->
        <linear id="header" dir="h" w="max" h="44" bg="#FF2563EB" gravity="center">
            <text id="title" text="⚡ 悬浮工具箱" gravity="center"/>
        </linear>

        <!-- 功能按钮区 -->
        <linear dir="v" w="max" margin="8">
            <button id="btnPick"  text="🎯  拾取屏幕坐标" w="max" h="42" margin="4" bg="#FF334155" ripper="#FFFFFF"/>
            <button id="btnHome"  text="🏠  回到桌面"     w="max" h="42" margin="4" bg="#FF334155" ripper="#FFFFFF"/>
            <button id="btnBack"  text="↩   按下返回键"   w="max" h="42" margin="4" bg="#FF334155" ripper="#FFFFFF"/>
            <button id="btnLock"  text="🔒  锁定屏幕"     w="max" h="42" margin="4" bg="#FF334155" ripper="#FFFFFF"/>
            <button id="btnClose" text="✖   关闭工具箱"   w="max" h="42" margin="4" bg="#FFEF4444" ripper="#FFFFFF"/>
        </linear>

        <!-- 状态栏 -->
        <text id="status" text="就绪" w="max" h="28" bg="#FF0F172A" gravity="center"/>
    </linear>
</ui>
`);

    // 初始位置
    // 注意:Rhino 的 Number 默认是 double,AIGame 的 setXY 只认 int,
    // 必须用 `| 0` 强制 ToInt32,否则会抛 "找不到方法 setXY(Double,Double)"
    panel.setXY(panelX | 0, panelY | 0);

    // 文字颜色(setColor 来自 docs/api_cn-text.md)
    panel.id("title").setColor("#FFFFFFFF");
    panel.id("status").setColor("#FFCBD5E1");

    // ----- 拖动(触摸 header 原生 view) -----
    panel.id("header").getView().setOnTouchListener((view, event) => {
        const a = event.getAction();
        const rx = event.getRawX();
        const ry = event.getRawY();

        if (a == A_DOWN) {
            dragRawX0 = rx;
            dragRawY0 = ry;
            winX0 = panelX;
            winY0 = panelY;
            return true;
        }
        if (a == A_MOVE) {
            panelX = (winX0 + rx - dragRawX0) | 0;
            panelY = (winY0 + ry - dragRawY0) | 0;
            panel.setXY(panelX, panelY);
            return true;
        }
        if (a == A_UP) {
            return true;
        }
        return false;
    });

    // ----- 关闭 -----
    panel.id("btnClose").click(() => {
        $floaty.closeAll();
    });

    // ----- 切到拾取模式 -----
    panel.id("btnPick").click(() => {
        panel.close();
        showPickMode();
    });

    // ----- 回到桌面 -----
    panel.id("btnHome").click(() => {
        if (!ensureAct(panel)) return;
        setStatus(panel, "回到桌面…");
        $act.home();
        setStatus(panel, "已回到桌面");
    });

    // ----- 按返回键 -----
    panel.id("btnBack").click(() => {
        if (!ensureAct(panel)) return;
        $act.back();
        setStatus(panel, "已发送返回键");
    });

    // ----- 锁屏(放到子线程,给点击动画收尾时间) -----
    panel.id("btnLock").click(() => {
        if (!ensureAct(panel)) return;
        setStatus(panel, "即将锁屏…");
        $thread.run(() => {
            sleep(400);
            $act.lock();
        });
    });
}

// ---------- 5. 拾取坐标模式(全屏遮罩) ----------
function showPickMode() {
    const pick = $floaty.newApp(`
<ui>
    <linear dir="v" w="max" h="max">
        <text id="hint" text="点击屏幕任意位置拾取坐标" w="max" h="44" bg="#DD2563EB" gravity="center"/>

        <linear id="canvas" dir="v" w="max" h="0" weight="1" bg="#66000000" gravity="center">
            <text id="coord" text="尚未选择" w="max" bg="#DD000000" gravity="center" margin="32"/>
        </linear>

        <linear dir="h" w="max" h="60" bg="#FF0F172A" gravity="center">
            <button id="btnCopy"  text="📋 复制"  w="0" weight="1" h="44" margin="6" bg="#FF10B981" ripper="#FFFFFF"/>
            <button id="btnReset" text="🔄 清除"  w="0" weight="1" h="44" margin="6" bg="#FF64748B" ripper="#FFFFFF"/>
            <button id="btnBack"  text="↩ 返回"   w="0" weight="1" h="44" margin="6" bg="#FF2563EB" ripper="#FFFFFF"/>
            <button id="btnExit"  text="✖ 退出"   w="0" weight="1" h="44" margin="6" bg="#FFEF4444" ripper="#FFFFFF"/>
        </linear>
    </linear>
</ui>
`);

    // 全屏覆盖
    pick.fill(true);

    // 文字白色
    pick.id("hint").setColor("#FFFFFFFF");
    pick.id("coord").setColor("#FFFDE68A");

    let px = -1;
    let py = -1;

    // 在中间的 canvas 区监听触摸。点击按钮时按钮本身消费事件,
    // canvas 监听不会触发,因此按钮正常工作。
    pick.id("canvas").getView().setOnTouchListener((view, event) => {
        if (event.getAction() == A_UP) {
            px = Math.round(event.getRawX());
            py = Math.round(event.getRawY());
            pick.id("coord").setText("X = " + px + "     Y = " + py);
        }
        return true;
    });

    pick.id("btnCopy").click(() => {
        if (px < 0) {
            toast("请先点击屏幕选一个位置");
            return;
        }
        setClip(px + "," + py);
        toast("已复制:" + px + "," + py);
    });

    pick.id("btnReset").click(() => {
        px = -1;
        py = -1;
        pick.id("coord").setText("尚未选择");
    });

    pick.id("btnBack").click(() => {
        pick.close();
        showMainPanel();
    });

    pick.id("btnExit").click(() => {
        $floaty.closeAll();
    });
}

// ---------- 6. 工具函数 ----------
function ensureAct(panel) {
    if ($act.hasPermit()) return true;
    setStatus(panel, "需要无障碍权限");
    $act.getPermit();
    return false;
}

function setStatus(panel, msg) {
    panel.id("status").setText(msg);
}
