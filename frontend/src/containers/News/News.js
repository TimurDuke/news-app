import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {deleteNews, getNews} from "../../store/actions/newsActions";
import {Link} from "react-router-dom";
import {Grid} from "@mui/material";
import NewsItem from "../../components/NewsItem/NewsItem";

import './News.css';

const News = () => {
    const dispatch = useDispatch();
    const news = useSelector(state => state.news.news);

    useEffect(() => {
        dispatch(getNews());
    }, [dispatch]);

    const deleteHandler = id => {
        dispatch(deleteNews(id));
    };

    return (
        <div className='news'>
            <div className='news__header'>
                <h3>News</h3>
                <Link
                    to='/add'
                    className='news__header__link'
                >
                    Add new post
                </Link>
            </div>
            <Grid item container spacing={3} className='news__content'>
                {!!news.length ? news.map(news => (
                    <NewsItem
                        key={news.id}
                        id={news.id}
                        title={news.title}
                        date={news.date}
                        image={news.image}
                        deleteHandler={() => deleteHandler(news.id)}
                    />
                )) : <h1 className='news__content__no-posts'>No posts</h1>}
            </Grid>
        </div>
    );
};

export default News;