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
};