# 示例脚本

本目录放可直接运行的 AIGame 脚本示例,所有 API 都来自本 skill 收录的官方文档。

## floaty-toolbox.js — 用户友好的悬浮工具箱

一个可拖动的悬浮面板,提供 4 个常用自动化快捷操作和一个坐标拾取器。

### 功能

| 按钮 | 功能 | 依赖权限 |
|---|---|---|
| 🎯 拾取屏幕坐标 | 切到全屏遮罩,点击屏幕任意位置获取并复制坐标到剪贴板 | 悬浮窗 |
| 🏠 回到桌面 | 触发系统 HOME | 无障碍 |
| ↩ 按下返回键 | 触发系统 BACK | 无障碍 |
| 🔒 锁定屏幕 | 熄屏锁屏 | 无障碍 |
| ✖ 关闭工具箱 | 关闭所有悬浮窗 | — |

### 交互

- **顶栏可拖动**:按住蓝色标题栏拖到任意位置
- **状态栏**:底部实时显示当前操作结果
- **拾取坐标模式**:
  - 中间透明区域任意点击 → 实时更新坐标
  - 底部一排:`复制 / 清除 / 返回工具箱 / 退出`
  - 按钮自身消费触摸事件,不会与坐标拾取冲突

### 使用

1. 复制 `floaty-toolbox.js` 内容到 AIGame 编辑器,运行
2. 首次运行会请求悬浮窗权限;授权后再次运行
3. 部分按钮会触发请求无障碍权限

### 不使用未文档化 API

所有调用都来自 skill 的白名单:

- `$permit.hasFloaty()` / `$permit.floaty()` — `demo-permit.md`
- `$floaty.newApp()` / `$floaty.closeAll()` — `demo-floaty.md`
- `floaty.id()` / `.close()` / `.fill()` / `.setXY()` — `demo-floaty.md`
- `floaty.id(...).click()` / `.setText()` / `.setColor()` / `.getView().setOnTouchListener()` — `demo-floaty.md` + `docs/api_cn-text.md`
- `$act.hasPermit()` / `$act.getPermit()` / `$act.home()` / `$act.back()` / `$act.lock()` — `demo-act.md`
- `$thread.run()` — `demo-thread.md`
- `sleep()` / `toast()` / `setClip()` — `demo-global-functions.md` 与 `demo-floaty.md` 均有示范

### 配色参考

使用 Material 风格 / Tailwind 色系,保证深色背景下文字对比度:

- 面板半透明背景 `#EE1F2937`
- 标题栏 `#FF2563EB`
- 按钮常态 `#FF334155`,点击涟漪白色
- 主要操作(复制)`#FF10B981` 绿
- 危险操作(关闭/退出)`#FFEF4444` 红
- 状态栏 `#FF0F172A` 近黑

### 已知限制

- 小米 / 华为等 ROM 可能对"系统级悬浮窗"有额外限制;本脚本用的是 **应用级悬浮窗**(`newApp`),通常无需额外设置。
- 坐标拾取模式是应用级悬浮窗,不会覆盖导航栏和状态栏,所以拾取到的 Y 坐标是相对应用区域而非整个屏幕。如果需要覆盖全屏,把 `$floaty.newApp(...)` 换成 `$floaty.newSys(...)`(注意系统级悬浮窗容易被游戏检测)。
