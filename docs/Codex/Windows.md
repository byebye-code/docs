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

### (二) 安装 Codex Cli

#### 安装 Codex Cli

打开 PowerShell 或 CMD，运行以下命令：
###### 全局安装 Codex

```powershell
npm i -g @openai/codex --registry=https://registry.npmmirror.com
```

这个命令会从 npm 官方仓库下载并安装最新版本的 Codex。<font color="red">更新也使用这个命令</font>

#### 验证
```powershell
codex --version
```
**提示**

- 建议使用 PowerShell 而不是 CMD，功能更强大
- 如果遇到权限问题，以管理员身份运行 PowerShell

***

#### 配置 Codex 环境变量


1. <font color="red">方法一</font>
### 使用cc switch 配置(强强强烈推荐!!!) 
查看 [cc switch](../FAQ/CC_SWITCH)


2. <font color="red">方法二</font>
### 使用一劳永逸的方式配置 Codex 环境变量(强烈推荐!!!)
- 打开文件资源管理器，找到 `C:\Users\你的用户名\.codex` 文件夹（如果没有则创建）
如图: ![目录](../img/image2.png)
创建`config.toml`,用Notepad打开，输入以下内容：
```toml
experimental_use_rmcp_client = true
model_provider = "88code"
model = "gpt-5-codex"
model_reasoning_effort = "high"
disable_response_storage = true
sandbox_mode = "workspace-write" 

[model_providers.88code]
name = "88code"
base_url = "https://88code.org/openai/v1"
wire_api = "responses"
env_key = "key88"
requires_openai_auth = true

[sandbox_workspace_write]
network_access = true

# [mcp_servers.context7]
# command = "cmd"
# args = [
#     "/c",
#     "bunx",
#     "-y",
#     "@upstash/context7-mcp",
#     "--api-key",
#     "ctx7sk-xxx",
# ]
# env = { SystemRoot="C:\\Windows" }
# startup_timeout_ms = 20_000


# [mcp_servers.fetch]
# command = "cmd"
# args = [
#     "/c",
#     "uvx",
#     "mcp-server-fetch"
# ]
# env = { SystemRoot="C:\\Windows" }
# startup_timeout_ms = 20_000

# [mcp_servers.sequential-thinking-offical]
# command = "cmd"
# args = [
#     "/c",
#     "npx",
#     "-y",
#     "@modelcontextprotocol/server-sequential-thinking"
# ]
# env = { SystemRoot="C:\\Windows" }
# startup_timeout_ms = 20_000

# [mcp_servers.hyperbrowser]
# command = "cmd"
# args = [
#     "/c",
#     "npx",
#     "-y",
#     "hyperbrowser-mcp"
# ]
# env = { SystemRoot="C:\\Windows",HYPERBROWSER_API_KEY="Yhb_xxx" }
# startup_timeout_ms = 20_000


# [mcp_servers.memory]
# command = "cmd"
# args = [
#     "/c",
#     "npx",
#     "-y",
#     "@modelcontextprotocol/server-memory"
# ]
# env = { SystemRoot="C:\\Windows" }
# startup_timeout_ms = 20_000

# [mcp_servers.ast-grep]
# command = "cmd"
# args = [
#     "/c",
#     "uvx",
#     "--from",
# 	"git+https://github.com/ast-grep/ast-grep-mcp",
# 	"ast-grep-server"
# ]
# env = { SystemRoot="C:\\Windows" }
# startup_timeout_ms = 20_000

# [mcp_servers.everything-search]
# command = "cmd"
# args = [
#     "/c",
#     "uvx",
#     "mcp-server-everything-search",
# ]
# env = { SystemRoot="C:\\Windows",EVERYTHING_SDK_PATH="D:\\xxxx\\Everything-SDK\\dll\\Everything64.dll" }
# startup_timeout_ms = 20_000

# [mcp_servers.tavily-mcp]
# command = "cmd"
# args = [
#     "/c",
#     "npx",
#     "-y",
#     "tavily-mcp@0.2.4",
# ]
# env = { SystemRoot="C:\\Windows",TAVILY_API_KEY="ctx7sk-xxxx" }
# startup_timeout_ms = 20_000


# [mcp_servers.github]
# command = "cmd"
# args = [
#     "/c",
#     "npx",
#     "-y",
#     "@modelcontextprotocol/server-github",
# ]
# env = { SystemRoot="C:\\Windows",GITHUB_PERSONAL_ACCESS_TOKEN="github_pat_xxx" }
# startup_timeout_ms = 20_000

# [mcp_servers.mcpr]
# command = "D:\\FNM_DIR\\aliases\\default\\mcpr-cli.cmd"
# args = [
#     "connect"
# ]
# env = { SystemRoot="C:\\Windows",MCPR_TOKEN="mcpr_xxx" }
# startup_timeout_ms = 200000
```
上的mcp被我注释了,有需要的自己去掉注释加上自己的apikey就可以使用,有使用mcp router的可以使用最后一个被注释的mcp即可
- 创建 `auth.json` 文件，在文件添加以下内容：

```json
{
  "OPENAI_API_KEY": "88_xxx"
}
```
把88_xxx替换为你的88code的key即可
设置环境变量
[System.Environment]::SetEnvironmentVariable("key88", "你的API密钥", [System.EnvironmentVariableTarget]::User)

3. <font color="red">方法三</font>

如果你使用支持 OpenAI API 的工具（如 Codex），需要设置以下环境变量：

**PowerShell 设置方法**

在 PowerShell 中运行以下命令：

```powershell
$env:OPENAI_BASE_URL = "https://88code.org/openai/v1"
$env:OPENAI_API_KEY = "你的API密钥"
```

<mark style="background-color: #808080; color: #2d3436;">使用与 Claude Code 相同的 API 密钥即可，格式如 cr_xxxxxxxxxx。</mark>

**PowerShell 永久设置（用户级）**

在 PowerShell 中运行以下命令：

```powershell
# 设置用户级环境变量（永久生效）
[System.Environment]::SetEnvironmentVariable("OPENAI_BASE_URL", "https://88code.org/openai/v1", [System.EnvironmentVariableTarget]::User)
[System.Environment]::SetEnvironmentVariable("OPENAI_API_KEY", "你的API密钥", [System.EnvironmentVariableTarget]::User)
```

<mark style="background-color: #808080; color: #2d3436;">设置后需要重新打开 PowerShell 窗口才能生效。</mark>

**验证 Codex 环境变量**

在 PowerShell 中验证：

```powershell
echo $env:OPENAI_BASE_URL
echo $env:OPENAI_API_KEY
```

***