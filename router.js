var routes = require( './routes/index.js' );

var router = [

	{ method: "get", path: "/", handler: routes.index },
	{ method: "post", path: "/", handler: routes.new_post }

]

module.exports = router;
