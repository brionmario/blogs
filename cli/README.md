bmp-cli
=======

My Personal CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/bmp-cli.svg)](https://npmjs.org/package/bmp-cli)
[![Downloads/week](https://img.shields.io/npm/dw/bmp-cli.svg)](https://npmjs.org/package/bmp-cli)
[![License](https://img.shields.io/npm/l/bmp-cli.svg)](https://github.com/brionmario/bmp-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g bmp-cli
$ bmp COMMAND
running command...
$ bmp (-v|--version|version)
bmp-cli/0.1.0 darwin-x64 node-v12.16.2
$ bmp --help [COMMAND]
USAGE
  $ bmp COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`bmp generateblog [FILE]`](#bmp-generateblog-file)
* [`bmp help [COMMAND]`](#bmp-help-command)

## `bmp generateblog [FILE]`

describe the command here

```
USAGE
  $ bmp generateblog [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/generateblog.ts](https://github.com/brionmario/bmp-cli/blob/v0.1.0/src/commands/generateblog.ts)_

## `bmp help [COMMAND]`

display help for bmp

```
USAGE
  $ bmp help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.3/src/commands/help.ts)_
<!-- commandsstop -->
