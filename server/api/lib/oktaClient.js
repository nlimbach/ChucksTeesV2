const okta = require('@okta/okta-sdk-nodejs');

//Okta Token:
//00rcih5E7ymjmlu4xjp7prH1Ghjq9ygi_CoGFvhAM6

const client = new okta.Client({
    orgUrl: 'https://dev-138556.oktapreview.com',
    token: '00rcih5E7ymjmlu4xjp7prH1Ghjq9ygi_CoGFvhAM6'
});

module.exports = client;