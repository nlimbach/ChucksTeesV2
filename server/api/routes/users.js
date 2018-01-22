const express = require('express');
const router = express.Router();
const oktaClient = require('../lib/oktaClient');

/* GET users listing. */


router.post('/', (req, res, next) => {
    if (!req.body) return res.sendStatus(400);
    const newUser = {
        profile: {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            number: req.body.number,
            email: req.body.email,
            username: req.body.username
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