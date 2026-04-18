// ============================================================
// AIGame 脚本 - 悬浮工具箱 v2
// v2 改进:
//   1. 默认显示 56x56 悬浮球,不再占用屏幕;点击球展开主面板
//   2. 面板可以"—"最小化回球,"×"才彻底关闭
//   3. 拾取坐标模式中间区域完全透明,能看清下面的应用
//   4. 拖动时限制在屏幕内,防止拖飞
//   5. 所有 setXY / setText 参数显式 int(Rhino Number → Java int 坑)
// ============================================================

// ---------- 1. 权限前置 ----------
if (!$permit.hasFloaty()) {
    toast("请授予悬浮窗权限后重新运行");
    $permit.floaty();
} else {
    $floaty.closeAll();
    init();
}

// ---------- 2. 状态 ----------
// 屏幕尺寸(像素)。setXY 用 px,XML 里的 w/h 用 dp,换算粗略 1dp≈3px
const SW = $device.width;
const SH = $device.height;

// 悬浮球 & 面板 共享位置
let x = Math.round(SW - 180);   // 靠右
let y = Math.round(SH * 0.35);  // 中上

// MotionEvent action 常量
const A_DOWN = 0;
const A_UP = 1;
const A_MOVE = 2;

// 拖动辅助(给 attachDrag 用)
let downRawX = 0;
let downRawY = 0;
let winStartX = 0;
let winStartY = 0;
let dragged = false;

// 粗略边界估算(避免球/面板拖出屏幕)
const BALL_SAFE = 180;      // 球所占 px 上限
const PANEL_W_PX = 720;     // 面板宽度 px 估计

// ---------- 3. 工具 ----------
function clamp(v, lo, hi) {
    if (v < lo) return lo;
    if (v > hi) return hi;
    return v;
}

function constrainBall() {
    x = clamp(x, 0, SW - BALL_SAFE) | 0;
    y = clamp(y, 80, SH - BALL_SAFE - 140) | 0;
}

function constrainPanel() {
    x = clamp(x, 20, SW - PANEL_W_PX) | 0;
    y = clamp(y, 80, SH - 800) | 0;
}

// 给一个 floaty 绑定"拖动 + 点击"到某个 id 的 view。
// onClick:若没拖动发生时触发的回调(用于球的点击展开)。
function attachDrag(floaty, dragZoneId, afterConstrain, onClick) {
    floaty.id(dragZoneId).getView().setOnTouchListener((view, event) => {
        const a = event.getAction();
        const rx = event.getRawX();
        const ry = event.getRawY();

        if (a == A_DOWN) {
            downRawX = rx;
            downRawY = ry;
            winStartX = x;
            winStartY = y;
            dragged = false;
            return true;
        }
        if (a == A_MOVE) {
            const dx = rx - downRawX;
            const dy = ry - downRawY;
            if (!dragged && (Math.abs(dx) > 10 || Math.abs(dy) > 10)) {
                dragged = true;
            }
            if (dragged) {
                x = (winStartX + dx) | 0;
                y = (winStartY + dy) | 0;
                floaty.setXY(x | 0, y | 0);
            }
            return true;
        }
        if (a == A_UP) {
            if (!dragged) {
                if (onClick) onClick();
            } else {
                if (afterConstrain) afterConstrain();
                floaty.setXY(x | 0, y | 0);
            }
            return true;
        }
        return false;
    });
}

// ---------- 4. 启动 ----------
function init() {
    showBall();
}

// ---------- 5. 悬浮球 ----------
function showBall() {
    constrainBall();

    const ball = $floaty.newApp(`
<ui>
    <linear id="ballRoot" dir="v" w="56" h="56" bg="#EE2563EB" gravity="center">
        <text id="ballIcon" text="⚡" gravity="center"/>
    </linear>
</ui>
`);

    ball.setXY(x | 0, y | 0);
    ball.id("ballIcon").setColor("#FFFFFFFF");

    attachDrag(ball, "ballRoot", constrainBall, () => {
        ball.close();
        showPanel();
    });
}

// ---------- 6. 主面板 ----------
function showPanel() {
    constrainPanel();

    const panel = $floaty.newApp(`
<ui>
    <linear dir="v" w="220" bg="#EE1F2937">
        <linear dir="h" w="max" h="40" bg="#FF2563EB">
            <linear id="dragZone" dir="h" w="0" weight="1" gravity="center">
                <text id="title" text="⚡  悬浮工具箱" gravity="center"/>
            </linear>
            <button id="btnMin"   text="—" w="38" h="32" margin="3" bg="#FF475569" ripper="#FFFFFF"/>
            <button id="btnClose" text="×" w="38" h="32" margin="3" bg="#FFEF4444" ripper="#FFFFFF"/>
        </linear>

        <linear dir="v" w="max" margin="8">
            <button id="btnPick" text="🎯  拾取屏幕坐标" w="max" h="40" margin="4" bg="#FF334155" ripper="#FFFFFF"/>
            <button id="btnHome" text="🏠  回到桌面"     w="max" h="40" margin="4" bg="#FF334155" ripper="#FFFFFF"/>
            <button id="btnBack" text="↩   按下返回键"   w="max" h="40" margin="4" bg="#FF334155" ripper="#FFFFFF"/>
            <button id="btnLock" text="🔒  锁定屏幕"     w="max" h="40" margin="4" bg="#FF334155" ripper="#FFFFFF"/>
        </linear>

        <text id="status" text="就绪 · 按住蓝色标题栏可拖动" w="max" h="30" bg="#FF0F172A" gravity="center"/>
    </linear>
</ui>
`);

    panel.setXY(x | 0, y | 0);
    panel.id("title").setColor("#FFFFFFFF");
    panel.id("status").setColor("#FFCBD5E1");

    attachDrag(panel, "dragZone", constrainPanel, null);

    panel.id("btnMin").click(() => {
        panel.close();
        showBall();
    });

    panel.id("btnClose").click(() => {
        $floaty.closeAll();
    });

    panel.id("btnPick").click(() => {
        panel.close();
        showPickMode();
    });

    panel.id("btnHome").click(() => {
        if (!ensureAct(panel)) return;
        setStatus(panel, "回到桌面…");
        $act.home();
        setStatus(panel, "已回到桌面");
    });

    panel.id("btnBack").click(() => {
        if (!ensureAct(panel)) return;
        $act.back();
        setStatus(panel, "已发送返回键");
    });

    panel.id("btnLock").click(() => {
        if (!ensureAct(panel)) return;
        setStatus(panel, "即将锁屏…");
        $thread.run(() => {
            sleep(400);
            $act.lock();
        });
    });
}

// ---------- 7. 拾取坐标模式 ----------
// 中间区域几乎完全透明,能看清下面的应用;只有顶部提示条和底部按钮条是深色
function showPickMode() {
    const pick = $floaty.newApp(`
<ui>
    <linear dir="v" w="max" h="max">
        <text id="hint" text="点击屏幕任意位置拾取坐标" w="max" h="40" bg="#DD2563EB" gravity="center"/>

        <linear id="canvas" dir="v" w="max" h="0" weight="1" bg="#01000000" gravity="center">
            <text id="coord" text="尚未选择" w="max" h="50" bg="#E60F172A" gravity="center"/>
        </linear>

        <linear dir="h" w="max" h="54" bg="#EE0F172A" gravity="center">
            <button id="btnCopy"  text="📋 复制"  w="0" weight="1" h="42" margin="6" bg="#FF10B981" ripper="#FFFFFF"/>
            <button id="btnReset" text="🔄 清除"  w="0" weight="1" h="42" margin="6" bg="#FF64748B" ripper="#FFFFFF"/>
            <button id="btnBack"  text="↩ 返回"   w="0" weight="1" h="42" margin="6" bg="#FF2563EB" ripper="#FFFFFF"/>
            <button id="btnExit"  text="✖ 退出"   w="0" weight="1" h="42" margin="6" bg="#FFEF4444" ripper="#FFFFFF"/>
        </linear>
    </linear>
</ui>
`);

    pick.fill(true);
    pick.id("hint").setColor("#FFFFFFFF");
    pick.id("coord").setColor("#FFFDE68A");

    let px = -1;
    let py = -1;

    pick.id("canvas").getView().setOnTouchListener((view, event) => {
        if (event.getAction() == A_UP) {
            px = Math.round(event.getRawX()) | 0;
            py = Math.round(event.getRawY()) | 0;
            pick.id("coord").setText("X = " + px + "    Y = " + py);
        }
        return true;
    });

    pick.id("btnCopy").click(() => {
        if (px < 0) {
            toast("请先点击屏幕选一个位置");
            return;
        }
        setClip(px + "," + py);
        toast("已复制: " + px + "," + py);
    });

    pick.id("btnReset").click(() => {
        px = -1;
        py = -1;
        pick.id("coord").setText("尚未选择");
    });

    pick.id("btnBack").click(() => {
        pick.close();
        showPanel();
    });

    pick.id("btnExit").click(() => {
        $floaty.closeAll();
    });
}

// ---------- 8. 辅助 ----------
function ensureAct(panel) {
    if ($act.hasPermit()) return true;
    setStatus(panel, "需要无障碍权限");
    $act.getPermit();
    return false;
}

function setStatus(panel, msg) {
    panel.id("status").setText(msg);
}
