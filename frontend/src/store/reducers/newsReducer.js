import {
    ADD_NEWS_FAILURE,
    ADD_NEWS_REQUEST,
    ADD_NEWS_SUCCESS,
    DELETE_NEWS_FAILURE,
    DELETE_NEWS_REQUEST,
    DELETE_NEWS_SUCCESS,
    GET_NEWS_FAILURE,
    GET_NEWS_REQUEST,
    GET_NEWS_SUCCESS,
    GET_ONE_NEWS_FAILURE,
    GET_ONE_NEWS_REQUEST,
    GET_ONE_NEWS_SUCCESS
} from "../actions/newsActions";

const initialState = {
    news: [],
    newsDetail: null,
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

        case DELETE_NEWS_REQUEST:
            return {...state, loading: true, error: null};
        case DELETE_NEWS_SUCCESS:
            const newsCopy = [...state.news];

            const deletedPost = newsCopy.filter(news => news.id === actions.id)[0];
            const index = newsCopy.indexOf(deletedPost);

            newsCopy.splice(index, 1);

            return {...state, loading: false, error: null, news: [...newsCopy]};
        case DELETE_NEWS_FAILURE:
            return {...state, loading: false, error: actions.error};

        case GET_ONE_NEWS_REQUEST:
            return {...state, loading: true, error: null};
        case GET_ONE_NEWS_SUCCESS:
            return {...state, loading: false, error: null, newsDetail: actions.news};
        case GET_ONE_NEWS_FAILURE:
            return {...state, loading: false, error: actions.error};

        default:
            return state;
    }
};

export default newsReducer;