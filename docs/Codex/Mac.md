# Codex Mac使用指南

### (一) 安装 Node.js 环境

Claude Code 需要 Node.js 环境才能运行。

#### macOS 安装方法

**方法一：使用 Homebrew（推荐）**

如果你已经安装了 Homebrew，使用它安装 Node.js 会更方便：

```bash
# 更新 Homebrew
brew update
# 安装 Node.js
brew install node
```

**方法二：官网下载**

1. 访问 `https://nodejs.org/`
2. 下载适合 macOS 的 LTS 版本
3. 打开下载的 `.pkg` 文件
4. 按照安装程序指引完成安装

**macOS 注意事项**

- 如果遇到权限问题，可能需要使用 sudo
- 首次运行可能需要在系统偏好设置中允许
- 建议使用 Terminal 或 iTerm2

**验证安装是否成功**

安装完成后，打开 Terminal，输入以下命令：

```bash
node --version
npm --version
```

如果显示版本号，说明安装成功了！

***

### (二) 安装 Claude Code

#### 安装 Claude Code

打开 Terminal，运行以下命令：

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

#### 配置 Codex 环境变量

如果你使用支持 OpenAI API 的工具（如 Codex），需要设置以下环境变量：

**Terminal 设置方法**

在 Terminal 中运行以下命令：

```bash
export OPENAI_BASE_URL="https://www.88code.org/openai/v1"
export OPENAI_API_KEY="你的API密钥"
```

> **注意**：使用与 Claude Code 相同的 API 密钥即可，格式如 cr_xxxxxxxxxx。

**永久设置方法**

添加到你的 shell 配置文件：

对于 zsh (默认)：

```bash
echo 'export OPENAI_BASE_URL="https://www.88code.org/openai/v1"' >> ~/.zshrc
echo 'export OPENAI_API_KEY="你的API密钥"' >> ~/.zshrc
source ~/.zshrc
```

对于 bash：

```bash
echo 'export OPENAI_BASE_URL="https://www.88code.org/openai/v1"' >> ~/.bash_profile
echo 'export OPENAI_API_KEY="你的API密钥"' >> ~/.bash_profile
source ~/.bash_profile
```

**验证 Codex 环境变量**

在 Terminal 中验证：

```bash
echo $OPENAI_BASE_URL
echo $OPENAI_API_KEY
```

***