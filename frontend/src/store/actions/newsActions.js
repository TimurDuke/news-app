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

export const DELETE_NEWS_REQUEST = 'DELETE_NEWS_REQUEST';
export const DELETE_NEWS_SUCCESS = 'DELETE_NEWS_SUCCESS';
export const DELETE_NEWS_FAILURE = 'DELETE_NEWS_FAILURE';

const deleteNewsRequest = () => ({type: DELETE_NEWS_REQUEST});
const deleteNewsSuccess = id => ({type: DELETE_NEWS_SUCCESS, id});
const deleteNewsFailure = error => ({type: DELETE_NEWS_FAILURE, error});

export const deleteNews = id => {
    return async dispatch => {
        try {
            dispatch(deleteNewsRequest());
            await axiosApi.delete('/news/' + id);
            await dispatch(deleteNewsSuccess(id));
        } catch (e) {
            dispatch(deleteNewsFailure(e.message));
        }
    };
};

export const GET_ONE_NEWS_REQUEST = 'GET_ONE_NEWS_REQUEST';
export const GET_ONE_NEWS_SUCCESS = 'GET_ONE_NEWS_SUCCESS';
export const GET_ONE_NEWS_FAILURE = 'GET_ONE_NEWS_FAILURE';

const getOneNewsRequest = () => ({type: GET_ONE_NEWS_REQUEST});
const getOneNewsSuccess = news => ({type: GET_ONE_NEWS_SUCCESS, news});
const getOneNewsFailure = error => ({type: GET_ONE_NEWS_FAILURE, error});

export const getOneNews = id => {
    return async dispatch => {
        try {
            dispatch(getOneNewsRequest());
            const {data} = await axiosApi.get('/news/' + id);
            if (data) {
                dispatch(getOneNewsSuccess(data));
            }
        } catch (e) {
            dispatch(getOneNewsFailure(e.message));
        }
    };
};