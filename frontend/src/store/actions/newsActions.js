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

export const ADD_NEWS_REQUEST = 'ADD_NEWS_REQUEST';
export const ADD_NEWS_SUCCESS = 'ADD_NEWS_SUCCESS';
export const ADD_NEWS_FAILURE = 'ADD_NEWS_FAILURE';

const addNewsRequest = () => ({type: ADD_NEWS_REQUEST});
const addNewsSuccess = () => ({type: ADD_NEWS_SUCCESS});
const addNewsFailure = error => ({type: ADD_NEWS_FAILURE, error});

export const addNews = postData => {
    return async dispatch => {
        try {
            dispatch(addNewsRequest());
            await axiosApi.post('/news', postData);
            await dispatch(addNewsSuccess());
        } catch (e) {
            dispatch(addNewsFailure(e.message));
        }
    };
};