/* global define */
define(function (require, exports, module) {

	var decksService = function ($http, $q) {

		var decks = $q.defer();

		$http.get('/api/decks').
			success(function (data) {
				decks.resolve(data);
			});

		this.availableDecks = function () {
			return decks.promise;
		};
	};
	
	module.exports = ['$http', '$q', decksService];
});