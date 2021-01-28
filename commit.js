const git = require('simple-git')
const path = 'F:/autogit'
const commitMessage = '提交'
const repo = 'https://niuyueyang:asdf123456A*@github.com/niuyueyang/autogit.git'

git(path)
    .init()
    .add('./*')
    .commit(commitMessage)
    .addRemote('origin', repo)
    .push(['-f', 'origin', 'master'], () => {
        console.log("Push to master success");
    })
