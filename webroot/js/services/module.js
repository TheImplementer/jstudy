/* global define */
define(function (require, exports, module) {
	
	var angular = require('angular');

	var decksService = require('./decksService');

	var servicesModule = angular.module('app.services', []);

	servicesModule.service('decksService', decksService);

	module.exports = servicesModule;
});