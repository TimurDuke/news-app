import axiosApi from "../../axiosApi";

export const GET_NEWS_REQUEST = 'GET_NEWS_REQUEST';
export const GET_NEWS_SUCCESS = 'GET_NEWS_SUCCESS';
export const GET_NEWS_FAILURE = 'GET_NEWS_FAILURE';

const getNewsRequest = () => ({type: GET_NEWS_REQUEST});
const getNewsSuccess = news => ({type: GET_NEWS_SUCCESS, news});
const getNewsFailure = error => ({type: GET_NEWS_FAILURE, error});

export const getNews = () => {
    return async dispatch => {
        try {
            dispatch(getNewsRequest());
            const {data} = await axiosApi.get('/news');
            if (data) {
                dispatch(getNewsSuccess(data));
            }
        } catch (e) {
            dispatch(getNewsFailure(e.message));
        }
    };
};