---
icon: apple
---

# macOS使用教程

### (一)，**安装 Node.js 环境**

Claude Code 需要 Node.js 环境才能运行。

#### **macOS 安装方法**

**方法一：使用 Homebrew（推荐）**

如果你已经安装了 Homebrew，使用它安装 Node.js 会更方便：

```
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

```
• 如果遇到权限问题，可能需要使用 sudo
• 首次运行可能需要在系统偏好设置中允许
• 建议使用 Terminal 或 iTerm2
```

**验证安装是否成功**

安装完成后，打开 Terminal，输入以下命令：

```vim
node --version
npm --version
```

如果显示版本号，说明安装成功了！

***

### (二)，**安装 Claude Code**

#### **安装 Claude Code**

打开 Terminal，运行以下命令：

```vim
# 全局安装 Claude Code
npm install -g @anthropic-ai/claude-code
```

如果遇到权限问题，可以使用 sudo：

```vim
sudo npm install -g @anthropic-ai/claude-code
```

**验证 Claude Code 安装**

安装完成后，输入以下命令检查是否安装成功：

```vim
claude --version
```

如果显示版本号，恭喜你！Claude Code 已经成功安装了。

***

### (三)，**设置环境变量**

#### **配置 Claude Code 环境变量**

为了让 Claude Code 连接到你的中转服务，需要设置两个环境变量：

**方法一：临时设置（当前会话）**

在 Terminal 中运行以下命令：

```vim
export ANTHROPIC_BASE_URL="https://www.88code.org/api"
export ANTHROPIC_AUTH_TOKEN="你的API密钥"
```

<sup><mark style="color:orange;">记得将 "你的API密钥" 替换为在上方 "API Keys" 标签页中创建的实际密钥。<mark style="color:orange;"></sup>

**方法二：永久设置**

编辑你的 shell 配置文件（根据你使用的 shell）：

```vim
# 对于 zsh (默认)
echo 'export ANTHROPIC_BASE_URL="https://www.88code.org/api"' >> ~/.zshrc
echo 'export ANTHROPIC_AUTH_TOKEN="你的API密钥"' >> ~/.zshrc
source ~/.zshrc
```

```vim
# 对于 bash
echo 'export ANTHROPIC_BASE_URL="https://www.88code.org/api"' >> ~/.bash_profile
echo 'export ANTHROPIC_AUTH_TOKEN="你的API密钥"' >> ~/.bash_profile
source ~/.bash_profile
```

***

#### **配置 Gemini CLI 环境变量**

如果你使用 Gemini CLI，需要设置以下环境变量：

**Terminal 设置方法**

在 Terminal 中运行以下命令：

```vim
export CODE_ASSIST_ENDPOINT="https://www.88code.org/gemini"
export GOOGLE_CLOUD_ACCESS_TOKEN="你的API密钥"
export GOOGLE_GENAI_USE_GCA="true"
```

<sup><mark style="color:orange;">使用与 Claude Code 相同的 API 密钥即可。<mark style="color:orange;"></sup>

**永久设置方法**

添加到你的 shell 配置文件：

```vim
# 对于 zsh (默认)
echo 'export CODE_ASSIST_ENDPOINT="https://www.88code.org/gemini"' >> ~/.zshrc
echo 'export GOOGLE_CLOUD_ACCESS_TOKEN="你的API密钥"' >> ~/.zshrc
echo 'export GOOGLE_GENAI_USE_GCA="true"' >> ~/.zshrc
source ~/.zshrc
```

```vim
# 对于 bash
echo 'export CODE_ASSIST_ENDPOINT="https://www.88code.org/gemini"' >> ~/.bash_profile
echo 'export GOOGLE_CLOUD_ACCESS_TOKEN="你的API密钥"' >> ~/.bash_profile
echo 'export GOOGLE_GENAI_USE_GCA="true"' >> ~/.bash_profile
source ~/.bash_profile
```

**验证 Gemini CLI 环境变量**

在 Terminal 中验证：

```vim
echo $CODE_ASSIST_ENDPOINT
echo $GOOGLE_CLOUD_ACCESS_TOKEN
echo $GOOGLE_GENAI_USE_GCA
```

***

#### **配置 Codex 环境变量**

如果你使用支持 OpenAI API 的工具（如 Codex），需要设置以下环境变量：

**Terminal 设置方法**

在 Terminal 中运行以下命令：

```vim
export OPENAI_BASE_URL="https://www.88code.org/openai/v1"
export OPENAI_API_KEY="你的API密钥"
```

<sup><mark style="color:orange;">使用与 Claude Code 相同的 API 密钥即可，格式如 cr\_xxxxxxxxxx。<mark style="color:orange;"></sup>

**永久设置方法**

添加到你的 shell 配置文件：

```vim
# 对于 zsh (默认)
echo 'export OPENAI_BASE_URL="https://www.88code.org/openai/v1"' >> ~/.zshrc
echo 'export OPENAI_API_KEY="你的API密钥"' >> ~/.zshrc
source ~/.zshrc
```

```vim
# 对于 bash
echo 'export OPENAI_BASE_URL="https://www.88code.org/openai/v1"' >> ~/.bash_profile
echo 'export OPENAI_API_KEY="你的API密钥"' >> ~/.bash_profile
source ~/.bash_profile
```

**验证 Codex 环境变量**

在 Terminal 中验证：

```vim
echo $OPENAI_BASE_URL
echo $OPENAI_API_KEY
```

### **(四)，开始使用 Claude Code**

现在你可以开始使用 Claude Code 了！

**启动 Claude Code**

```vim
claude
```

**在特定项目中使用**

```vim
# 进入你的项目目录
cd /path/to/your/project
# 启动 Claude Code
claude
```

### **(五)，macOS 常见问题解决**

**安装时提示权限错误**

```
尝试以下解决方法：

使用 sudo 安装：sudo npm install -g @anthropic-ai/claude-code
或者配置 npm 使用用户目录：npm config set prefix ~/.npm-global
```

**macOS 安全设置阻止运行**

```
如果系统阻止运行 Claude Code：

打开"系统偏好设置" → "安全性与隐私"
点击"仍要打开"或"允许"
或者在 Terminal 中运行：sudo spctl --master-disable
```

**环境变量不生效**

```
检查以下几点：

确认修改了正确的配置文件（.zshrc 或 .bash_profile）
重新启动 Terminal
验证设置：echo $ANTHROPIC_BASE_URL
```

**🎉 恭喜你！**

你已经成功安装并配置了 Claude Code，现在可以开始享受 AI 编程助手带来的便利了。

如果在使用过程中遇到任何问题，可以查看官方文档或社区讨论获取帮助。
