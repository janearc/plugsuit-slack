// A simple port of plugsuit to slack from shell
//
'use strict;'

var hooks = JSON.parse( require('fs').readFileSync('hooks.json') );

var slacklib = require( 'node-slackr' )
	, plugsuit = require( 'plugsuit' )
	, slack    = new slacklib( '18F', hooks.outgoing )

