# Claude Code Vscode使用指南

在阅读下列指南前，**请保证你已经按照对应系统配置好了 Claude Code Cli**并可以正常使用

## (一) Vscode安装(版本>=1.75.2)

1. 访问 [Vscode官网](https://code.visualstudio.com/)下载所需版本
2. 在扩展中安装Claude Code for VS Code
3. 在.claude文件夹的config.json文件中添加以下内容(如果没有config.json文件，请自行创建)：

<mark style="background-color: #808080; color: #2d3436;">windows下路径为: C:/Users/你的用户名/.claude</mark>

<mark style="background-color: #808080; color: #2d3436;">Linux 或 macOS 系统中通常位于: ∼/.claude</mark>

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
