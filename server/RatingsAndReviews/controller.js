let express = require('express');
const axios = require('axios');

let API_KEY = require('../../config.js');

module.exports = {
  getReviews: (req, res) => {
    let productId = req.query.id;
    let options = {
      params: {
        product_id: productId,
        page: 1,
        sort: 'newest',
        count: 20
      },
      headers: {Authorization: API_KEY}
    }

    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews', options)
    .then(response => {
      res.status(200).send(response.data)
    })
    .catch(err => {
      console.error(err);
      res.status(400)
    });
  },

  getMetadata: (req, res) => {
    let productId = req.query.id;
    let options = {
      params: {
        product_id: productId,
      },
      headers: {Authorization: API_KEY}
    }

    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews/meta', options)
    .then(response => {
      res.status(200).send(response.data)
    })
    .catch(err => {
      console.error(err);
      res.status(400)
    });
  },

  sendReview: (req, res) => {
    let reviewData = req.body;
    axios({
      method: 'post',
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews/',
      data: reviewData,
      headers: {Authorization: API_KEY}
    })
    .then(response => {
      console.log('response from api ', response)
      res.status(201).send('Review successfully sent to Atelier API')
    })
    .catch(error => {
      console.error(error);
      res.status(400)
    })
  }
};
