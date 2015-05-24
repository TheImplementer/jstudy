/* global define */
define(function (require, exports, module) {

    var angular = require('angular');
    var mainController = require('./mainController');

    var controllersModule = angular.module('app.controllers', []);
    controllersModule.controller('mainController', mainController);

    module.exports = controllersModule;
});