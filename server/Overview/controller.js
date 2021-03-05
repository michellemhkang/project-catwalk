let API_KEY = require('../../config.js');
let axios = require('axios');

module.exports = {
    getProducts: (req, res) => {
        let options = {
            // don't need method here if doing axios.get (Postman)
            url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products?product_id=${req.query.id}`,
            headers: {
                'User-Agent': 'request',
                'Authorization': API_KEY
            }
        };
        // or options
        axios.get(options.url, options.headers)
            .then((response) => {
                console.log('getting product info')
                // res.send(response.data);
            })
            .catch((err) => {
                console.log('I am your error');
                // console.log(err);
            });
    },

    getStyles: (req, res) => {
        let options = {
            url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/?product_id=${req.body.id}/styles`,
            headers: {
                'Authorization': API_KEY
            }
        };
        // or options
        axios.get(options.url, options.headers)
            .then((response) => {
                console.log('getting style info')
                // need to stringify?
                res.send(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }
}