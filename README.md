# server-status

General server system status, with an update function.

# usage
```
var status: ServerStatus = {
    server_name: 'some-server',
    version: '0.1.2',
    git_commit_id: 'abcd'
    latest_restart: new Date()
}
udpateServerStatus(status)
```

We use [@sabbatical/git-get-commit-id](https://www.npmjs.com/package/@sabbatical/git-get-commit-id) to set the *git_commit_id*.


# build
```
npm run build
```

# test
This has no tests yet.

