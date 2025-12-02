# 常见问题

## claude code常见问题
1. 对于codex cli无法选择最新max
可以用
CC Switch 配置
{
  "OPENAI_API_KEY": null
}
然后添加环境变量 export OPENAI_API_KEY="your key"
即可选择
也可使用  npm install -g @88code/codex 来解决