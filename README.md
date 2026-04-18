# AIGame Skill for Claude Code

> 让 Claude / Claude Code 在编写 **AIGame / AutoGOD / AutoGODX** Android 自动化脚本时,严格遵守官方文档与示例,不臆造 API。

这是一个 [Claude Code Skill](https://docs.claude.com/claude-code/skills) 包,覆盖 AIGame 脚本平台的全部公开 API 与示例,帮助 AI 在 Rhino JavaScript 环境下产出可直接运行的自动化代码。

---

## ✨ 为什么需要这个 skill

AIGame 的文档规模很大(约 260+ 文档、260+ 示例),而且:

- 同一个能力有 **中文 API 标题** 和 **英文实际函数名** 两种命名,容易混用
- 运行环境是 **Rhino JS**,不是 Node.js 也不是浏览器,AI 默认习惯会跑偏
- 很多能力需要 **权限前置**,漏掉就沉默失败
- 直接把 261 个 docs 丢给模型 → 上下文爆炸

本 skill 做了这些优化:

1. **精简入口 `SKILL.md`** — 触发清楚、规则紧凑
2. **场景 → API 索引** — 从用户自然语言需求反查模块
3. **10 个现成模板** — 覆盖 80% 日常用例
4. **陷阱清单** — 15 种 AI 容易踩的错误
5. **模块分类 + 白名单** — 分层索引,按需加载
6. **完整保留 `docs/` 与按模块整理的 `demo-*.md`** — 不丢信息

---

## 📦 目录结构

```
aigame-skill/
├── SKILL.md                   # 技能入口(给 Claude 读的第一份)
├── CODING-RULES.md            # 硬编码约束
├── SCENARIOS.md               # 场景 → 模块映射
├── QUICK-START.md             # 10 个最常用模板
├── PITFALLS.md                # 常见陷阱
├── MODULES.md                 # 模块分类
├── INDEX.md                   # 文件总索引
├── api-whitelist-zh.md        # 中文 API 白名单
├── demo-whitelist-en.md       # 英文方法名白名单
├── DOCS-INDEX.md              # docs 目录索引
├── COVERAGE-NOTES.md          # 覆盖差异说明
├── demo-*.md                  # 43 个按模块整理的示例
├── docs/                      # 261 个原始详细文档
├── manifest.json              # 清单
├── README.md                  # 本文件
└── LICENSE                    # MIT
```

---

## 🚀 使用方式

### 1. 作为 Claude Code 项目级 skill

把本目录复制到项目的 `.claude/skills/aigame-skill/`,Claude Code 启动时会自动识别。

```bash
mkdir -p /path/to/your/project/.claude/skills
cp -r aigame-skill /path/to/your/project/.claude/skills/
```

### 2. 作为用户级 skill(跨项目可用)

```bash
mkdir -p ~/.claude/skills
cp -r aigame-skill ~/.claude/skills/
```

### 3. 在 Claude 对话里使用

安装后,当你向 Claude 发出这类请求时,它会自动加载本 skill:

- "写个 AIGame 脚本,自动点击微信的朋友圈按钮"
- "用 AutoGOD 识别屏幕上的二维码"
- "AIGame 里怎么开悬浮窗?"
- "帮我看看这段 `$act.click(...)` 代码为什么不生效"

---

## 🧭 AI 查询流程(摘自 SKILL.md)

```
用户意图
   ↓
SCENARIOS.md 定位模块($act / $img / $ocr / ...)
   ↓
demo-<模块>.md 抄最近的官方示例
   ↓
docs/api_cn-<模块>.md 核对参数
   ↓
写完前用 PITFALLS.md 自检
```

---

## 🛡️ 核心硬约束

- **只能用 skill 里显式出现的 API**,禁止臆造
- **英文名以 demo 示例为准**,不要把中文方法名翻译成英文
- **Rhino JS 环境**,不支持 `async/await`、ESM、Node.js 内置、npm 包
- **涉及无障碍/截图/悬浮窗** 必须先 `hasPermit()` / `getPermit()`
- **UI 切换** 前后加 `sleep` 或 `waitFirst`
- **节点操作** 前判空

详见 [`CODING-RULES.md`](./CODING-RULES.md)。

---

## 📜 文档数据来源

- 原始 zip:`AI智能体文档-260130.zip`(AIGame 官方)
- docs/: 261 个中英文 API / UI 文档,原封保留
- demo-\*.md: 261 个原始示例,按模块合并后为 43 个文件

详细差异见 [`COVERAGE-NOTES.md`](./COVERAGE-NOTES.md)。

---

## 🔁 与上游参考的差异

本 skill 基于 [`12306le/autogodx`](https://github.com/12306le/autogodx) 整理的数据结构,并作出如下**优化**:

| 项 | autogodx 上游 | 本 skill |
|---|---|---|
| `SKILL.md` | 基础规则 + 推荐路径 | 精简为 **分层入口 + 严格查询流程** |
| 场景 → API 索引 | 无 | **新增 `SCENARIOS.md`** |
| 快速模板 | 无 | **新增 `QUICK-START.md`(10 个可跑模板)** |
| 陷阱清单 | 无 | **新增 `PITFALLS.md`(15 条反模式)** |
| 模块分类 | 隐含在 INDEX | **新增 `MODULES.md`(按功能分组)** |
| README | 对 AIGame 内部人员 | **重写为面向 GitHub 贡献者** |
| 上传脚本 | 有 `upload.sh` | 移除,交由用户决定发布方式 |
| LICENSE | 无 | **加入 MIT** |
| `.gitignore` | 无 | **加入,过滤临时文件** |

---

## 🤝 贡献

欢迎提 Issue / PR:

- 发现 API 在 docs 里但没进白名单 → 更新 `api-whitelist-zh.md`
- 发现新陷阱 → 加到 `PITFALLS.md`
- 新的常用模板 → 加到 `QUICK-START.md`
- 官方新版本 zip → 替换 `docs/` 和 `demo-*.md` 并更新 `COVERAGE-NOTES.md`

---

## 📄 许可证

- 代码/脚本/索引部分:MIT(见 `LICENSE`)
- `docs/` 与 `demo-*.md` 的 **文档内容版权归 AIGame 官方所有**,本仓库仅作技术检索与 AI 辅助开发用途;如官方有异议请联系移除。

---

## 🔗 相关

- AIGame 官方:见 `docs/index.md`
- 上游参考:<https://github.com/12306le/autogodx>
- Claude Code Skills 文档:<https://docs.claude.com/claude-code/skills>
