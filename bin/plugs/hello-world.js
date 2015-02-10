// hello-world.js
//   sample slack hello world plug for plugsuit-slack
//

var meta = function () {
	return {
		'args' : {
			'hello' : [ Boolean, 'Greeting.' ],
		},

		'name' : 'hell-world',
		'abstract' : 'cheerfully greets the user.'
	}
};

var plug = function (args) {

}

module.exports = plug;
plug.meta      = meta;
