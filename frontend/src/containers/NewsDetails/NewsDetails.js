import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getOneNews} from "../../store/actions/newsActions";
import NewsItemDetails from "../../components/NewsItemDetails/NewsItemDetails";
import {addComment, getComment} from "../../store/actions/commentsActions";
import CommentItem from "../../components/CommentItem/CommentItem";
import Form from "../../components/Form/Form";

const NewsDetails = props => {
    const dispatch = useDispatch();
    const news = useSelector(state => state.news.newsDetail);
    const comments = useSelector(state => state.comments.comments)

    const [commentData, setCommentData] = useState({
        author: '',
        comment: '',
        news_id: '',
    });

    useEffect(() => {
        dispatch(getOneNews(props.match.params.id));
        dispatch(getComment(props.match.params.id));

        setCommentData({...commentData, news_id: props.match.params.id});
    }, [dispatch, props.match.params.id]);

    const inputsHandler = (name, value) => {
        setCommentData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const deleteCommentHandler = id => {

    };

    const onSubmitHandler = () => {
        dispatch(addComment(commentData));
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
        </div>
    );
};

export default NewsDetails;