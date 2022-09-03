import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getNews} from "../../store/actions/newsActions";
import {Link} from "react-router-dom";
import {Grid} from "@mui/material";
import NewsItem from "../../components/NewsItem/NewsItem";

const News = () => {
    const dispatch = useDispatch();
    const news = useSelector(state => state.news.news);

    useEffect(() => {
        dispatch(getNews());
    }, [dispatch]);

    const deleteHandler = id => {

    };

    return (
        <div style={{padding: '0 15px'}}>
            <div style={{display: 'flex', justifyContent: "space-between", alignItems: 'center'}}>
                <h3>Posts</h3>
                <Link
                    to='/add'
                    style={{
                        textDecoration: 'none',
                        color: '#000',
                        padding: '7px 15px',
                        border: '2px solid #000',
                        borderRadius: '7px'
                    }}
                >
                    Add new post
                </Link>
            </div>
            <Grid item container spacing={3} sx={{justifyContent: 'center', marginTop: '0'}}>
                {!!news.length ? news.map(news => (
                    <NewsItem
                        key={news.id}
                        id={news.id}
                        title={news.title}
                        date={news.date}
                        image={news.image}
                        deleteHandler={() => deleteHandler(news.id)}
                    />
                )) : <h1 style={{margin: '30px 0 0 15px'}}>No posts</h1>}
            </Grid>
        </div>
    );
};

export default News;