const express = require('express');
const newsController = require('./newsController');
const config = require('../../config');

const router = express.Router();

const db = config.sql();

router.get('/', (req, res) => {
    newsController.getNews(req, res, db);
});

router.get('/:id', (req, res) => {
    newsController.getNewsById(req, res, db);
});

module.exports = router;