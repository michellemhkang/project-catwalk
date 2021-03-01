const path = require('path');
const express = require('express');
const key = require('../config.js')
const axios = require('axios')

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '../client/dist')));


app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
