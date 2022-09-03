import {
    ADD_COMMENT_FAILURE,
    ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, DELETE_COMMENT_FAILURE, DELETE_COMMENT_REQUEST, DELETE_COMMENT_SUCCESS,
    GET_COMMENT_FAILURE,
    GET_COMMENT_REQUEST,
    GET_COMMENT_SUCCESS
} from "../actions/commentsActions";

const initialState = {
    comments: [],
    loading: false,
    error: null,
};

const commentsReducer = (state = initialState, actions) => {
    const commentsCopy = [...state.comments];

    switch(actions.type) {
        case GET_COMMENT_REQUEST:
            return {...state, loading: true, error: null};
        case GET_COMMENT_SUCCESS:
            return {...state, loading: false, error: null, comments: actions.comments}
        case GET_COMMENT_FAILURE:
            return {...state, loading: false, error: actions.error};

        case ADD_COMMENT_REQUEST:
            return {...state, loading: true, error: null};
        case ADD_COMMENT_SUCCESS:
            commentsCopy.push(actions.comment);

            return {...state, loading: false, error: null, comments: [...commentsCopy]};
        case ADD_COMMENT_FAILURE:
            return {...state, loading: false, error: actions.error};

        case DELETE_COMMENT_REQUEST:
            return {...state, loading: true, error: null};
        case DELETE_COMMENT_SUCCESS:
            const deletedComment = commentsCopy.filter(news => news.id === actions.id)[0];
            const index = commentsCopy.indexOf(deletedComment);

            commentsCopy.splice(index, 1);

            return {...state, loading: false, error: null, comments: [...commentsCopy]};
        case DELETE_COMMENT_FAILURE:
            return {...state, loading: false, error: actions.error};

        default:
            return state;
    }
};

export default commentsReducer;