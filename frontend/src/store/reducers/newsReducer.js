import {
    ADD_NEWS_FAILURE,
    ADD_NEWS_REQUEST,
    ADD_NEWS_SUCCESS,
    GET_NEWS_FAILURE,
    GET_NEWS_REQUEST,
    GET_NEWS_SUCCESS
} from "../actions/newsActions";

const initialState = {
    news: [],
    loading: false,
    error: null,
};

const newsReducer = (state = initialState, actions) => {
    switch(actions.type) {
        case GET_NEWS_REQUEST:
            return {...state, loading: true, error: null};
        case GET_NEWS_SUCCESS:
            return {...state, loading: false, error: null, news: actions.news};
        case GET_NEWS_FAILURE:
            return {...state, loading: false, error: actions.error};

        case ADD_NEWS_REQUEST:
            return {...state, loading: true, error: null};
        case ADD_NEWS_SUCCESS:
            return {...state, loading: false, error: null};
        case ADD_NEWS_FAILURE:
            return {...state, loading: false, error: actions.error};

        default:
            return state;
    }
};

export default newsReducer;