# 场景 → API 映射索引

**当用户用自然语言描述需求时,先查这里定位模块,再去读对应的 `demo-*.md`。**

## 无障碍 / 屏幕操作(`$act`)

| 用户意图 | 推荐 API | 示例 |
|---|---|---|
| 点击某坐标 | `$act.click(x, y)` | `demo-act.md` |
| 长按 | `$act.press(x, y)` | `demo-act.md` |
| 滑动(A→B) | `$act.move(x1, y1, x2, y2, dur)` | `demo-act.md` |
| 多指手势 | `$act.gesture(g1, g2, ...)` | `demo-act.md` |
| 回到桌面 / 返回 / 菜单 | `$act.home()` / `$act.back()` / `$act.menu()` | `demo-act.md` |
| 息屏/唤醒/锁屏 | `$act.power()` / `$act.lock()` / `$act.unlock()` | `demo-act.md` |
| 下拉通知栏 | `$act.notifications()` | `demo-act.md` |
| 文本输入 | `$act.input(...)` | `demo-act.md` |
| 查找界面节点 | `$act.selector()...findFirst()` | `demo-act.md` + `docs/api_cn-act-UiSelector.md` |

## 应用管理(`$app`)

| 用户意图 | 推荐 API |
|---|---|
| 启动应用 | `$app.run(...)` / `$app.runApp(...)` / `$app.runPkg(...)` |
| 卸载应用 | `$app.uninstall(...)` / `$app.uninstallPkg(...)` |
| 应用列表 | `$app.ls()` / `$app.lsUserApp()` / `$app.lsRecent()` |
| 图标/名称/包名 | `$app.getIcon()` / `$app.appName()` / `$app.pkgName()` |
| 打开 URL / 分享 | `$app.openUrl()` / `$app.shareText()` / `$app.shareImg()` |
| 发邮件/短信/广播 | `$app.sendMail()` / `$app.sendSms()` / `$app.sendBroadcast()` |

## 截图 / 图像(`$screen`、`$img`、`$ocr`、`$qr`、`$draw`)

| 用户意图 | 推荐模块 | 看 demo |
|---|---|---|
| 截屏 | `$act.screenshot()` 或 `$screen.cap()` | `demo-act.md` / `demo-screen.md` |
| 图像模板匹配 | `$img.*` | `demo-img.md` |
| 找色/找多个色 | `$img.findColor*` | `demo-img.md` + `docs/api_cn-img.md` |
| OCR 文字识别 | `$ocr.*` | `demo-ocr.md` + `docs/api_cn-ocr.md` |
| 二维码识别/生成 | `$qr.*` | `demo-qr.md` |
| 画图 / 在屏幕上绘制 | `$draw.*` / `$canvas.*` | `demo-draw.md` / `demo-canvas.md` |
| YOLO 目标检测 | `$yolo.*` | `docs/api_cn-yolo.md`(demo 可能缺失) |

## UI / 界面构建

| 用户意图 | 模块 | demo |
|---|---|---|
| 写一个带按钮的 UI | `$ui` | `demo-ui.md` + `docs/ui_cn-*.md` |
| 对话框 | `$dialog` | `demo-dialog.md` |
| 非阻塞弹窗 | `$alert` | `demo-alert.md` |
| 悬浮窗(系统级 / 应用级) | `$floaty` | `demo-floaty.md` |
| 气泡 / Toast / Tip | `$tip` | `demo-tip.md` |
| 底部抽屉菜单 | `$arc` | `demo-arc.md` |

## 数据存储

| 用户意图 | 模块 |
|---|---|
| 读写普通文件 | `$file` → `demo-file.md` |
| SQLite 数据库 | `$sqlite` → `demo-sqlite.md` |
| Excel 读写 | `$excel` → `demo-excel.md` |
| 全局变量总线 | `$bus` → `demo-bus.md` |
| 资源文件(随应用发布的) | `$res` → `demo-res.md` |

## 网络

| 用户意图 | 模块 |
|---|---|
| HTTP 请求(GET/POST/下载) | `$http` → `demo-http.md` |
| WebSocket | `$ws` → `demo-ws.md` |

## 并发 / 任务

| 用户意图 | 模块 |
|---|---|
| 开子线程 | `$thread` → `demo-thread.md` |
| 计划任务 / 定时 | `$task` → `demo-task.md` |
| 跨脚本通信 / 事件 | `$event` → `demo-event.md` |
| 引擎控制(启动/停止其他脚本) | `$engine` → `demo-engine.md` |

## 系统 / 设备

| 用户意图 | 模块 |
|---|---|
| 设备信息(型号、版本、分辨率) | `$device` → `demo-device.md` |
| 系统操作 / shell | `$sys` → `demo-sys.md` |
| 权限申请 | `$permit` → `demo-permit.md` |

## 辅助工具

| 用户意图 | 模块 |
|---|---|
| 字符串处理 | `$str` → `demo-str.md` |
| 日期 / 时间 | `$date` → `demo-date.md` |
| 颜色(十六进制转换、对比) | `$color` → `demo-color.md` |
| 加密 / Hash | `$crypt` → `demo-crypt.md` |
| 语音朗读(TTS) | `$tts` → `demo-tts.md` |
| 媒体(播放/录音) | `$media` → `demo-media.md` |
| 日志持久化 | `$log` → `demo-log.md` |

## 扩展 / 进阶

| 用户意图 | 模块 |
|---|---|
| 触摸事件底层监听 | `$touch` → `demo-touch.md` |
| 加载 apk / dex / jar / so | `$ext` → `demo-ext.md` |
| 浮动菜单控制器 | `$fc` → `demo-fc.md` |
| E4X(XML 字面量) | `demo-e4x-support.md` |
| 模块化开发 | `demo-module-development.md` |
| 综合项目示例 | `demo-project-examples.md` |
| 脚本语法速查 | `demo-script-language.md` |

## 常见复合场景

| 场景 | 组合 |
|---|---|
| "自动点击某个按钮" | `$act.selector().text(...).waitFirst()` → `$act.click(node)` |
| "循环找图并点击" | `$screen.cap()` → `$img.findColor*` → `$act.click()` → `sleep()` |
| "识别屏幕文字并判断" | `$screen.cap()` → `$ocr.*` → 业务判断 |
| "悬浮按钮控制脚本" | `$floaty.*` 建悬浮窗 → 点击 → `$engine.run/stop` |
| "读本地 Excel 并写回" | `$file.exists` → `$excel.open` → 修改 → `$excel.save` |
| "长时任务 + UI 进度" | `$thread.run(() => ...)` + `$ui` 里 `progress` 组件 |

找不到匹配的场景时,去 `api-whitelist-zh.md` 按模块名扫一遍,再打开对应 `docs/api_cn-<模块>.md` 查参数。
