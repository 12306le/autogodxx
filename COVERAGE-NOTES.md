# 覆盖说明

这份包的目标是：**文档不缺失，同时不保留重复的大包内容。**

## 保留策略

- **详细文档**：完整保留原始 `docs/*.md`，共 261 个文件。
- **示例代码**：保留按模块重组后的 `demo-*.md`，不再附带原始 `demos/*.txt`。
- **不再保留**：
  - `AIGame全部合并文档.txt`
  - 原始 `demos/*.txt`

## 为什么这样处理

核对结果如下：

1. `AIGame全部合并示例.txt` 可以完整覆盖原始 `demos/*.txt`，而当前包中的 `demo-*.md` 又可以完整覆盖这些示例内容，因此无需再保留原始 `demos/*.txt`，避免重复。
2. `AIGame全部合并文档.txt` **不能**完整覆盖原始 `docs/*.md`。逐个文件比对后，有 18 个文档不能被合并文档完整包含，因此为了保证“文档不能少”，当前包直接保留全部 `docs/*.md` 原文。

## 与合并文档不完全一致的 18 个 docs 文件

- `docs/api_en-app.md`
- `docs/ui_cn-appbar.md`
- `docs/ui_cn-button.md`
- `docs/ui_cn-check.md`
- `docs/ui_cn-drop.md`
- `docs/ui_cn-layout-coord.md`
- `docs/ui_cn-nav.md`
- `docs/ui_cn-other-gravity.md`
- `docs/ui_cn-progress.md`
- `docs/ui_en-appbar.md`
- `docs/ui_en-button.md`
- `docs/ui_en-check.md`
- `docs/ui_en-drop.md`
- `docs/ui_en-input.md`
- `docs/ui_en-layout-coord.md`
- `docs/ui_en-nav.md`
- `docs/ui_en-other-gravity.md`
- `docs/ui_en-progress.md`

## 结论

这份包已经按“**不缺内容、尽量不重复**”整理：
- 详细文档以 `docs/*.md` 为准。
- 示例代码以 `demo-*.md` 为准。
- 若你只把这份包上传到新仓库，不需要再额外上传原始 zip。 
