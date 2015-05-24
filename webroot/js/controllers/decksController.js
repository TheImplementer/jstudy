/* global define */
define(function(require, exports, module) {
	
	return ['$http', function ($http) {

		this.saveDeck = function () {
			$http.post('/api/decks', {
				deckDefinition: JSON.parse(this.deckDefinition)
			});
		};
	}];
});