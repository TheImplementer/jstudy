/* global require,requirejs */
requirejs.config({
	baseUrl: 'js',
    paths: {
        'angular': 'vendor/angular'
    },
    shim: {
    	'angular': {
    		exports: 'angular'
    	}
    }
});

requirejs(['app'], function () { });