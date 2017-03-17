# server-status

General server system status, with an update function.

# usage
```
let uid = 'myserveruser'
let gid = 'myservergroup'
dropRootPrivileges({uid, gid})
```

Optionally, you can add a [pino]()-compatible logger with:
```
import {Logger} from 'pino'
var log: Logger
dropRootPrivileges({uid, gid}, log)
```


# build
```
npm run build
```

# test
This has no tests yet.

