// Run the plugsuit
//
var plugsuit = require( 'plugsuit-slack' );

plugsuit.init( 'bin/plugs', {
	'channel'    : '#sendak',
	'username'   : 'max',
	'icon_emoji' : ':space_invader:'
} );
