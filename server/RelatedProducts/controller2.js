let express = require('express');
let key = require('../../config.js')
let axios = require('axios')

module.exports = {
  getIds: (req, res) => {
    var theData = [];

    // make an axios request to Atelier API
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
      // console.log(response.data)
      console.log('first go')
     theData = Promise.all(response.data.map(item => {
        let oneObj = {}
        oneObj.id = item;
        // console.log('I am', item, oneObj);
        axios({
          url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sjo/products/${item}`,
          method: 'GET',
          headers: {
            'User-Agent': 'request',
            'Authorization': key
          }
        })
        .then((res) => {
          console.log(res.data.name)
          return res.data.name
        }).catch(err=> console.log(err))
        // return res.data.name
      }))
      .then(()=>console.log('data',theData))
      .catch(err=>console.log(err))
    })
    }}


