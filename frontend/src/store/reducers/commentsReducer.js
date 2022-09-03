const initialState = {
    comments: [],
    loading: false,
    error: null,
};

const commentsReducer = (state = initialState, actions) => {
    switch(actions.type) {
        default:
            return state;
    }
};

export default commentsReducer;