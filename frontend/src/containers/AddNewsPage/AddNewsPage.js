import React, {useRef, useState} from 'react';
import AddNewsForm from "../../components/AddNewsForm/AddNewsForm";
import {useDispatch} from "react-redux";
import {addNews} from "../../store/actions/newsActions";

const AddNewsPage = ({history}) => {
    const dispatch = useDispatch();

    const inputEl = useRef();

    const [state, setState] = useState({
        title: '',
        description: '',
        image: '',
    });

    const inputsHandler = (name, value) => {
        setState(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const fileInputHandler = (name, file) => {
        setState(prev => ({
            ...prev,
            [name]: file[0]
        }));
    };

    const onSubmitHandler = async e => {
        e.preventDefault();

        const formData = new FormData();

        Object.keys(state).forEach(key => {
            formData.append(key, state[key]);
        });

        setState({
            title: '',
            description: '',
            image: ''
        });

        inputEl.current.value = '';

        await dispatch(addNews(formData));
        await history.push('/');
    };

    return (
        <>
            <AddNewsForm
                onSubmitHandler={onSubmitHandler}
                inputData={state}
                inputsChange={inputsHandler}
                fileInputChange={fileInputHandler}
                disabled={!(state.title !== '' && state.description !== '')}
                inputRef={inputEl}
            />
        </>
    );
};

export default AddNewsPage;