let express = require('express');
let key = require('../../config.js')
let axios = require('axios')

module.exports = {
  getIds: (req, res) => {
    var theData = [];

    let options = {
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sjo/products/${req.query.itemid}/related`,
      method: 'GET',
      headers: {
        'User-Agent': 'request',
        'Authorization': key
      }
    }
    axios(options)
    .then(response =>{
     response.data.map(item => {
        let oneObj = {}
        oneObj.id = item;

        axios({
          url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sjo/products/${item}`,
          method: 'GET',
          headers: {
            'User-Agent': 'request',
            'Authorization': key
          }
        }).then((response2) => {
          oneObj.name = response2.data.name;
          oneObj.price = response2.data.default_price;
          oneObj.category = response2.data.category;
          oneObj.features = response2.data.features;

          axios({
            url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sjo/products/${item}/styles`,
            method: 'GET',
            headers: {
              'User-Agent': 'request',
              'Authorization': key
            }
          }).then(response3 => {
            oneObj.img = response3.data.results[0].photos[0].url;
            oneObj.sale = response3.data.results[0].sale_price;

            axios({
              url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sjo/reviews/meta?product_id=${item}`,
              method: 'GET',
              headers: {
                'User-Agent': 'request',
                'Authorization': key
              }
            }).then(response4 => {
              let numberOfReviews = 0;
              let totalRating = 0;

              for(let reviewRate in response4.data.ratings) {
                numberOfReviews += Number(response4.data.ratings[reviewRate])
                totalRating += (Number(response4.data.ratings[reviewRate]) * Number(reviewRate))
              }
              if(numberOfReviews === 0) {
                oneObj.rating = 'no Ratings'
              } else {
                let avg = Math.round((totalRating/numberOfReviews) * 10) / 10;
                oneObj.rating = avg;
              }
              theData.push(oneObj)
              if(theData.length === response.data.length) {
                res.send(theData)
              }
            })
          })
        })
      })
      // .catch(err => console.log(err, 'rel id req'))
    })
  }
};
