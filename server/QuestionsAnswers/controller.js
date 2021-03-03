const express = require('express');
const axios = require('axios')
const key = require('../../config.js')



module.exports = {

getData: (req,res)=>{
  let options = {
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions?product_id=' + req.query.id,
    method: 'GET',
    headers: {
      'User-Agent': 'request',
      'Authorization': key
    }
  }
  axios(options).then(response => {res.send(response.data) } )
}

}