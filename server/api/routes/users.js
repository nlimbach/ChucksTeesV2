const express = require('express');
const router = express.Router();
const oktaClient = require('../lib/oktaClient');

/* GET users listing. */


router.post('/', (req, res, next) => {
    // NOTE:
    // Not fully knowledgable with OktaClient
    // It's not returning a 401 Not authorized errors
    // Check your credentials
    // Seems like they don't like the property of number and username
    // Look up how to add extra properties to them.
    if (!req.body) return res.sendStatus(400);
    const newUser = {
        profile: {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            // number: req.body.number,
            // username: req.body.username,
            email: req.body.email,
            login: req.body.email
        },
        credentials: {
            password: {
                value: req.body.password
            }
        }
    };

    oktaClient.createUser(newUser)
        .then(user => {
            res.status(201);
            res.send(user);
        })
        .catch(err => {
            res.status(400);
            res.send(err);
        })
});

module.exports = router;