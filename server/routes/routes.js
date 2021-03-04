const express = require('express');
let reviewsController = require('../RatingsAndReviews/controller.js');
let overviewController = require('../Overview/controller.js');
let relatedProductsController = require('../RelatedProducts/controller.js');
let questionsAnswersController = require('../QuestionsAnswers/controller.js');

// This creates a routing middleware system
let projectCatwalk = express.Router();

// Put your routes here. Follow the pattern: projectCatwalk.<http request type>('<URL>', <controller>);
// projectCatwalk.get('/products', overviewController.getProducts);
projectCatwalk.get('/reviews', reviewsController.getReviews);


//Related products and your outfit requests
projectCatwalk.get('/RelatedProducts', relatedProductsController.getIds);
projectCatwalk.get('/RelatedProducts/prods', relatedProductsController.getProds)
projectCatwalk.get('/RelatedProducts/img', relatedProductsController.getImg)
projectCatwalk.get('/RelatedProducts/ratings', relatedProductsController.getRating)


projectCatwalk.get('/Q&A/data', questionsAnswersController.getData)
// this exports our middleware routing system
// This exports our middleware routing system
module.exports.projectCatwalk = projectCatwalk;
