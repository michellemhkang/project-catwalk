const express = require('express');
let reviewsController = require('../RatingsAndReviews/controller.js');
let overviewController = require('../Overview/controller.js');
let relatedProductsController = require('../RelatedProducts/controller.js');
let questionsAnswersController = require('../QuestionsAnswers/controller.js');

// This creates a routing middleware system
let projectCatwalk = express.Router();

// Put your routes here. Follow the pattern: projectCatwalk.<http request type>('<URL>', <controller>);
projectCatwalk.get('/reviews', reviewsController.getReviews);

// this exports our middleware routing system
module.exports.projectCatwalk = projectCatwalk;
