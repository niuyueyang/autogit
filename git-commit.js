const git = require('simple-git')
const path = 'F:/autogit'
const commitMessage = '提交时的说明'
const repo = 'https://niuyueyang:asdf123456A*@github.com/niuyueyang/autogit.git'

git()
    .add('./')
    .commit(commitMessage)
    .push(['-f', 'origin', 'master'], () => {
        console.log("Push to master success");
    })


// const GIT_REPOSITORY_ROOT = 'F:/autogit'
// //这个路径是你从git上拉下来的代码存放的路径，自己定义就好
// simpleGit = git(GIT_REPOSITORY_ROOT );
// //以下的所有命令都是基于这个repository的路径进行操作了
// simpleGit.status();
// //等价于 git status
// simpleGit.pull('origin', 'master');
// // 等价于 git pull origin marster (第一个参数是你的remote端名称， 第二个参数是你的分支名称)
// simpleGit.checkout('master');
// // 等价于 git checkout master (master 指的是你的分支名称)
// simpleGit.add('./*');
// // 等价于  git add ./*
// simpleGit.commit('first commit!');
// // 等价于 git commit -m 'first commit!'
// simpleGit.push('origin', 'master');
// 等价于 git push origin master (origin指的是你的remote端名称， master指的是你的分支名称)
// simpleGit.mergeFromTo('from', 'to');
// // 将from分支上的代码合并到to分支上去
