Settings Sync 插件 作用：多台设备之间，同步 VS Code 配置。通过登录 GitHub 账号来使用这个同步工具
tooken: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
Gist ID:b89be7758fb7b5d2a3363a1309d4787c
Alt + Shift + U 完成配置上传，使用组合键 Alt + Shift + D即可下载配置


使用自己的配置：
1.当我们换另外一台电脑时，可以先在 VSCode 中安装 settings-sync 插件;
2.安装完插件后，在插件里使用 GitHub 账号登录;
3.登录之后，插件的界面上，会自动出现之前的同步记录。
4.setting.json git的配置会出现问题，要根据实际电脑git的安装路径来修改配置文件。


使用其他人的配置：
如果我们想使用别人的配置，首先需要对方提供给你 gist。具体步骤如下：
（1）安装插件 settings-sync。
（2）使用快捷键 ctrl + Shift + P，在弹出的命令框中输入 sync，选择「下载配置」
（3）在弹出的界面中，选择「Download Public Gist」，然后输入别人分享给你的 gist。注意，这一步不需要登录 GitHub 账号


在当前文件打开集成终端的方法：
1.安装Code Runner插件;
2.配置 Code Runner settings.json 添加以下两行配置:
  "code-runner.runInTerminal": true,//// 使用 code runner 作为终端
  "code-runner.fileDirectoryAsCwd": true,// // 每次默认打开终端的 path 在当前打开的文件目录下
3.配置快捷键 ctrl+k ctrl+s 搜索openinterminal  设置快捷键 ctrl+~ 新建终端；


ctrl+k ctrl+s 快捷键查询
ctrl+shift+p 显示命令面板
strl+',' 设置
ctrl+shift+c 显示电脑终端
code . 新建窗口打开一个项目，code 会新建一个窗口;
alt+shift+f 格式化代码
Ctrl+Shift+F 的組合鍵來切換繁/簡輸入。

shift+ctrl+e切换文件列表和右侧焦点  
ctrl+K R 显示文件资源管理器（英文状态下使用）
ctrl+p 项目内查找文件
ctrl+shift+f 项目内  ctrl+F/H 本文件内   查找/替换关键词 
ctrl+~ 显示隐藏终端

ctrl + Home/End  文件首末     ctrl+shift+\ 代码块光标，在代码块之间跳转  
fn+左右方向键 移动到行末/行首                              ctrl+L 选中一行| 单机鼠标行号也可以选中一行
ctrl+左右方向键  移动到单词末/单词首,连续按以单词移动光标    +shift 选中单词

alt+shift+down 复制一行    ctrl+shift+k 删除当前行       ctrl+G 定位到某行 ctrl+enter 下方新增一行
alt+光标 添加多处光标       alt+shfit+光标 列选择  
命令面板中输入tran根据提示转换大小写