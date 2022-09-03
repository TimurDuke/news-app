module.exports = {
    getNews(req, res, db) {
        db.query('SELECT * FROM news', (error, results) => {
            if (error) {
                console.log(error);
                throw new Error(error);
            }

            const news = results.map(result => (
                {
                    id: result.id,
                    title: result.title,
                    image: result.image,
                    date: result.date
                }
            ));

            res.send(news);
        });
    },
    getNewsById(req, res, db) {
        db.query(`SELECT * FROM news WHERE id = ?`, [req.params.id], (error, result) => {
            if (error) return res.status(404).send(error.sqlMessage);

            if (result[0]) {
                return res.send(result[0]);
            }
            res.status(404).send('There is no value with this id');
        });
    },
    addNews(req, res, db) {
        const newNews = {
            title: req.body.title,
            description: req.body.description,
            date: new Date().toLocaleDateString('en-ca'),
        };

        if (req.file) {
            newNews.image = req.file.filename;
        }

        if (newNews.title && newNews.description) {
            db.query(`INSERT INTO news SET ?`, [newNews], (error, result) => {
                if (error) {
                    res.status(400).send(error.sqlMessage);
                }

                newNews.id = result.insertId;
                res.send(newNews);
            });
        } else {
            return res.status(400).send('Data not valid');
        }
    },
    deleteNews(req, res, db) {
        db.query('DELETE FROM news WHERE id = ?', [req.params.id], error => {
            if (error) return res.status(400).send('Data not valid');

            res.send('News deleted');
        });
    }
};