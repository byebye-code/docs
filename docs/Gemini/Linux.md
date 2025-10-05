# Gemini Linux使用指南

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

#### 配置 Gemini CLI 环境变量

如果你使用 Gemini CLI，需要设置以下环境变量：

**终端设置方法**

在终端中运行以下命令：

```bash
export CODE_ASSIST_ENDPOINT="https://www.88code.org/gemini"
export GOOGLE_CLOUD_ACCESS_TOKEN="你的API密钥"
export GOOGLE_GENAI_USE_GCA="true"
```

> **注意**：使用与 Claude Code 相同的 API 密钥即可。

**永久设置方法**

添加到你的 shell 配置文件：

对于 bash (默认)：

```bash
echo 'export CODE_ASSIST_ENDPOINT="https://www.88code.org/gemini"' >> ~/.bashrc
echo 'export GOOGLE_CLOUD_ACCESS_TOKEN="你的API密钥"' >> ~/.bashrc
echo 'export GOOGLE_GENAI_USE_GCA="true"' >> ~/.bashrc
source ~/.bashrc
```

对于 zsh：

```bash
echo 'export CODE_ASSIST_ENDPOINT="https://www.88code.org/gemini"' >> ~/.zshrc
echo 'export GOOGLE_CLOUD_ACCESS_TOKEN="你的API密钥"' >> ~/.zshrc
echo 'export GOOGLE_GENAI_USE_GCA="true"' >> ~/.zshrc
source ~/.zshrc
```

**验证 Gemini CLI 环境变量**

在终端中验证：

```bash
echo $CODE_ASSIST_ENDPOINT
echo $GOOGLE_CLOUD_ACCESS_TOKEN
echo $GOOGLE_GENAI_USE_GCA
```

***