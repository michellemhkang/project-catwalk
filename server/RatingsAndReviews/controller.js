let express = require('express');
let API_KEY = require('../../config.js');

module.exports = {
  getReviews: (request, response) => {
    // make an axios request to Atelier API
    // send appropriate response to client based on API's response to axios request
    console.log('request params ', request.params)
    let productId = request.params;
    let options = {
      params: {
        id: productId,
        page: 1,
        count: 3,
        sort: relevance
      },
      headers: {Authorization: API_KEY}
    }

    axios.get('/reviews', options)
    .then(response => {
      console.log(response);
      res.status(200).send(response)
    })
    .catch(err => {
      console.error(err);
      res.status(400)
    });
  },
};