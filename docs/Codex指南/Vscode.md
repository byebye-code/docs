# Codex Vscode使用指南

## (一) Vscode安装(版本>=1.75.2)

1. 访问 [Vscode官网](https://code.visualstudio.com/)下载所需版本

2. 在扩展中安装Codex – OpenAI’s coding agent

3. 到.codex文件夹下的**auth.json**和**config.toml**文件中添加以下内容(如果没有这两个文件，请自行创建)：

<mark style="color:blue;">windows下路径为: C:/Users/你的用户名/.codex</mark>

<mark style="color:blue;">Linux 或 macOS 系统中通常位于: ∼/.codex</mark>

**auth.json**

```json
{
  "OPENAI_API_KEY": "key"
}
```

**config.toml**

```ini
model_provider = "88code"
model = "gpt-5-codex"
model_reasoning_effort = "high"
disable_response_storage = true


[model_providers.88code]
name = "88code"
base_url = "https://88code.org/openai/v1"
wire_api = "responses"
env_key = "key88"
requires_openai_auth = true   
```

<mark style="color:blue;">注意:  env-Key只能是环境变量中的名称，不能放完整的令牌(密钥)，令牌要放到环境变量中</mark>

<mark style="color:blue;">如果你放了完整的令牌(密钥)使用时会报错找不到令牌或者令牌配置错误(见常见问题)</mark>

<mark style="color:blue;">requires_openai_auth = true,可以让你在插件中切换模型</mark>

4. 在你的环境变量中设置key88="你的API密钥" :

linux/mac：export key88='你的API密钥'

windows：$env:key88 = "你的API密钥"

永久设置方法参考指南中windows，linux，max的设置方法。
