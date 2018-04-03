var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Movies
var Movie = new Schema({
		m_title: {
			type: String,
			required: [true, "Movie Title name is required"],
			trim: true,
			minlength: [3, "Movie Title name must be at least 3 characters."]
		},
		reviewer: {
			type: String,
			required: [true, "The reviewer must leave a name"],
			trim: true,
			minlength: [3, "Your name must be at least 3 characters."]
		},
		rating: {
			type: Number,
			default: 0,
			required: [true, "The reviewer must include a rating with their review"],
			minlength: [1, "Too low! Your rating must be in between 1 and 5 stars"],
			maxlength: [5, "Too High! Your rating must be in between 1 and 5 stars"]
		},
		review: {
			type: String,
			required: [true, "Type up a review"],
			trim: true,
			minlength: [3, "Your review must be at least 3 characters."]
		}

	},
	{
		reviews: [{
			reviewer: String,
			rating: Number,
			review: String,
		}]
	},
	{
		collection: 'movies'
	},
);

module.exports = mongoose.model('Movie', Movie);