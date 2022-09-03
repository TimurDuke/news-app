import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getOneNews} from "../../store/actions/newsActions";
import NewsItemDetails from "../../components/NewsItemDetails/NewsItemDetails";

const NewsDetails = props => {
    const dispatch = useDispatch();
    const news = useSelector(state => state.news.newsDetail);

    useEffect(() => {
        dispatch(getOneNews(props.match.params.id))
    }, [dispatch, props.match.params.id]);

    return news && (
        <div style={{padding: '0 15px'}}>
            <NewsItemDetails
                news={news}
            />
        </div>
    );
};

export default NewsDetails;