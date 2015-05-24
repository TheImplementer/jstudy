var mongoConfiguration = {
	host: container.env['OPENSHIFT_MONGODB_DB_HOST'] || '127.0.0.1',
	port: parseInt(container.env['OPENSHIFT_MONGODB_DB_PORT'] || '27017'),
	db_name:   container.env["OPENSHIFT_APP_NAME"] || "jstudy",
	username: container.env['OPENSHIFT_MONGODB_DB_USERNAME'] || null,
	password: container.env['OPENSHIFT_MONGODB_DB_PASSWORD'] || null
}

container.deployModule('io.vertx~mod-auth-mgr~2.0.0-final');

container.deployModule('io.vertx~mod-mongo-persistor~2.0.0-final', mongoConfiguration);