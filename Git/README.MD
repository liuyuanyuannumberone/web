# Git 
1.配置全局账户 
  git config --global user.name '你的账户名称'  
  git config --global user.email '你的 Email'
2.配置局部账户  
  git config --local user.name '你的账户名称'  
  git config --local user.email '你的 Email'
3.查看全局配置情况 
  git config --global --list  
4.查看某个仓库下的配置情况
  git config --local --list

# 工作区-暂存区-本地仓库-远程仓库
1.git add  git commit  git log  git status   
2.git branch newbranchName 创建新分支      
  git branch -d  branchName   删除分支  -D 强制删除
  git branch       查看本地分支
  git branch -r    查看远程分支          
  git branch -v    查看各个分支最后一个提交对象的信息
  git checkout branchName  切换分支    
  git chechout -b newbranchName  创建新分支并且切换到新分支
  git merge otherBranch  当前分支与otherBranch合并   
  git merge --abort      取消合并 
  git branch --merged   查看哪些分支已经合并到当前分支
  
  7.历史版本回滚  git reset --hard  hash值
9.git pull 拉取远程仓库  git push origin 分支名  推送新分支到远程仓库  
10.git checkout -b 新分支 origin/gitlab旧分支    新建分支并切换，复制远程分支
11.git remote -v 查看远程仓库地址
12.工作区、暂存区、版本库、远程仓库
