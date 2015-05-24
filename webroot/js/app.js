/* global define */
define(function (require) {

    var angular = require('angular');
    require('./controllers/module');
    require('./services/module')

    angular.module('japanese-study', ['app.controllers', 'app.services']);

    angular.bootstrap(document.body, ['japanese-study']);

});
