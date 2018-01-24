var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const express = require('express');
const OktaJwtVerifier = require('@okta/jwt-verifier');
var cors = require('cors');


var port = process.env.PORT || 8000;
var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// NOTE:
// These below that I remove were throwing an errors. 


// const oktaJwtVerifier = new OktaJwtVerifier({
//     issuer: 'https://dev-138556.oktapreview.com.com/oauth2/default',
//     assertClaims: {
//         aud: 'api://default',
//     },
// });
//
// function authenticationRequired(req, res, next) {
//     const authHeader = req.headers.authorization || '';
//     const match = authHeader.match(/Bearer (.+)/);
//
//     if (!match) {
//         return res.status(401).end();
//     }
//
//     const accessToken = match[1];
//
//     return oktaJwtVerifier.verifyAccessToken(accessToken)
//         .then((jwt) => {
//             req.jwt = jwt;
//             next();
//         })
//         .catch((err) => {
//             res.status(401).send(err.message);
//         });
// }
//
// app.use(cors());
//
// app.get('/secure', authenticationRequired, (req, res) => {
//     res.json(req.jwt);
// });

app.use('/api', index);
app.use('/api/users', users);


// NOTE:
// Seems like you guys were using the express generator
// Which by default comes with Jade install for you
// and other configurations that you don't need
// So I remove them. 
app.listen(port, () => {
  console.log(`Server is starting at port ${port}`);
});
