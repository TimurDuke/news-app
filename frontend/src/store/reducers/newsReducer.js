const initialState = {
    news: [],
    loading: false,
    error: null,
};

const newsReducer = (state = initialState, actions) => {
    switch(actions.type) {
        default:
            return state;
    }
};

export default newsReducer;