# byebyecode 入门体验指南

## 前言：为什么我会尝试 byebyecode
第一次听说 byebyecode 的时候，我已经安装了 CCometixLine 的主程序，但一直想要更方便的翻译和用量监控工具。官方 README 看起来功能很强，可我还是想知道真实用起来是什么感觉，于是我亲自走了一遍安装、配置和日常使用流程。下面就是我按时间线整理的体验笔记，希望你也能顺着这条路快速上手。

## 第一步：安装与构建
我直接在仓库根目录执行了标准的编译流程：
```bash
git clone https://github.com/byebyecode/byebyecode.git
cd byebyecode
cargo build --release
```
编译成功后，`target/release/` 下就能看到对应平台的可执行文件。在 Windows 上是 `byebyecode.exe`，我把它复制到了一个在 PATH 里的目录，方便随时调用。

## 第二步：准备 API Key
byebyecode 分别依赖两个服务：
- 翻译用的 **GLM-4.5-Flash API Key**（免费）

我先去 https://docs.bigmodel.cn/ 注册并拿到 GLM Key， Key 之后就可以用 byebyecode 的命令行完成自动配置。

## 第三步：一键配置
我直接在终端执行：
```bash
byebyecode --init
```
这一步帮我做了三件事：
1. 创建/更新 `~/.claude/88code/config.toml`
2. 把 API Key 写入 `~/.claude/88code/api_keys.toml`
3. 把可执行文件拷贝到 `~/.claude/88code/byebyecode`

我查看配置文件确认无误后，就准备进入 wrap 模式体验它的“包裹式” Claude Code 增强功能。

## 第四步：体验包装器模式
执行：
```bash
byebyecode --wrap
```
之后它会启动 Claude Code 并拦截输入输出。我最关心的功能有三个：

### 1. 双向翻译
我直接输入一段中文，比如“帮我写一个 Rust 函数计算斐波那契数列”。终端立刻显示它先把这段话翻译成英文，并将英文发给 Claude Code。Claude 的回复原本是英文，但 byebyecode 会自动把它翻成中文，同时保留英文原文让我参考。第一次体验时我觉得很贴心：翻译准确、速度也够快，关键是省去了手动复制到其他翻译器的步骤。

### 2. 实时用量监控
Wrap 模式启动后，Claude Code 的状态栏里多了两个 segment：
- **BYE**：显示我套餐的剩余 token 和使用百分比
- **SUB**：显示当前套餐等级和状态

我一开始略担心 API 调用会不会慢，但实际观察发现状态栏刷新很及时，不影响日常使用。如果你喜欢 Powerline 风格的分隔符，也可以按照 README 中给的配置片段手动调主题和颜色，整体视觉体验不错。


## 第五步：深入配置（可选）
如果想更细致地调优配置，比如调整 statusline 里的 segment 顺序、图标或关闭翻译功能，我的做法是：
1. `byebyecode --config` 打开交互式 TUI，照着菜单一步步调整。
2. 或者直接编辑 `~/.claude/88code/config.toml`，按 README 的例子加段自定义配置。

我个人偏好先用 TUI 快速设定，再在配置文件里微调颜色和 icon，效率比较高。

## 第六步：排错与小贴士
实际使用中我遇到过一次翻译失败，排查步骤如下：
1. 先确认网络畅通。
2. `cat ~/.claude/88code/api_keys.toml` 看看 Key 是否被正确写入。
3. 如果怀疑配额问题，去 GLM 或 byebyecode 官网查看控制台日志。
4. 如果是状态栏不更新，运行 `byebyecode --check` 验证配置是否合法。

根据文档，程序会自动查找 Claude 的路径，也可以通过 `--patch` 模式给 Claude 的 `cli.js` 打补丁（比如开启 verbose 模式或取消警告）。

## 第七步：日常使用习惯
现在我每次启动 Claude 前都会先开 byebyecode 包装器。个人感受是：
- 翻译准确率足够日常工作使用，而且支持中英双向同时显示，让我不用担心漏看英文原文。
- 用量提醒能帮助我掌控套餐消耗，尤其是大量调试或长对话时非常有用。
- 状态栏的视觉效果和原版 CCometixLine 完全一致，不会破坏整体美感。

如果你也想快速体验，不妨直接跟着上面的步骤走一遍。byebyecode 的安装、配置和使用都相对顺手，最关键的是它把 Claude 的多语言沟通门槛降得很低，同时还能帮你掌握 API 消耗情况。希望这篇亲身经历的教程能帮你更有信心地尝试这款工具。
