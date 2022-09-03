module.exports = {
    getComments(req, res, db) {
        if (req.query['news_id']) {
            let newsId = req.query['news_id'];

            db.query('SELECT * FROM comments WHERE news_id = ?', [newsId], (error, results) => {
                if (error) {
                    console.log(error);
                    throw new Error(error);
                }
                res.send(results);
            });
        } else {
            db.query('SELECT * FROM comments', (error, results) => {
                if (error) {
                    console.log(error);
                    throw new Error(error);
                }
                res.send(results);
            });
        }
    },
};