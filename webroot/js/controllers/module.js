/* global define */
define(function (require, exports, module) {

    var angular = require('angular');
    var reviewsController = require('./reviewsController');
    var decksController = require('./decksController');

    var controllersModule = angular.module('app.controllers', []);
    controllersModule.controller('reviewsController', reviewsController);
    controllersModule.controller('decksController', decksController);

    module.exports = controllersModule;
});