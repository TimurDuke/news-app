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
    }
};