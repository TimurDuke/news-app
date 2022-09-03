import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getNews} from "../../store/actions/newsActions";
import {Link} from "react-router-dom";

const News = () => {
    const dispatch = useDispatch();
    const news = useSelector(state => state.news.news);

    useEffect(() => {
        dispatch(getNews());
    }, [dispatch]);

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
        </div>
    );
};

export default News;