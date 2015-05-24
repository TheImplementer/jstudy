/* global define */
define(function (require) {

    var angular = require('angular');
    require('angular-route');
    require('./controllers/module');
    require('./services/module')

    var applicationModule = angular.module('japanese-study', ['app.controllers', 'app.services', 'ngRoute']);

    applicationModule.config(function($routeProvider) {

    	$routeProvider
    		.when('/', {
    			templateUrl: 'partials/reviews.html',
    			controller: 'reviewsController',
    			controllerAs: 'ctrl'
    		})
    		.when('/decks', {
    			templateUrl: 'partials/decks.html',
    			controller: 'decksController',
    			controllerAs: 'ctrl'
    		})
    		.otherwise({
    			redirectTo: '/'
    		});
    });

    angular.bootstrap(document.body, ['japanese-study']);

});
