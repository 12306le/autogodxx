---
name: aigame-android-skill
description: AIGame / AutoGOD / AutoGODX Android 自动化脚本开发技能。适用场景包括 Rhino JavaScript 脚本、无障碍点击/滑动/手势、屏幕截图与 OCR、YOLO 目标识别、图像模板匹配、应用启动与管理、UI 构建与悬浮窗、文件/SQLite/网络(HTTP/WS)、多线程与定时任务、ROOT/Shizuku 高权限操作、剪贴板/通知/系统设置自动化。只允许调用本技能包内显式出现的 API,严禁臆造函数名;必要时先读 CODING-RULES.md、SCENARIOS.md、INDEX.md。
---

# AIGame / AutoGOD Android 自动化脚本技能

当用户要求 **编写、修改、调试、解释、重构** AIGame / AutoGOD / AutoGODX 脚本时使用本技能。

## 必读(按顺序)

按照下列顺序加载最少必要文件,不要一次性读全部 docs:

1. `CODING-RULES.md` — 硬性编码约束,决定能否继续
2. `SCENARIOS.md` — 先用"用户意图 → 推荐 API"索引定位模块
3. `QUICK-START.md` — 最常用的脚本模板与环境假设
4. `PITFALLS.md` — 已知陷阱和反模式
5. `demo-whitelist-en.md` — 英文方法名白名单(确认能用)
6. `api-whitelist-zh.md` — 中文 API 标题白名单(用于核对)

## 查询流程(严格遵守)

```
用户意图
  ↓
SCENARIOS.md 定位模块 ($act / $img / $ocr / ...)
  ↓
demo-<module>.md 看最近的官方示例(抄风格、抄调用)
  ↓
docs/api_cn-<module>.md / docs/api_en-<module>.md 核对参数与返回值
  ↓
如涉及 UI 再查 docs/ui_cn-*.md / docs/ui_en-*.md
```

**docs/ 一次只读用到的一两个文件**(共 261 个,全部加载会耗尽上下文)。

## 核心硬约束(详见 CODING-RULES.md)

- 只能使用本 skill 显式出现的对象名与方法名
- 英文方法名以 `demo-whitelist-en.md` 和 `demo-*.md` 为准
- 禁止把中文方法名自行翻译成英文驼峰命名
- 禁止使用 Node.js / 浏览器 / npm / AutoX.js / Auto.js 特有 API
- 不支持 `async/await`、ESM `import/export`(Rhino JS 环境)
- 用户要求的能力在文档中找不到时,必须显式说明"当前文档未找到",不要猜
- 凡涉及无障碍、ROOT、截图、OCR、悬浮窗、Shizuku 等权限,先加前置检查

## 输出代码时的最小清单

- [ ] 先找到对应 `demo-*.md` 里最接近的示例
- [ ] 再打开 `docs/api_cn-<mod>.md` 核对参数列表
- [ ] 权限类 API 前加 `hasPermit()` / `getPermit()` 检查
- [ ] UI/界面切换前后加等待(`sleep`)或节点判空
- [ ] 用 `$log` / `toast` 输出调试信息,不要用 `console.log`
- [ ] 变量声明用 `let` / `const`,避免 `var`(除非示例如此)
- [ ] 紧扣官方示例风格,不混写多种写法

## 冲突仲裁规则

| 冲突情形 | 处理方式 |
|---|---|
| 示例能证明英文方法名存在 | 按示例写 |
| 只有中文标题、示例里没对应英文 | 保留中文名或说明未找到英文名,不要臆造 |
| 合并文档与 `docs/*.md` 有差异 | 以 `docs/*.md` 原文为准 |
| demo 风格与 docs 描述冲突 | 以 demo 为准(demo 来自官方可运行代码) |

## 不属于本技能范围

- 本机 Node.js / npm / 浏览器 JS / TypeScript / React 等
- 其他 Android 自动化框架(Auto.js / AutoX.js / Hamibot 等)
- 打包 APK / Android Studio 原生开发

这些场景出现时,应提示用户"本技能仅覆盖 AIGame 脚本环境"并停止使用本技能。
