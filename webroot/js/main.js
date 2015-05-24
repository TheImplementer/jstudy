/* global require,requirejs */
requirejs.config({
	baseUrl: 'js',
    paths: {
        'angular': 'vendor/angular.min',
        'angular-route': 'vendor/angular-route.min'
    },
    shim: {
    	'angular': {
    		exports: 'angular'
    	},
    	'angular-route': {
    		deps: ['angular']
    	}
    }
});

requirejs(['app'], function () { });