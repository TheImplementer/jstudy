/* global define */
define(function(require, exports, module) {

	var n5verbs = require('./n5verbs');
	var n5vocab = require('./n5vocab');

	module.exports = {
		'n5verbs': n5verbs,
		'n5vocab': n5vocab
	};
});