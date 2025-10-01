# Codex Windows使用指南

### (一) 安装Node.js环境

#### Windows安装方法

**方法一：官网下载（推荐）**

1. 打开浏览器访问 `https://nodejs.org/`
2. 点击 "LTS" 版本进行下载（版本号要大于18，推荐长期支持版本）
3. 下载完成后双击 `.msi` 文件
4. 按照安装向导完成安装，保持默认设置即可

**方法二：使用包管理器**

如果你安装了 Chocolatey 或 Scoop，可以使用命令行安装：

```powershell
# 使用 Chocolatey
choco install nodejs
# 或使用 Scoop
scoop install nodejs
```

**Windows 注意事项**

- 建议使用 PowerShell 而不是 CMD
- 如果遇到权限问题，尝试以管理员身份运行
- 某些杀毒软件可能会误报，需要添加白名单

**验证安装是否成功**

安装完成后，打开 PowerShell 或 CMD，输入以下命令：

```powershell
node --version
npm --version
```

如果显示版本号，说明安装成功了！

***

### (二) 安装 Claude Code

#### 安装 Claude Code

打开 PowerShell 或 CMD，运行以下命令：

```powershell
# 全局安装 Claude Code
npm install -g @anthropic-ai/claude-code
```

这个命令会从 npm 官方仓库下载并安装最新版本的 Claude Code。

**提示**

- 建议使用 PowerShell 而不是 CMD，功能更强大
- 如果遇到权限问题，以管理员身份运行 PowerShell

***

#### 配置 Codex 环境变量

如果你使用支持 OpenAI API 的工具（如 Codex），需要设置以下环境变量：

**PowerShell 设置方法**

在 PowerShell 中运行以下命令：

```powershell
$env:OPENAI_BASE_URL = "https://www.88code.org/openai/v1"
$env:OPENAI_API_KEY = "你的API密钥"
```

<mark style="color:orange;">使用与 Claude Code 相同的 API 密钥即可，格式如 cr_xxxxxxxxxx。</mark>

**PowerShell 永久设置（用户级）**

在 PowerShell 中运行以下命令：

```powershell
# 设置用户级环境变量（永久生效）
[System.Environment]::SetEnvironmentVariable("OPENAI_BASE_URL", "https://www.88code.org/openai/v1", [System.EnvironmentVariableTarget]::User)
[System.Environment]::SetEnvironmentVariable("OPENAI_API_KEY", "你的API密钥", [System.EnvironmentVariableTarget]::User)
```

<mark style="color:orange;">设置后需要重新打开 PowerShell 窗口才能生效。</mark>

**验证 Codex 环境变量**

在 PowerShell 中验证：

```powershell
echo $env:OPENAI_BASE_URL
echo $env:OPENAI_API_KEY
```

***