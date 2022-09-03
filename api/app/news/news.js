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

router.post('/', config.upload.single('image'), (req, res) => {
    newsController.addNews(req, res, db);
});

router.delete('/:id', (req, res) => {
    newsController.deleteNews(req, res, db);
});

module.exports = router;