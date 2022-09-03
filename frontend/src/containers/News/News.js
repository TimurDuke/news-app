import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getNews} from "../../store/actions/newsActions";

const News = () => {
    const dispatch = useDispatch();
    const news = useSelector(state => state.news.news);

    useEffect(() => {
        dispatch(getNews());
    }, [dispatch]);

    return (
        <div>
            News will be here
        </div>
    );
};

export default News;