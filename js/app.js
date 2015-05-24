/* global define */
define(function (require) {

    var angular = require('angular');
    require('./controllers/module');

    angular.module('japanese-study', ['app.controllers']);

    angular.bootstrap(document.body, ['japanese-study']);

});
