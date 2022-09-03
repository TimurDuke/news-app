const mysql = require('mysql');
const path = require('path');
const multer = require("multer");
const uniqid = require("uniqid");

const rootPath = __dirname;

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(rootPath, 'public/uploads'));
    },
    filename: (req, file, cb) => {
        cb(null, uniqid() + path.extname(file.originalname));
    },
});

const upload = multer({storage});

module.exports = {
    upload,
    sql() {
        return mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "root",
            database: "news"
        });
    },
};
