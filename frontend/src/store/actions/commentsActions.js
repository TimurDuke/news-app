import axiosApi from "../../axiosApi";

export const GET_COMMENT_REQUEST = 'GET_COMMENT_REQUEST';
export const GET_COMMENT_SUCCESS = 'GET_COMMENT_SUCCESS';
export const GET_COMMENT_FAILURE = 'GET_COMMENT_FAILURE';

const getCommentRequest = () => ({type: GET_COMMENT_REQUEST});
const getCommentSuccess = comments => ({type: GET_COMMENT_SUCCESS, comments});
const getCommentFailure = error => ({type: GET_COMMENT_FAILURE, error});

export const getComment = id => {
    return async dispatch => {
        try {
            dispatch(getCommentRequest());
            const {data} = await axiosApi.get('/comments?news_id=' + id);
            if (data) {
                dispatch(getCommentSuccess(data));
            }
        } catch (e) {
            dispatch(getCommentFailure(e.message));
        }
    };
};