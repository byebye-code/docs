# 常见问题

## claude code常见问题
1. 后台账号额度限制
```
500 {"error":{"code":400,"type":"server_error","message":"There's currently no account supporting this model"},"type":"error"}
```
解决办法：等待加号。


## codex常见问题
1. 经典的401错误，令牌(你的Api密钥)配置错误
```
stream error: exceeded retry limit, last status: 401 Unauthorized; retrying 1/5 in 189ms.
```
解决办法，对照配置指南详细检查你的codex配置。