# 文件总索引

本 skill 包是完整的 AIGame / AutoGOD / AutoGODX 文档 + 示例 + 引导。以下是目录树概览。

## 🔑 入口文件(AI 应先读的)

| 文件 | 作用 |
|---|---|
| [`SKILL.md`](./SKILL.md) | **技能入口**,定义触发条件和查询流程 |
| [`CODING-RULES.md`](./CODING-RULES.md) | **硬编码约束**,违反即出错 |
| [`SCENARIOS.md`](./SCENARIOS.md) | **场景 → API** 映射表(从用户意图找模块) |
| [`QUICK-START.md`](./QUICK-START.md) | **10 个最常用模板**,可直接抄 |
| [`PITFALLS.md`](./PITFALLS.md) | 常见陷阱和反模式 |
| [`MODULES.md`](./MODULES.md) | 模块分类一览 |

## 📑 白名单 / 索引

| 文件 | 作用 |
|---|---|
| [`api-whitelist-zh.md`](./api-whitelist-zh.md) | 中文 API 标题白名单(按模块分组) |
| [`demo-whitelist-en.md`](./demo-whitelist-en.md) | 示例中出现的英文方法名白名单 |
| [`DOCS-INDEX.md`](./DOCS-INDEX.md) | 原始 `docs/` 目录索引 |
| [`COVERAGE-NOTES.md`](./COVERAGE-NOTES.md) | 文档覆盖差异说明 |

## 📘 按模块的示例(43 个)

所有 `demo-*.md` 已按模块整理,**每次只读一个**,不要批量加载。

```
demo-act.md                 demo-alert.md               demo-app.md
demo-arc.md                 demo-bus.md                 demo-canvas.md
demo-color.md               demo-crypt.md               demo-date.md
demo-device.md              demo-dialog.md              demo-draw.md
demo-e4x-support.md         demo-engine.md              demo-event.md
demo-excel.md               demo-ext.md                 demo-fc.md
demo-file.md                demo-floaty.md              demo-global-functions.md
demo-http.md                demo-img.md                 demo-log.md
demo-media.md               demo-module-development.md  demo-ocr.md
demo-permit.md              demo-project-examples.md    demo-qr.md
demo-res.md                 demo-screen.md              demo-script-language.md
demo-sqlite.md              demo-str.md                 demo-sys.md
demo-task.md                demo-thread.md              demo-tip.md
demo-touch.md               demo-tts.md                 demo-ui.md
demo-ws.md
```

## 📚 详细文档(`docs/`,共 261 个)

> 一次只读一到两个,全量加载会超上下文。

| 前缀 | 内容 |
|---|---|
| `docs/guide-*.md` | 入门引导(环境、调试、第一个程序) |
| `docs/api_cn-*.md` | 中文 API 文档(71 个) |
| `docs/api_en-*.md` | 英文 API 文档(71 个) |
| `docs/ui_cn-*.md` | 中文 UI 组件文档(56 个) |
| `docs/ui_en-*.md` | 英文 UI 组件文档(56 个) |
| `docs/index.md` | 产品首页 |
| `docs/other-*.md` | 其他 |
| `docs/res-*.md` | 资源下载页 |

具体文件名查 [`DOCS-INDEX.md`](./DOCS-INDEX.md)。

## 🗂️ 推荐阅读路径

### 新手(AI 第一次接手这个 skill)

1. `SKILL.md` → 明确触发条件与规则
2. `CODING-RULES.md` → 硬约束
3. `MODULES.md` → 理解模块划分
4. `SCENARIOS.md` → 学会从需求反查模块

### 接到具体需求时

1. `SCENARIOS.md` 找目标模块
2. `demo-<模块>.md` 抄最近示例
3. 参数/返回值不确定 → `docs/api_cn-<模块>.md`
4. 写完前 → `PITFALLS.md` 自检

### 用户的能力在文档里找不到

1. 先搜 `api-whitelist-zh.md` 和 `demo-whitelist-en.md`
2. 再搜 `docs/` 下同名文件
3. 两处都没有 → 显式告知"当前 skill 未收录该能力"
