const express = require('express');
const axios = require('axios');
const key = require('../config.js')
const RelatedProductsRouteHandler = express.Router();


RelatedProductsRouteHandler.get('/RelatedProducts', (req,res) => {
    console.log(req.query)
    let relatedArr = [];
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
    console.log(response.data)
    // for(let i = 0; i< response.data.length; i++) {
    //   console.log(i)
    //   let options = {
    //     url: `https//app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${response.data[i]}`,
    //     method: 'GET',
    //     headers: {
    //       'User-Agent': 'request',
    //       'Authorization': key
    //     }
    //   }
    //   axios(options)
    //     .then(responseagain =>{
    //        relatedArr.push(responseagain.data)
    //        console.log(relatedArr);
    //        if(i === response.data.length-1) {
    //          res.send(relatedArr)
    //        }
    //     }).catch(err=> console.log(err))
    // }
    res.send(response.data)
  })
  .catch(err => res.send(err))
})







module.exports = RelatedProductsRouteHandler;