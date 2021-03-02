const path = require('path');
const express = require('express');
const routes = require('./routes/routes.js');


const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '../client/dist')));

app.use('/', routes.projectCatwalk);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
