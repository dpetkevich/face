/*
 * GET home page.
 */

var Post = require( '../models/post.js' );
var util = require( 'util' );

module.exports.index = exports.list_posts = function( req, res ) {
  
	Post.find( function ( err, posts ) {
		
		res.render( 'index.ejs', { title: 'CrushFlow', posts: posts.reverse() } );
		
	} );

};


/*
 * Handler to create new post
 */	

module.exports.create_post = function( data, socket ) {

	new Post( { title: data.title, content: data.content } ).save( function (err) {
		
		if ( !err ) {
			console.log( 'Success!' );
			
			socket.emit( 'new_post_created', data );
			
		} else {
			console.log( 'Had an error' + err );
		}
		

	} );

};