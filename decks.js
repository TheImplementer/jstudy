routeMatcher.get('/api/decks', function (request) {

	var findMessage = {
		'action': 'find',
		'collection': 'decks',
		'matcher': {}
	};

	eventBus.send(mongoAddress, findMessage, function (reply) {
		var response = request.response;
		if (reply.status === 'ok') {
			var results = reply.results;
			response.statusCode(200);
			response.end(JSON.stringify(results));
		} else {
			response.statusCode(500);
			response.end('An error occurred while loading the available decks: ' + reply.message);
		}
	});
});

routeMatcher.post('/api/decks', function (request) {

	request.bodyHandler(function (body) {
		var saveMessage = {
			'action': 'save',
			'collection': 'decks',
			'document': JSON.parse(body).deckDefinition
		};

		eventBus.send(mongoAddress, saveMessage, function (reply) {
			var response = request.response;
			if (reply.status === 'ok') {
				var results = reply.results;
				response.statusCode(200);
				response.end();
			} else {
				response.statusCode(500);
				response.end('An error occurred while saving the deck: ' + reply.message);
			}
		});
	});

	
});