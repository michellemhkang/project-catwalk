let express = require('express');
let key = require('../../config.js')
let axios = require('axios')

module.exports = {
  getIds: (req, res) => {
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
    .then(response =>{res.send(response.data)})
    .then(err => console.log(err, 'rel id req'))
  },
  //gets product info from api
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