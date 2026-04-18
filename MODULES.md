# 模块一览(按功能分类)

每个模块对应一个全局对象(以 `$` 开头)。本表用于 AI 快速定位写脚本时需要的模块集合。

**查询流程**:这里看模块 → 去 `demo-<模块>.md` 看示例 → 需要精确参数再去 `docs/api_cn-<模块>.md`。

## 🧭 交互核心

| 模块 | 作用 | 关键文件 |
|---|---|---|
| `$act` | 无障碍点击/滑动/手势/节点选择/输入/系统键 | `demo-act.md`, `docs/api_cn-act.md` |
| `$touch` | 触摸事件底层监听 | `demo-touch.md`, `docs/api_cn-touch.md` |
| `$act.selector()` | UI 节点选择器(链式筛选) | `docs/api_cn-act-UiSelector.md` |

## 🖼️ 屏幕 / 图像

| 模块 | 作用 | 关键文件 |
|---|---|---|
| `$screen` | 截屏、屏幕信息 | `demo-screen.md`, `docs/api_cn-screen.md` |
| `$img` | 图像处理、找色、模板匹配 | `demo-img.md`, `docs/api_cn-img.md` |
| `$ocr` | OCR(PaddleOCR / MLKit / PPOcrV5) | `demo-ocr.md`, `docs/api_cn-ocr.md` |
| `$qr` | 二维码生成/识别 | `demo-qr.md`, `docs/api_cn-qr.md` |
| `$draw` | 在屏幕上绘制(调试用) | `demo-draw.md`, `docs/api_cn-draw.md` |
| `$canvas` | 画布(离屏绘制) | `demo-canvas.md`, `docs/api_cn-canvas.md` |
| `$color` | 颜色转换与比较 | `demo-color.md`, `docs/api_cn-color.md` |
| `yolo` | YOLO 目标检测(仅 docs) | `docs/api_cn-yolo.md` |

## 📱 应用 / 系统

| 模块 | 作用 | 关键文件 |
|---|---|---|
| `$app` | 应用启动/卸载/列表/分享 | `demo-app.md`, `docs/api_cn-app.md` |
| `$device` | 设备信息(型号、系统、分辨率) | `demo-device.md`, `docs/api_cn-device.md` |
| `$sys` | 系统级(shell、剪贴板、音量等) | `demo-sys.md`, `docs/api_cn-sys.md` |
| `$permit` | 权限申请 | `demo-permit.md`, `docs/api_cn-permit.md` |

## 🖥️ UI 构建

| 模块 | 作用 | 关键文件 |
|---|---|---|
| `$ui` | 主 UI 界面构建 | `demo-ui.md`, `docs/ui_cn-*.md` |
| `$dialog` | 阻塞对话框 | `demo-dialog.md`, `docs/api_cn-dialog.md` |
| `$alert` | 非阻塞对话框 | `demo-alert.md`, `docs/api_cn-alert.md` |
| `$floaty` | 悬浮窗(Sys/App/Adj/Select) | `demo-floaty.md`, `docs/api_cn-floaty*.md` |
| `$tip` | 气泡提示 | `demo-tip.md`, `docs/api_cn-tip.md` |
| `$arc` | 弧形菜单 | `demo-arc.md`, `docs/api_cn-arc.md` |
| `$fc` | 浮动菜单控制器 | `demo-fc.md`, `docs/api_cn-fc.md` |

## 💾 存储

| 模块 | 作用 | 关键文件 |
|---|---|---|
| `$file` | 文件读写 | `demo-file.md`, `docs/api_cn-file.md` |
| `$sqlite` | SQLite 数据库 | `demo-sqlite.md`, `docs/api_cn-sqlite.md` |
| `$excel` | Excel 读写 | `demo-excel.md`, `docs/api_cn-excel.md` |
| `$res` | 内置资源 | `demo-res.md`, `docs/api_cn-res.md` |
| `$bus` | 全局共享数据总线 | `demo-bus.md`, `docs/api_cn-bus.md` |

## 🌐 网络

| 模块 | 作用 | 关键文件 |
|---|---|---|
| `$http` | HTTP 请求(同步) | `demo-http.md`, `docs/api_cn-http.md` |
| `$ws` | WebSocket | `demo-ws.md`, `docs/api_cn-ws.md` |

## ⚙️ 并发 / 生命周期

| 模块 | 作用 | 关键文件 |
|---|---|---|
| `$thread` | 子线程 | `demo-thread.md`, `docs/api_cn-thread.md` |
| `$task` | 计划任务 | `demo-task.md`, `docs/api_cn-task.md` |
| `$event` | 事件总线 | `demo-event.md`, `docs/api_cn-event.md` |
| `$engine` | 脚本引擎控制 | `demo-engine.md`, `docs/api_cn-engine*.md` |

## 🛠️ 辅助工具

| 模块 | 作用 | 关键文件 |
|---|---|---|
| `$str` | 字符串工具 | `demo-str.md`, `docs/api_cn-str.md` |
| `$date` | 日期时间 | `demo-date.md`, `docs/api_cn-date.md` |
| `$crypt` | 加密/哈希 | `demo-crypt.md`, `docs/api_cn-crypt.md` |
| `$log` | 日志系统 | `demo-log.md`, `docs/api_cn-log.md` |
| `$tts` | 文字转语音 | `demo-tts.md`, `docs/api_cn-tts.md` |
| `$media` | 媒体播放 | `demo-media.md`, `docs/api_cn-media.md` |

## 🧩 扩展

| 模块 | 作用 | 关键文件 |
|---|---|---|
| `$ext` | 加载 apk / dex / jar / so | `demo-ext.md`, `docs/api_cn-ext*.md` |
| E4X 支持 | XML 字面量语法 | `demo-e4x-support.md` |
| 模块开发 | 自定义模块化 | `demo-module-development.md` |
| 脚本语法 | Rhino JS 语法速查 | `demo-script-language.md` |
| 综合项目示例 | 端到端项目 | `demo-project-examples.md` |
| 全局函数 | `log / toast / sleep / exit / rand ...` | `demo-global-functions.md` |

## 📖 导览

| 文件 | 说明 |
|---|---|
| `docs/guide-index.md` | 官方快速开始导览 |
| `docs/index.md` | 产品首页 |
| `DOCS-INDEX.md` | 全部 `docs/` 文件索引 |
| `api-whitelist-zh.md` | 全部模块的中文 API 标题清单 |
| `demo-whitelist-en.md` | 全部示例里出现过的英文方法名清单 |

---

**记忆原则**:不要背 API。记住"这个需求用哪个模块",剩下的查 demo。
