# Claude Code Vscode使用指南

## (一) Vscode安装(版本>=1.75.2)

1. 访问 [Vscode官网](https://code.visualstudio.com/)下载所需版本
2. 安装插件 [Codex](https://marketplace.visualstudio.com/items?itemName=openai.chatgpt)
3. 在 `~/.claude/config.json` 文件中添加以下内容（如果没有config.json文件，请自行创建）：

```json
{
    "primaryApiKey": "key"
}
```

其中 `key` 可以为任意内容，只要写了这个字段即可。

> [!NOTE]
> 注意是 `config.json`
> 
> 你的目录下很可能还有另一个文件 `settings.json` 并不是我们要改的文件，请仔细辨别。
