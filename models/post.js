var mongoose = require( 'mongoose' )
	, Schema = mongoose.Schema;
	
var postSchema = new Schema( {
		title		: String
	,	content	: String
	,	date    : { type: Date, default: Date.now }
} );

module.exports = mongoose.model( 'Post', postSchema );