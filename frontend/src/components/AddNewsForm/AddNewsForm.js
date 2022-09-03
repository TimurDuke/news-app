import React from 'react';
import {Button, TextField} from "@mui/material";

import './AddNewsForm.css';

const AddNewsForm = (props) => {
    return (
        <form
            onSubmit={props.onSubmitHandler}
            className='form'
        >
            <TextField
                label='Title'
                variant='outlined'
                name='title'
                value={props.inputData.title}
                onChange={(e) => props.inputsChange(e.target.name, e.target.value)}
                required
                className='form__text-inputs'
            />
            <TextField
                label='Description'
                variant='outlined'
                name='description'
                value={props.inputData.description}
                onChange={(e) => props.inputsChange(e.target.name, e.target.value)}
                required
                className='form__text-inputs'
            />
            <input
                name='image'
                type='file'
                ref={props.inputRef}
                onChange={(e) => props.fileInputChange(e.target.name, e.target.files)}
                className='form__file-input'
            />
            <Button
                type="submit"
                disabled={props.disabled}
                variant='outlined'
                color='success'
            >
                Save
            </Button>
        </form>
    );
};

export default AddNewsForm;