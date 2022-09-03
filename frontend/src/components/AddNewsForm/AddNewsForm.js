import React from 'react';
import {Button, TextField} from "@mui/material";

const AddNewsForm = (props) => {
    return (
        <form
            onSubmit={props.onSubmitHandler}
            style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px'}}
        >
            <TextField
                label='Title'
                variant='outlined'
                name='title'
                value={props.inputData.title}
                onChange={(e) => props.inputsChange(e.target.name, e.target.value)}
                required
                sx={{width: '80%', marginBottom: '15px'}}
            />
            <TextField
                label='Description'
                variant='outlined'
                name='description'
                value={props.inputData.description}
                onChange={(e) => props.inputsChange(e.target.name, e.target.value)}
                required
                sx={{marginBottom: '15px', width: '80%'}}
            />
            <input
                name='image'
                type='file'
                ref={props.inputRef}
                onChange={(e) => props.fileInputChange(e.target.name, e.target.files)}
                style={{
                    fontSize: '15px',
                    border: '1px solid rgba(0, 0, 0, 0.23)',
                    padding: '15.5px 20px',
                    marginBottom: '10px',
                    width: '50%',
                    borderRadius: '4px',
                }}
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