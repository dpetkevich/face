
/**
 * Module dependencies.
 */

var express = require( 'express' )
	, mongoose = require( 'mongoose' )
	, router = require( './router' );

var app = module.exports = express.createServer();

// Configuration

app.configure(function () {
  app.set( 'views' , __dirname + '/views' );
  app.set( 'view engine', 'ejs' );
  app.use( express.bodyParser() );
  app.use( express.methodOverride() );
  app.use( app.router );
  app.use( express.static(__dirname + '/public') );
});

app.configure( 'development', function () {
  app.use( express.errorHandler( { dumpExceptions: true, showStack: true } ) );
	var mongoose_uri = 'mongodb://localhost/crushFlow';
	mongoose.connect( mongoose_uri );
} );

app.configure( 'production', function () {
  app.use(express.errorHandler() ); 
	var mongoose_uri = 'mongodb://heroku:crushFlowAdmin@staff.mongohq.com:10084/app1737733';
	mongoose.connect( mongoose_uri );
} );




// Routes

for ( var i = 0; i < router.length; i++ ) {
	var method = router[ i ][ "method" ];
	var path = router[ i ][ "path" ];
	var handler = router[ i ][ "handler" ];
	app[ method ]( path, handler );
}

var port = process.env.PORT || 3000;

app.listen( port );
console.log( "Express server listening on port %d in %s mode", app.address().port, app.settings.env );
