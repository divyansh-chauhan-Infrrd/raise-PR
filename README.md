raise-pr
=================

A CLI Command to raise Pull Requests


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/raise-pr.svg)](https://npmjs.org/package/raise-pr)
[![Downloads/week](https://img.shields.io/npm/dw/raise-pr.svg)](https://npmjs.org/package/raise-pr)


<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g raise-pr
$ raise COMMAND
running command...
$ raise (--version)
raise-pr/0.0.0 win32-x64 node-v20.11.1
$ raise --help [COMMAND]
USAGE
  $ raise COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`raise hello PERSON`](#raise-hello-person)
* [`raise hello world`](#raise-hello-world)
* [`raise help [COMMAND]`](#raise-help-command)
* [`raise plugins`](#raise-plugins)
* [`raise plugins add PLUGIN`](#raise-plugins-add-plugin)
* [`raise plugins:inspect PLUGIN...`](#raise-pluginsinspect-plugin)
* [`raise plugins install PLUGIN`](#raise-plugins-install-plugin)
* [`raise plugins link PATH`](#raise-plugins-link-path)
* [`raise plugins remove [PLUGIN]`](#raise-plugins-remove-plugin)
* [`raise plugins reset`](#raise-plugins-reset)
* [`raise plugins uninstall [PLUGIN]`](#raise-plugins-uninstall-plugin)
* [`raise plugins unlink [PLUGIN]`](#raise-plugins-unlink-plugin)
* [`raise plugins update`](#raise-plugins-update)

## `raise hello PERSON`

Say hello

```
USAGE
  $ raise hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ raise hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello/index.ts](https://github.com/divyanshchauhan001/raise-pr/blob/v0.0.0/src/commands/hello/index.ts)_

## `raise hello world`

Say hello world

```
USAGE
  $ raise hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ raise hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/divyanshchauhan001/raise-pr/blob/v0.0.0/src/commands/hello/world.ts)_

## `raise help [COMMAND]`

Display help for raise.

```
USAGE
  $ raise help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for raise.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.18/src/commands/help.ts)_

## `raise plugins`

List installed plugins.

```
USAGE
  $ raise plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ raise plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.17/src/commands/plugins/index.ts)_

## `raise plugins add PLUGIN`

Installs a plugin into raise.

```
USAGE
  $ raise plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into raise.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the RAISE_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the RAISE_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ raise plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ raise plugins add myplugin

  Install a plugin from a github url.

    $ raise plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ raise plugins add someuser/someplugin
```

## `raise plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ raise plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ raise plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.17/src/commands/plugins/inspect.ts)_

## `raise plugins install PLUGIN`

Installs a plugin into raise.

```
USAGE
  $ raise plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into raise.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the RAISE_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the RAISE_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ raise plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ raise plugins install myplugin

  Install a plugin from a github url.

    $ raise plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ raise plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.17/src/commands/plugins/install.ts)_

## `raise plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ raise plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ raise plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.17/src/commands/plugins/link.ts)_

## `raise plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ raise plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ raise plugins unlink
  $ raise plugins remove

EXAMPLES
  $ raise plugins remove myplugin
```

## `raise plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ raise plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.17/src/commands/plugins/reset.ts)_

## `raise plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ raise plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ raise plugins unlink
  $ raise plugins remove

EXAMPLES
  $ raise plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.17/src/commands/plugins/uninstall.ts)_

## `raise plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ raise plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ raise plugins unlink
  $ raise plugins remove

EXAMPLES
  $ raise plugins unlink myplugin
```

## `raise plugins update`

Update installed plugins.

```
USAGE
  $ raise plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.17/src/commands/plugins/update.ts)_
<!-- commandsstop -->
