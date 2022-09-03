import React from 'react';
import {Button, TextField} from "@mui/material";

import './Form.css';

const Form = (props) => {
    return (
        <form
            onSubmit={props.onSubmitHandler}
            className='form'
        >
            <TextField
                label={props.inputLabelFirst}
                variant='outlined'
                name={props.inputLabelFirst}
                value={props.inputData.title}
                onChange={(e) => props.inputsChange(e.target.name, e.target.value)}
                required
                sx={{margin: '0 0 15px 0'}}
                className='form__text-inputs'
            />
            <TextField
                label={props.inputLabelSecond}
                variant='outlined'
                name={props.inputLabelSecond}
                value={props.inputData.description}
                onChange={(e) => props.inputsChange(e.target.name, e.target.value)}
                required
                sx={{margin: '0 0 15px 0'}}
                className='form__text-inputs'
            />
            {props.children}
            <Button
                type="submit"
                disabled={props.disabled}
                variant='outlined'
                color='success'
            >
                {props.btnTitle}
            </Button>
        </form>
    );
};

export default Form;