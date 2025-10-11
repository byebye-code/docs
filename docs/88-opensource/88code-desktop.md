# 88code Desktop 操作文档

## 目录

1. [软件介绍](#软件介绍)
2. [安装说明](#安装说明)
3. [Claude Code 配置](#claude-code-配置)
4. [Codex 配置](#codex-配置)
5. [常见问题](#常见问题)

---

## 软件介绍

88code Desktop 是一款专为 AI 编程工具设计的跨平台配置管理工具，支持快速配置 Claude Code 和 Codex。

### 主要特性

- 🚀 **一键配置** - 快速配置 Claude Code 和 Codex
- 💾 **智能备份** - 首次配置自动备份，保护原始设置
- 🎨 **高级模式** - 支持自定义 JSON/TOML 配置
- 🌍 **跨平台** - 支持 Windows、macOS 和 Linux

---

## 安装说明

### 下载安装包

从 [GitHub Releases]https://github.com/byebye-code/88code-desktop/releases/tag/V1.1.0) 下载对应系统的安装包：

- **Windows**: `88code-desktop_x.x.x_x64.msi` 或 `.exe`
- **macOS**: `88code-desktop_x.x.x_x64.dmg`
- **Linux**: `88code-desktop_x.x.x_amd64.deb`

### 安装步骤

#### Windows
1. 双击下载的 `.msi` 或 `.exe` 文件
2. 按照安装向导提示完成安装
3. 首次运行可能需要管理员权限

#### macOS
1. 双击 `.dmg` 文件
2. 将应用拖入"应用程序"文件夹
3. 首次运行需要在"系统偏好设置 > 安全性与隐私"中允许运行

#### Linux
```bash
sudo dpkg -i 88code-desktop_x.x.x_amd64.deb
```

或者使用自行构建：
```bash
pnpm install
pnpm tauri build
```

---

## Claude Code 配置

### 配置文件位置

- **Windows**: `C:\Users\<用户名>\.claude\settings.json`
- **macOS/Linux**: `~/.claude/settings.json`

### 基础配置（推荐）

**操作步骤：**

1. 启动 88code Desktop
2. 点击左侧导航栏的 **"Claude"** 标签
3. 选择 **"Claude Code 配置"** 选项卡
4. 填写配置信息：
   - **Base URL**: 输入 API 服务地址
     - 默认值：`https://www.88code.org/api`
     - 如果不填写，将自动使用默认值
   - **API Key**: 输入您的 API 密钥（必填）
5. 点击 **"自动配置"** 按钮
6. 等待配置完成，看到成功提示

**配置效果：**
- 自动创建/更新 `~/.claude/settings.json` 文件
- 配置 `anthropicBaseURL` 和 `anthropicAuthToken`
- 首次配置会自动创建 `settings.json.bak` 备份文件

**验证配置：**
```bash
# 查看配置文件
cat ~/.claude/settings.json

# 测试 Claude Code
claude --version
claude chat "Hello"
```

### 高级配置

**适用场景：**
- 需要自定义更多配置项
- 需要配置代理、超时等高级选项
- 需要完全控制配置内容

**操作步骤：**

1. 在 Claude Code 配置页面
2. 点击 **"高级配置"** 按钮
3. 在弹出的编辑器中输入完整的 JSON 配置
4. 点击 **"保存配置"**

**配置示例：**
```json
{
  "anthropicBaseURL": "https://www.88code.org/api",
  "anthropicAuthToken": "your-api-key-here",
  "timeout": 30000,
  "maxRetries": 3
}
```


### 清空配置

**操作步骤：**

1. 在 Claude Code 配置页面
2. 点击 **"清空配置"** 按钮
3. 确认删除操作

**效果：** 删除 `~/.claude/settings.json` 文件

### 配置备份与恢复

**自动备份：**
- 首次配置时自动创建 `.bak` 备份文件
- 备份位置：`~/.claude/settings.json.bak`
- 已存在的备份文件不会被覆盖

**手动恢复备份：**
```bash
# 恢复配置文件
cp ~/.claude/settings.json.bak ~/.claude/settings.json
```

## Codex 配置

### 配置文件位置

- **Windows**:
  - `C:\Users\<用户名>\.codex\auth.json`
  - `C:\Users\<用户名>\.codex\config.toml`
- **macOS/Linux**:
  - `~/.codex/auth.json`
  - `~/.codex/config.toml`

### 基础配置（推荐）

**操作步骤：**

1. 启动 88code Desktop
2. 点击左侧导航栏的 **"Codex"** 标签
3. 选择 **"Codex 配置"** 选项卡
4. 填写配置信息：
   - **API Key**: 输入您的 API 密钥（必填）
   - **Base URL**: 输入 API 服务地址
     - 默认值：`https://88code.org/openai/v1`
     - 如果不填写，将自动使用默认值
5. 点击 **"自动配置"** 按钮
6. 等待配置完成，看到成功提示

**配置效果：**
- 自动创建/更新 `~/.codex/auth.json` 和 `config.toml`
- 设置环境变量 `key88=<您的API密钥>`
- 首次配置自动创建备份文件

**重要提示：**
- **Windows 用户**: 配置后需要重启终端或 Codex 才能使环境变量生效
- **Linux/macOS 用户**: 需要重启终端或运行 `source ~/.zshrc`

**验证配置：**
```bash
# 查看配置文件
cat ~/.codex/auth.json
cat ~/.codex/config.toml

# 验证环境变量
# Windows
echo %key88%

# Linux/macOS
echo $key88

# 测试 Codex
codex --version
```

### 高级配置

**适用场景：**
- 需要完全自定义配置内容
- 需要配置更多高级选项

**操作步骤：**

1. 在 Codex 配置页面
2. 点击 **"高级配置"** 按钮
3. 在弹出的编辑器中分别编辑：
   - **auth.json** - 认证配置（JSON 格式）
   - **config.toml** - 主配置文件（TOML 格式）
4. 填写 **API Key**（用于设置环境变量）
5. 点击 **"保存配置"**

**auth.json 示例：**
```json
{
  "api_key": "your-api-key-here",
  "base_url": "https://88code.org/openai/v1",
  "timeout": 30
}
```

**config.toml 示例：**
```toml
[server]
base_url = "https://88code.org/openai/v1"
timeout = 30

[model]
default = "gpt-4"
temperature = 0.7
max_tokens = 2000

[auth]
method = "apikey"
```

### 清空配置

**操作步骤：**

1. 在 Codex 配置页面
2. 点击 **"清空配置"** 按钮
3. 确认删除操作

**效果：** 删除 `~/.codex/auth.json` 和 `config.toml` 文件

**注意：** 环境变量 `key88` 不会被自动删除，需要手动清理

### 环境变量管理

**环境变量说明：**
Codex 配置会自动设置环境变量 `key88=<您的API密钥>`，供 Codex 工具使用。

**环境变量位置：**
- **Windows**: 用户环境变量（通过 `setx` 命令设置）
- **Linux/macOS**: `~/.zshrc` 或 `~/.bashrc` 文件

**手动清理环境变量：**

**Windows:**
1. 右键"此电脑" > "属性"
2. 点击"高级系统设置"
3. 点击"环境变量"
4. 在"用户变量"中找到 `key88` 并删除

**Linux/macOS:**
```bash
# 编辑配置文件
nano ~/.zshrc  # 或 ~/.bashrc

# 删除包含 key88 的行，保存退出

# 重新加载配置
source ~/.zshrc
```

### 配置备份与恢复

**自动备份：**
- 首次配置时自动创建 `.bak` 备份文件
- 备份位置：
  - `~/.codex/auth.json.bak`
  - `~/.codex/config.toml.bak`
- 已存在的备份文件不会被覆盖

**手动恢复备份：**
```bash
# 恢复配置文件
cp ~/.codex/auth.json.bak ~/.codex/auth.json
cp ~/.codex/config.toml.bak ~/.codex/config.toml
```

---

## 常见问题

### Q1: 配置后不生效怎么办？

**Claude Code：**
1. 检查配置文件是否存在：
   ```bash
   ls ~/.claude/settings.json
   ```
2. 查看配置内容是否正确：
   ```bash
   cat ~/.claude/settings.json
   ```
3. 重启终端或 Claude Code

**Codex：**
1. 检查环境变量是否设置：
   ```bash
   # Windows
   echo %key88%

   # Linux/macOS
   echo $key88
   ```
2. 如果环境变量未设置：
   - **Windows**: 重启终端或命令提示符
   - **Linux/macOS**: 运行 `source ~/.zshrc` 或重启终端
3. 检查配置文件：
   ```bash
   cat ~/.codex/auth.json
   cat ~/.codex/config.toml
   ```

### Q2: 提示 "配置文件格式错误" 怎么办？

**原因：** 高级配置中的 JSON/TOML 格式不正确

**解决方案：**
1. 优先使用**基础配置**模式，避免手动编辑出错
2. 如果必须使用高级配置，请确保：
   - **JSON 格式**：所有字符串使用双引号，无尾部逗号
   - **TOML 格式**：遵循 TOML 语法规范
3. 使用在线验证工具检查格式：
   - JSON: https://jsonlint.com/
   - TOML: https://www.toml-lint.com/

**常见 JSON 错误：**
```json
// ❌ 错误：尾部逗号
{
  "key": "value",
}

// ✅ 正确
{
  "key": "value"
}
```

### Q3: Windows 环境变量未生效

**症状：** 配置成功但命令行工具无法识别环境变量

**解决方案：**
1. 完全关闭所有终端窗口（包括 PowerShell、CMD、Git Bash 等）
2. 重新打开新的终端窗口
3. 验证环境变量：
   ```cmd
   echo %ANTHROPIC_BASE_URL%
   echo %key88%
   ```
4. 如果仍未生效，尝试重启电脑

**检查环境变量是否已设置：**
1. 右键"此电脑" > "属性"
2. 点击"高级系统设置" > "环境变量"
3. 在"用户变量"中查找对应的变量名

### Q4: 配置后如何验证是否成功？

**Claude Code 验证：**
```bash
# 1. 查看配置文件
cat ~/.claude/settings.json

# 2. 测试 Claude Code 命令
claude --version

# 3. 测试聊天功能
claude chat "Hello"

# 4. 检查环境变量（如果配置了终端环境变量）
echo $ANTHROPIC_BASE_URL
echo $ANTHROPIC_AUTH_TOKEN
```

**Codex 验证：**
```bash
# 1. 查看配置文件
cat ~/.codex/auth.json
cat ~/.codex/config.toml

# 2. 检查环境变量
echo $key88  # Linux/macOS
echo %key88% # Windows

# 3. 测试 Codex 命令
codex --version
```

### Q5: 如何更新配置？

**方式一：直接重新配置（推荐）**
1. 在应用中重新填写新的配置信息
2. 点击"自动配置"按钮
3. 配置会自动覆盖旧配置，保留其他字段

**方式二：手动编辑配置文件**
```bash
# 编辑 Claude Code 配置
nano ~/.claude/settings.json

# 编辑 Codex 配置
nano ~/.codex/auth.json
nano ~/.codex/config.toml

# 保存后重启相关应用
```

**方式三：清空后重新配置**
1. 点击"清空配置"删除现有配置
2. 重新填写配置信息
3. 点击"自动配置"

### Q6: 配置文件被误删如何恢复？

**使用自动备份恢复：**

```bash
# 恢复 Claude Code 配置
cp ~/.claude/settings.json.bak ~/.claude/settings.json

# 恢复 Codex 配置
cp ~/.codex/auth.json.bak ~/.codex/auth.json
cp ~/.codex/config.toml.bak ~/.codex/config.toml
```

**注意事项：**
- 仅首次配置时创建备份
- 后续修改配置不会更新备份文件
- 如果备份文件也被删除，需要重新配置

### Q7: API Key 填错了怎么办？

**解决方案：**
1. 直接在应用中重新填写正确的 API Key
2. 点击"自动配置"覆盖错误的配置
3. 重启相关工具使新配置生效

**或者手动修改：**
```bash
# 编辑配置文件
nano ~/.claude/settings.json
# 或
nano ~/.codex/auth.json

# 修改 API Key 后保存
```

### Q8: 配置会影响其他设置吗？

**不会！** 本工具采用智能配置续写：
- 仅修改相关配置项（如 `anthropicBaseURL`、`anthropicAuthToken`）
- 保留配置文件中的所有其他字段
- 使用原子写入机制，防止配置损坏

**示例：**
原配置：
```json
{
  "anthropicBaseURL": "old-url",
  "otherSetting": "value",
  "theme": "dark"
}
```

配置后：
```json
{
  "anthropicBaseURL": "new-url",
  "anthropicAuthToken": "new-key",
  "otherSetting": "value",
  "theme": "dark"
}
```

### Q9: 如何完全卸载？

**卸载应用：**
- **Windows**: 控制面板 > 程序和功能 > 卸载 88code Desktop
- **macOS**: 将应用拖入废纸篓
- **Linux**: `sudo dpkg -r 88code-desktop`

**清理配置文件（可选）：**
```bash
# 删除所有配置
rm -rf ~/.claude ~/.codex

# 或仅删除特定配置
rm ~/.claude/settings.json
rm ~/.codex/auth.json
rm ~/.codex/config.toml
```

**清理环境变量：**

**Windows:**
1. 右键"此电脑" > "属性" > "高级系统设置" > "环境变量"
2. 删除用户变量中的：
   - `ANTHROPIC_BASE_URL`
   - `ANTHROPIC_AUTH_TOKEN`
   - `key88`

**Linux/macOS:**
```bash
# 编辑配置文件
nano ~/.zshrc  # 或 ~/.bashrc

# 删除包含以下内容的行：
# export ANTHROPIC_BASE_URL=...
# export ANTHROPIC_AUTH_TOKEN=...
# export key88=...

# 保存后重新加载
source ~/.zshrc
```

### Q10: Base URL 应该填什么？

**Claude Code：**
- 默认值：`https://www.88code.org/api`
- 如果使用官方服务，请填写官方 API 地址
- 如果留空，将自动使用默认值

**Codex：**
- 默认值：`https://88code.org/openai/v1`
- 必须是兼容 OpenAI API 的服务地址
- 如果留空，将自动使用默认值

**格式要求：**
- 必须以 `http://` 或 `https://` 开头
- 不要在末尾添加斜杠 `/`
- 示例：`https://api.example.com/v1` ✅
- 错误：`api.example.com` ❌（缺少协议）
- 错误：`https://api.example.com/v1/` ❌（多余斜杠）

---

## 技术支持

### 获取帮助

**项目地址：**
- GitHub: https://github.com/byebye-code/88code-desktop

**报告问题：**
- 提交 Issue: https://github.com/byebye-code/88code-desktop/issues

**文档：**
- 项目说明: `README.md`

### 配置文件格式参考

#### settings.json (Claude Code)
```json
{
  "anthropicBaseURL": "https://www.88code.org/api",
  "anthropicAuthToken": "your-api-key-here"
}
```

#### auth.json (Codex)
```json
{
  "api_key": "your-api-key-here",
  "base_url": "https://88code.org/openai/v1"
}
```

#### config.toml (Codex)
```toml
[server]
base_url = "https://88code.org/openai/v1"

[auth]
method = "apikey"
```

---

## 许可证

MIT License

© 2025 88code

---

**祝您使用愉快！**

如有任何问题或建议，欢迎通过 GitHub Issues 与我们联系。
