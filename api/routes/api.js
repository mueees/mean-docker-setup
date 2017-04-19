const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const dbHost = 'mongodb://database/mean-docker';

mongoose.connect(dbHost);

const userSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const User = mongoose.model('User', userSchema);

/* GET api listing. */
router.get('/api', function (req, res) {
    res.send('api works');
});

router.get('/api/users', function (req, res) {
    User.find({}).then(function (users) {
        res.status(200).json(users);
    });
});

router.post('/api/users', function (req, res) {
    var user = {
        name: req.body.name,
        age: req.body.age
    };

    User.create(user).then(function () {
        res.status(201).json({
            message: 'User created successfully! Great!'
        });
    });
});

module.exports = router;