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

# HEAD 指向的版本就是当前版本，之所以可以回退版本这么快，因为实际上只是改变了 HEAD 指针的指向。
  HEAD指向的就是当前分支

# 工作区-暂存区-本地仓库-远程仓库
  git branch newbranchName 创建新分支      
  git branch -d  branchName   删除分支  -D 强制删除
  git branch       查看本地分支
  git branch -r    查看远程分支          
  git branch -v    查看各个分支最后一个提交对象的信息
  git branch -m <oldbranch-name><newbranch-name> 重命名分支

  git checkout branchName  切换分支    
  git chechout -b newbranchName  创建新分支并且切换到新分支
  git merge otherBranch  当前分支与otherBranch合并   
  git merge --abort      取消合并 
  git status   
  git log --pretty=oneline  git log --oneline  简单查看日志
  

  git commit -m "xxx"
  撤销commit 
  // HEAD^ 表示回到上一个版本（在push之前你可能有多次commit），也可以写成DEAD~1
  // 如果你进行了2次的commit 都想撤回  可以使用HEAD~2
  git reset --mixed 默认参数, 不删除工作空间改动代码，撤销commit，撤销git add                 
  git reset --soft  不删除工作空间改动代码，撤销commit，不撤销git add .
                     如果commit注释写错了，只是想改一下注释，只需要：git commit --amend  
  git reset --hard  删除工作空间改动代码，撤销commit，撤销git add . 
                    在完成这个操作之后恢复到上一次commit的状态（即有改动的代码没了)
  git reflog这个命令的强大之处，是记录了所有行为,当我们不小心硬回滚的时侯都可以在这里找到行为之前的commit，然后回滚 
  
  
  git remote -v 查看远程仓库地址
