/*
 * GET home page.
 */

var Post = require( '../models/post.js' );
var Util = require( 'util' );

module.exports.index = exports.list_posts = function( req, res ) {
  
	Post.find( function ( err, posts ) {
		
		res.render( 'index.ejs', { title: 'CrushFlow', posts: posts.reverse() } );
		
	} );

};


/*
 * POST to home page to create new post.
 */	

module.exports.create_post = function( req, res ) {
	new Post( { title: req.body.post.title, content: req.body.post.content } ).save( function (err) {
		
		if ( !err ) {
			console.log( 'Success!' );
		} else {
			console.log( 'Had an error' + err );
		}
		
		res.redirect( 'back' );

	} );

};