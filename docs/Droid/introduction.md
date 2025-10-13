# Droid 简介

Droid 是 [factory.ai](https://factory.ai) 推出的 CLI 应用，可理解为 Cursor 的终端版。

Droid 不仅提供官方服务，还支持用户接入自定义 API。

**为什么要用 Droid**

对比 Claude Code 和 Codex 这两个由模型提供商推出的客户端，Droid**并不一定**具有优势，但是由于不同的上下文和提示词调校，Droid 可能拥有不同的风格，在不同的场合具有更好的效果。

与 Claude Code 相比，由于 Claude Code 的交互体验已相当完善，差异或许不大。

在 Windows 环境下，由于 Codex 对终端工具的调用能力欠佳，Droid 交互体验会更好。

具体表现需要用户自行体验，选择最适合的工具。

# Droid 接入教程

本文介绍如何在本地环境中安装 Factory CLI，并接入自定义的 Droid 模型配置。请按照以下步骤完成准备。

## 一、准备工作

- 访问官网并登录：<https://factory.ai/>
- 如需代理，请提前配置好系统网络，以避免 CLI 下载和登录失败

## 二、安装 Droid CLI

### Windows

在 PowerShell 执行：

```powershell
irm https://app.factory.ai/cli/windows | iex
```

### macOS / Linux

在终端执行：

```bash
curl -fsSL https://app.factory.ai/cli | sh
```

## 三、配置 Droid 自定义模型

1. 运行 `droid`，在 CLI 登录你的 Droid 官方账号。
2. 根据操作系统定位配置目录：
   - Windows：`%USERPROFILE%\.factory\config.json`
   - macOS / Linux：`~/.factory/config.json`
3. 若文件不存在，可创建 `.factory` 目录并新建 `config.json`。
4. 使用任意文本编辑器写入类似如下内容（请根据实际情况替换 API Key 与服务地址）：

```json
{
  "custom_models": [
    {
      "model_display_name": "Sonnet 4.5 [88code]",
      "model": "claude-sonnet-4-5-20250929",
      "base_url": "https://www.88code.org/droid",
      "api_key": "请替换为你的 API Key",
      "provider": "anthropic"
    },
    {
      "model_display_name": "GPT-5-Codex [88code]",
      "model": "gpt-5-codex",
      "base_url": "https://www.88code.org/droid/v1",
      "api_key": "请替换为你的 API Key",
      "provider": "openai"
    },
    {
      "model_display_name": "GPT-5 [88code]",
      "model": "gpt-5",
      "base_url": "https://www.88code.org/droid/v1",
      "api_key": "请替换为你的 API Key",
      "provider": "openai"
    }
  ]
}
```

## 四、切换模型

在 droid 内使用 `/model` 命令切换刚才的自定义模型。
