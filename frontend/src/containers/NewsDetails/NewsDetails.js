import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getOneNews} from "../../store/actions/newsActions";
import NewsItemDetails from "../../components/NewsItemDetails/NewsItemDetails";
import {getComment} from "../../store/actions/commentsActions";
import CommentItem from "../../components/CommentItem/CommentItem";

const NewsDetails = props => {
    const dispatch = useDispatch();
    const news = useSelector(state => state.news.newsDetail);
    const comments = useSelector(state => state.comments.comments)

    useEffect(() => {
        dispatch(getOneNews(props.match.params.id));
        dispatch(getComment(props.match.params.id));
    }, [dispatch, props.match.params.id]);

    const deleteCommentHandler = id => {

    };

    return news && (
        <div style={{padding: '0 15px'}}>
            <NewsItemDetails
                news={news}
            />
            <div>
                <h3 style={{fontSize: '22px', textAlign: 'center'}}>Comments</h3>
                {!!comments.length ? comments.map(comment => (
                    <CommentItem
                        key={comment.id}
                        author={comment.author}
                        comment={comment.comment}
                        deleteCommentHandler={() => deleteCommentHandler(comment.id)}
                    />
                )) : <h4 style={{textAlign: 'center'}}>This news has no comments</h4>}
            </div>
        </div>
    );
};

export default NewsDetails;