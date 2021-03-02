const path = require('path');
const express = require('express');
const key = require('../config.js')
const axios = require('axios')

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/Q&A/data', (req,res)=>{
  let options = {
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions?product_id=' + req.query.id,
    method: 'GET',
    headers: {
      'User-Agent': 'request',
      'Authorization': key
    }
  }
  axios(options).then(response => {res.send(response.data) } )
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
