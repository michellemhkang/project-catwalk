let express = require('express');
let key = require('../../config.js')
let axios = require('axios')

module.exports = {
  getIds: (req, res) => {
    var theData = [];

    // make an axios request to Atelier API
    let options = {
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${req.query.itemid}/related`,
      method: 'GET',
      headers: {
        'User-Agent': 'request',
        'Authorization': key
      }
    }
    axios(options)
    .then(response =>{
      // console.log(response.data)
      console.log('first go')
     response.data.map(item => {
        let oneObj = {}
        oneObj.id = item;
        // console.log('I am', item, oneObj);
        axios({
          url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${item}`,
          method: 'GET',
          headers: {
            'User-Agent': 'request',
            'Authorization': key
          }
        }).then((response2) => {
          // console.log(response2.data);
          // console.log(item, 'prod info got')
          oneObj.name = response2.data.name;
          oneObj.price = response2.data.default_price;
          oneObj.category = response2.data.category;
          oneObj.features = response2.data.features;
          // console.log('I am', item, oneObj);
          axios({
            url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${item}/styles`,
            method: 'GET',
            headers: {
              'User-Agent': 'request',
              'Authorization': key
            }
          }).then(response3 => {
            // console.log(response3.data)
            // console.log(item, 'img info got');
            oneObj.img = response3.data.results[0].photos[0].url;
            oneObj.sale = response3.data.results[0].sale_price;
            // console.log('I am', item, oneObj);

            axios({
              url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews/meta?product_id=${item}`,
              method: 'GET',
              headers: {
                'User-Agent': 'request',
                'Authorization': key
              }
            }).then(response4 => {
              // console.log('meta data', response4.data.ratings);
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



              // console.log('numberOfReviews', numberOfReviews)
              // console.log('totalRating', totalRating)
              // console.log('avg',avg)
              // console.log( item, 'rating info got')
              // oneObj.rating = 'some avg'
              // console.log('I am', item, oneObj);

              theData.push(oneObj)
              // console.log('res1', response.data.length)
              if(theData.length === response.data.length) {
                res.send(theData)
              }
              // return oneObj

            })
          })
        })
      })
      // .then((something)=>console.log(theData))
      // .catch(err => console.log(err, 'rel id req'))
    })
  },
  // gets product info from api
  getProds: (req, res) => {
    let options = {
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${req.query.itemid}`,
      method: 'GET',
      headers: {
        'User-Agent': 'request',
        'Authorization': key
      }
    }
    axios(options)
      .then(basicinfo => res.send(basicinfo.data))
      .catch(err => console.log(err, 'info req'))
  },
  getImg: (req, res) => {
    let options = {
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${req.query.itemid}/styles`,
      method: 'GET',
      headers: {
        'User-Agent': 'request',
        'Authorization': key
      }
    }
    axios(options)
      .then(img => res.send(img.data))
      .catch(err => console.log(err, 'img req'))
  },
  getRating: (req, res) => {
    let options = {
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews/?product_id=${req.query.itemid}`,
      method: 'GET',
      headers: {
        'User-Agent': 'request',
        'Authorization': key
      }
    }
    axios(options)
      .then(rating => res.send(rating.data))
      .catch(err => console.log(err, 'ratings req'))
  }
};
