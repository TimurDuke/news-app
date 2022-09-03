const express = require('express');
const commnetsController = require('./commentsController');
const config = require('../../config');

const router = express.Router();

const db = config.sql();

router.get('/', (req, res) => {
    commnetsController.getComments(req, res, db);
});

router.post('/', (req, res) => {
    commnetsController.addComment(req, res, db);
});

module.exports = router;