<!--
 * @Author: liuyuanyuan
 * @Date: 2022-05-28 22:03:32
 * @Description: 
 * 
-->
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

  git status  

  git log 命令详解
  git log  --author= 'liuyuanyuan2'  
            --oneline (commitId 取前7位)
            --pretty=oneline(完整commitId)
            --after="2014-7-1" --before="2014-7-4"
            --grep='' 筛选commit描述的
            -2 看2条记录
            --name-status	 显示新增、修改、删除的文件清单。
  git show --stat  commitId  显示某次提交的全部详情，包括文件变动。
  git blame README.md        查看文件的修改历史记录，包括时间、作者以及内容。
  git shortlog  按人查看commit描述  
   
  

  git add -A 它会将当前整个工作区中所有的文件改动提交至暂存区，包括新增、修改和被删除的文件，不受当前所在目录限制。
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


# 在push代码的时候远程分支有新的commit未同步到本地，并且本地已经commmit过，就会产生如图git.jpg的情况，
  此时git push会失败, 然后 git pull 将本地分支和远程分支产生合并，继续git push,
  产生log记录(Merge branch 'main' of remoteUrl  into main)
  如果此时发生冲突，git merge --abort 取消合并就可以 
  
  $ git status
    On branch main
    Your branch and 'origin/main' have diverged,
    and have 1 and 1 different commits each, respectively.
    (use "git pull" to merge the remote branch into yours)
    nothing to commit, working tree clean


# git tag
项目的版本管理中,每当一个release版本发布时,需要做一个记录,以便以后需要的时候能查找特定的版本;
Git中的tag指向一次commit的id，通常用来给开发分支做一个标记，如标记一个版本号。

git tag -a 标签名 -m 标签描述           打标签
git tag -a 标签名 commitid -m 标签描述  补打标签 
git tag -d 标签名                 删除标签,本地标签需要另外手动删除(远程仓库删除，本地仓库也要自己手动删除)
git tag                        查看本地仓库的所有分支的标签列表：
git show 标签名                 标签具体详情
git push origin 标签名               推送标签到远程仓库
git push origin :refs/tags/标签名    删除远程仓库的标签

