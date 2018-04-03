// movieRoutes.js

var express = require('express');
var app = express();
var movieRoutes = express.Router();

// Require movie model in our routes module
var Movie = require('../models/Movie');

// add movie route
movieRoutes.route('/add').post(function (req, res) {
	var movie = new Movie({
		m_title: req.body.m_title, 
		reviewer: req.body.reviewer,
		rating: req.body.rating,
		review: req.body.review
	});
	movie.save()
	.then(movie => {
		res.status(200).json({'movie': 'Movie added successfully'});
		res.redirect('/movies');
	})
	.catch(err => {
		res.status(400).send("unable to save to database");
		
	});
});

// get data home route
movieRoutes.route('/').get(function (req, res) {
   	Movie.find(function (err, movie){
		if(err){
			console.log(err);
		}
		else {
			res.json(movie);
		}
  	});
});

// get movie route
movieRoutes.route('/movie/:id').get(function (req, res) {
	var id = req.params.id;
	Movie.findById(id, function (err, movie){
		res.json(movie);
	});
});

// delete | remove | destroy route
movieRoutes.route('/delete/:id').get(function (req, res) {
	Movie.findByIdAndRemove({_id: req.params.id}, function(err, movie){
		if(err) res.json(err);
		else res.json('Movie successfully removed');
	});
});

module.exports = movieRoutes;

// //  Defined update route (didn't need it)
// movieRoutes.route('/movie/:id').post(function (req, res) {
// 	Movie.findById(req.params.id, function(err, movie) {
// 		if (!movie)
// 		return next(new Error('Could not load Document'));
// 		else {
// 			movie.m_title = req.body.m_title;
// 			movie.reviewer = req.body.reviewer;
// 			movie.rating = req.body.rating;
// 			movie.review = req.body.review;

// 			movie.save().then(movie => {
// 				res.json('Update complete');
// 			})
// 			.catch(err => {
// 					res.status(400).send("unable to update the database");
// 			});
// 		}
// 	});
// });