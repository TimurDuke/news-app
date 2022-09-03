import {GET_COMMENT_FAILURE, GET_COMMENT_REQUEST, GET_COMMENT_SUCCESS} from "../actions/commentsActions";

const initialState = {
    comments: [],
    loading: false,
    error: null,
};

const commentsReducer = (state = initialState, actions) => {
    switch(actions.type) {
        case GET_COMMENT_REQUEST:
            return {...state, loading: true, error: null};
        case GET_COMMENT_SUCCESS:
            return {...state, loading: false, error: null, comments: actions.comments}
        case GET_COMMENT_FAILURE:
            return {...state, loading: false, error: actions.error};

        default:
            return state;
    }
};

export default commentsReducer;