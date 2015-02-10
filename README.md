plugsuit-slack
---
[plugsuit](https://github.com/janearc/plugsuit) is a library for creating and
managing command-line ("CLI", "shell") tools from Node.js. This package aims
to "port" that interface to the [Slack](https://slack.com) interface used by
many modern distributed teams.

The goal is to accomplish this with as much code re-use as possible, and only
mutating specifically-provided, explicitly-mutable characteristics of the
"parent" `plugsuit` library.

Development of an interface (*'plug'*) for this package should be virtually
indistinguishable from a command-line plug.
