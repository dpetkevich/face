/*
 * GET home page.
 */

var Post = require( '../models/post.js' );
var Util = require( 'util' );

exports.index = function( req, res ){
  
	Post.find( function (err, posts) {
		
		res.render('index', { title: 'CrushFlow', posts: posts.reverse() } );
		
	} );

};

exports.new_post = function( req, res ) {
	new Post( { title: req.body.post.title, content: req.body.post.content } ).save( function (err) {
		
		if ( !err ) {
			console.log( 'Success!' );
		} else {
			console.log( 'Had an error' + err );
		}
		
		res.redirect( 'back' );

	} );

};