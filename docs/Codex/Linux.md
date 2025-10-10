# Codex Linux使用指南

### (一) 安装 Node.js 环境

Codex 需要 Node.js 环境才能运行。

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

### (二) 安装 Codex

#### 安装 Codex

打开终端，运行以下命令：

```bash
# 全局安装 Codex
npm install -g @openai/codex
```

如果遇到权限问题，可以使用 sudo：

```bash
sudo npm install -g @openai/codex
```

**验证 Codex 安装**

安装完成后，输入以下命令检查是否安装成功：

```bash
codex --version
```

如果显示版本号，恭喜你！Codex 已经成功安装了。

***

#### 配置 Codex 环境变量

如果你使用支持 OpenAI API 的工具（如 Codex），需要设置以下环境变量：

**终端设置方法**

在终端中运行以下命令：

```bash
export OPENAI_BASE_URL="https://www.88code.org/openai/v1"
export OPENAI_API_KEY="你的API密钥"
```

> **注意**：使用你的 88code API 密钥，格式如 88_xxxxxxxxxx，使用与 Claude Code 相同的 API 密钥即可。

**永久设置方法**

添加到你的 shell 配置文件：

对于 bash (默认)：

```bash
echo 'export OPENAI_BASE_URL="https://www.88code.org/openai/v1"' >> ~/.bashrc
echo 'export OPENAI_API_KEY="你的API密钥"' >> ~/.bashrc
source ~/.bashrc
```

对于 zsh：

```bash
echo 'export OPENAI_BASE_URL="https://www.88code.org/openai/v1"' >> ~/.zshrc
echo 'export OPENAI_API_KEY="你的API密钥"' >> ~/.zshrc
source ~/.zshrc
```

**验证 Codex 环境变量**

在终端中验证：

```bash
echo $OPENAI_BASE_URL
echo $OPENAI_API_KEY
```

***

### (三) 开始使用 Codex

#### 启动 Codex

配置完成后，在终端中输入以下命令启动 Codex：

```bash
codex
```

首次启动时，Codex 会进行初始化配置。

#### 基本使用

- **交互模式**：直接输入 `codex` 进入交互式对话
- **指定项目**：在项目目录下运行 `codex`，Codex 会自动识别项目上下文
- **退出程序**：输入 `exit` 或按 `Ctrl+C` 退出

***

### (四) 常见问题解决

#### 1. 命令未找到错误

**问题**：运行 `codex` 时提示 "command not found"

**解决方法**：
```bash
# 检查 npm 全局安装路径
npm config get prefix

# 确保该路径在 PATH 中
echo $PATH

# 如果不在，添加到配置文件
# 对于 bash
echo 'export PATH="/usr/local/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc

# 对于 zsh
echo 'export PATH="/usr/local/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
```

#### 2. 权限问题

**问题**：安装时提示权限不足

**解决方法**：
```bash
# 方法一：使用 sudo 安装
sudo npm install -g @openai/codex

# 方法二：配置 npm 使用用户目录（推荐）
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
source ~/.bashrc

# 然后重新安装
npm install -g @openai/codex
```

#### 3. API 连接失败

**问题**：Codex 无法连接到 API 服务

**解决方法**：
```bash
# 检查环境变量是否正确设置
echo $OPENAI_BASE_URL
echo $OPENAI_API_KEY

# 测试网络连接
curl -I https://88code.org

# 重新设置环境变量
export OPENAI_BASE_URL="https://www.88code.org/openai/v1"
export OPENAI_API_KEY="你的API密钥"
```

#### 4. 更新 Codex

**问题**：如何更新到最新版本

**解决方法**：
```bash
# 更新 Codex
npm update -g @openai/codex

# 或者重新安装
npm install -g @openai/codex
```

#### 5. Node.js 版本过低

**问题**：提示 Node.js 版本不兼容

**解决方法**：
```bash
# Ubuntu/Debian 更新 Node.js
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs

# CentOS/RHEL/Fedora 更新 Node.js
sudo dnf module install nodejs:lts

# 验证版本（需要 18 或更高版本）
node --version
```

#### 6. 依赖缺失问题

**问题**：运行时提示缺少依赖

**解决方法**：
```bash
# Ubuntu/Debian
sudo apt-get install build-essential

# CentOS/RHEL/Fedora
sudo dnf groupinstall "Development Tools"

# 然后重新安装 Codex
npm install -g @openai/codex
```

***