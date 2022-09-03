import React, {useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Form from "../../components/Form/Form";
import {addNews} from "../../store/actions/newsActions";
import Preloader from "../../components/UI/Preloader/Preloader";

const AddNewsPage = ({history}) => {
    const dispatch = useDispatch();

    const loading = useSelector(state => state.news.loading);

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
            <Preloader
                showPreloader={loading}
            />
            <Form
                onSubmitHandler={onSubmitHandler}
                inputData={state}
                inputsChange={inputsHandler}
                inputLabelFirst='title'
                inputLabelSecond='description'
                btnTitle='Save'
                disabled={!(state.title !== '' && state.description !== '')}
            >
                <input
                    name='image'
                    type='file'
                    ref={inputEl}
                    onChange={(e) => fileInputHandler(e.target.name, e.target.files)}
                    style={{
                        fontSize: '15px',
                        border: '1px solid rgba(0, 0, 0, 0.23)',
                        padding: '16px 20px',
                        marginBottom: '10px',
                        width: '50%',
                        borderRadius: '4px'
                    }}
                />
            </Form>
        </>
    );
};

export default AddNewsPage;