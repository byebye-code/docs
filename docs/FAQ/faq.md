# 常见问题

## claude code常见问题
1. 官方负载过高
```
API Error: 400 {"error":{"type":"invalid_request_error","message":"Overloaded"},"type":"error"}
```
解决办法：重试即可。


## codex常见问题
1. 经典的401错误，令牌(你的Api密钥)配置错误
```
stream error: exceeded retry limit, last status: 401 Unauthorized; retrying 1/5 in 189ms.
```
解决办法，对照配置指南详细检查你的codex配置。