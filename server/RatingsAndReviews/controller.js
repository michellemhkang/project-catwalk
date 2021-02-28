let express = require('express');

module.exports = {
  getReviews: (request, response) => {
    // make an axios request to Atelier API
    // send appropriate response to client based on API's response to axios request
    if (err) {
      console.error(err);
      res.status(400);
    } else {
      res.status(200);
    }
  },
};