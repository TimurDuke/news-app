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
    addComment(req, res, db) {
        const newComment = {
            news_id: req.body.news_id,
            author: req.body.author,
            comment: req.body['comment'],
        }

        if (!req.body.author) {
            newComment.author = 'Anonymous';
        }

        if (newComment.news_id && newComment.comment) {
            db.query('SELECT * FROM news WHERE id = ?', [newComment.news_id], (error, results) => {
                if (error) return res.status(404).send('News not found');

                if (results.length !== 0) {
                    db.query(`INSERT INTO comments SET ?`, [newComment], (error, result) => {
                        if (error) {
                            res.status(400).send(error.sqlMessage);
                        }

                        newComment.id = result.insertId;
                        res.send(newComment);
                    });
                } else {
                    res.status(404).send('No news with this id');
                }
            });
        } else {
            res.status(400).send('Data not valid');
        }
    },
};