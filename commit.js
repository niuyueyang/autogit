const git = require('simple-git')
const path = 'F:/autogit'
const commitMessage = '提交'
const repo = 'git@github.com:niuyueyang/autogit.git'

git(path)
    .init()
    .add('./*')
    .commit(commitMessage)
    .addRemote('origin', repo)
    .push(['-f', 'origin', 'master'], () => {
        console.log("Push to master success");
    })
