var sendFileHandler = function(request) {
	var file = request.path();
	if (request.path() === '/') {
		file = '/index.html';
	}
	request.response.sendFile("webroot" + file);
};

routeMatcher.get('/[^/]*', sendFileHandler);
routeMatcher.get('/js/.*', sendFileHandler);
routeMatcher.get('/js3rdparty/.*', sendFileHandler);
routeMatcher.get('/css/.*', sendFileHandler);
routeMatcher.get('/fonts/.*', sendFileHandler);