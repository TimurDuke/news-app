import React from 'react';
import {Button, Card, Grid} from "@mui/material";

import './CommentItem.css';

const CommentItem = ({author, comment, deleteCommentHandler}) => (
    <Grid item xs={12} sx={{marginBottom: '15px'}}>
        <Card className='comment-card'>
            <p><strong>{author}</strong> написал(а): <i>{comment}</i></p>
            <Button
                variant='outlined'
                color='error'
                onClick={deleteCommentHandler}
            >
                Delete
            </Button>
        </Card>
    </Grid>
);

export default CommentItem;