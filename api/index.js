const express = require('express');
const cors = require('cors');
const config = require('./config');

const news = require('./app/news/news');

const app = express();
const PORT = 8000;

const connection = config.sql();

app.use(express.static('public'));
app.use(express.json());
app.use(cors());

connection.connect((error) => {
    if (error) {
        throw new Error(error);
    }

    app.use('/news', news);

    app.listen(PORT, () => {
        console.log(`Server started on ${PORT} port!`);
    });
});