const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', {title: ' My node application', message: " Hello"});
});

//module.exports = home;