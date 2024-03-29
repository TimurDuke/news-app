import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getOneNews} from "../../store/actions/newsActions";
import {addComment, deleteComment, getComment} from "../../store/actions/commentsActions";
import NewsItemDetails from "../../components/NewsItemDetails/NewsItemDetails";
import CommentItem from "../../components/CommentItem/CommentItem";
import Form from "../../components/Form/Form";
import Preloader from "../../components/UI/Preloader/Preloader";

const NewsDetails = props => {
    const dispatch = useDispatch();

    const news = useSelector(state => state.news.newsDetail);
    const comments = useSelector(state => state.comments.comments);
    const newsLoading = useSelector(state => state.news.loading);
    const commentsLoading = useSelector(state => state.comments.loading);

    const [commentData, setCommentData] = useState({
        author: '',
        comment: '',
        news_id: '',
    });

    useEffect(() => {
        setCommentData({...commentData, news_id: props.match.params.id});
    }, [commentData, props.match.params.id]);

    useEffect(() => {
        dispatch(getOneNews(props.match.params.id));
        dispatch(getComment(props.match.params.id));
    }, [dispatch, props.match.params.id]);

    const inputsHandler = (name, value) => {
        setCommentData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const deleteCommentHandler = id => {
        dispatch(deleteComment(id));
    };

    const onSubmitHandler = () => {
        dispatch(addComment(commentData));
    };

    return (
        <>
            <Preloader
                showPreloader={newsLoading || commentsLoading}
            />
            {news && <div style={{padding: '0 15px'}}>
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
                <div>
                    <h3 style={{fontSize: '25px', textAlign: 'center'}}>Add comment</h3>
                    <Form
                        onSubmitHandler={onSubmitHandler}
                        inputData={commentData}
                        inputsChange={inputsHandler}
                        inputLabelFirst='author'
                        inputLabelSecond='comment'
                        btnTitle='Add'
                        disabled={!commentData.comment}
                    />
                </div>
            </div>}
        </>
    );
};

export default NewsDetails;