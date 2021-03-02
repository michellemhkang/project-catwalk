let express = require('express');
let API_KEY = require('../../config.js');
const axios = require('axios');

module.exports = {
  getReviews: (req, res) => {
    let productId = req.query.id;
    let options = {
      params: {
        product_id: productId,
        page: 1,
        count: 3,
        sort: 'relevant'
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
};