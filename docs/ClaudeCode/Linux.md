# Claude Code Linux使用指南

### (一) 安装 Node.js 环境

Claude Code 需要 Node.js 环境才能运行。

#### Linux 安装方法

**方法一：使用官方仓库（推荐）**

```bash
# 添加 NodeSource 仓库
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
# 安装 Node.js
sudo apt-get install -y nodejs
```

**方法二：使用系统包管理器**

虽然版本可能不是最新的，但对于基本使用已经足够：

```bash
# Ubuntu/Debian
sudo apt update
sudo apt install nodejs npm
# CentOS/RHEL/Fedora
sudo dnf install nodejs npm
```

**Linux 注意事项**

- 某些发行版可能需要安装额外的依赖
- 如果遇到权限问题，使用 sudo
- 确保你的用户在 npm 的全局目录有写权限

**验证安装是否成功**

安装完成后，打开终端，输入以下命令：

```bash
node --version
npm --version
```

如果显示版本号，说明安装成功了！

***

### (二) 安装 Claude Code

#### 安装 Claude Code

打开终端，运行以下命令：

```bash
# 全局安装 Claude Code
npm install -g @anthropic-ai/claude-code
```

如果遇到权限问题，可以使用 sudo：

```bash
sudo npm install -g @anthropic-ai/claude-code
```

**验证 Claude Code 安装**

安装完成后，输入以下命令检查是否安装成功：

```bash
claude --version
```

如果显示版本号，恭喜你！Claude Code 已经成功安装了。

***

### (三) 设置环境变量

#### 配置 Claude Code 环境变量

为了让 Claude Code 连接到你的中转服务，需要设置两个环境变量：

**方法一：临时设置（当前会话）**

在终端中运行以下命令：

```bash
export ANTHROPIC_BASE_URL="https://www.88code.org/api"
export ANTHROPIC_AUTH_TOKEN="你的API密钥"
```

> **注意**：记得将 "你的API密钥" 替换为在上方 "API Keys" 标签页中创建的实际密钥。

**方法二：永久设置**

编辑你的 shell 配置文件：

对于 bash (默认)：

```bash
echo 'export ANTHROPIC_BASE_URL="https://www.88code.org/api"' >> ~/.bashrc
echo 'export ANTHROPIC_AUTH_TOKEN="你的API密钥"' >> ~/.bashrc
source ~/.bashrc
```

对于 zsh：

```bash
echo 'export ANTHROPIC_BASE_URL="https://www.88code.org/api"' >> ~/.zshrc
echo 'export ANTHROPIC_AUTH_TOKEN="你的API密钥"' >> ~/.zshrc
source ~/.zshrc
```

### (四) 开始使用 Claude Code

**现在你可以开始使用 Claude Code 了！**

启动 Claude Code：

```bash
claude
```

在特定项目中使用：

```bash
# 进入你的项目目录
cd /path/to/your/project
# 启动 Claude Code
claude
```

***

### (五) Linux 常见问题解决

**安装时提示权限错误**

尝试以下解决方法：

```bash
# 使用 sudo 安装
sudo npm install -g @anthropic-ai/claude-code

# 或者配置 npm 使用用户目录
npm config set prefix ~/.npm-global
# 然后添加到 PATH
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
source ~/.bashrc
```

**缺少依赖库**

```bash
# Ubuntu/Debian
sudo apt install build-essential
# CentOS/RHEL
sudo dnf groupinstall "Development Tools"
```

**环境变量不生效**

检查以下几点：

- 确认修改了正确的配置文件（.bashrc 或 .zshrc）
- 重新启动终端或运行 `source ~/.bashrc`
- 验证设置：`echo $ANTHROPIC_BASE_URL`

**🎉 恭喜你！**

你已经成功安装并配置了 Claude Code，现在可以开始享受 AI 编程助手带来的便利了。

如果在使用过程中遇到任何问题，可以查看官方文档或社区讨论获取帮助。