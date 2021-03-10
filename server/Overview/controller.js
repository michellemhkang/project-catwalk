let express = require('express');
let API_KEY = require('../../config.js');
let axios = require('axios');

module.exports = {
    getProducts: (req, res) => {
        let options = {
            method: 'GET',
            url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${req.query.product_id}`,
            headers: {
                'Authorization': API_KEY
            }
        };
        // WHY does axios.get(options.url, options.headers) not work
        axios(options)
            .then((response) => {
                // console.log('getting product info')
                // console.log(JSON.stringify(response.data));
                // console.log(response.data);
                res.send(response.data);
            })
            .catch((err) => {
                // console.log(req);
                // console.log(req.query.product_id);
                // console.log(options.headers.Authorization);
                // console.log('I am your error');
                console.log(err);
            });
    },

    getStyles: (req, res) => {
        let options = {
            url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${req.query.product_id}/styles`,
            headers: {
                'Authorization': API_KEY
            }
        };
        axios(options)
            .then((response) => {
                // console.log('getting style info')
                // console.log(response.data);
                res.send(response.data);
            })
            .catch((err) => {
                // console.log('Good luck with this error');
                console.log(err);
            });
    }
}