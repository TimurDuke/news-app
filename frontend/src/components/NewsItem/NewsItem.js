import React from 'react';
import {Link} from "react-router-dom";
import {Button, Card, CardHeader, CardMedia, Grid} from "@mui/material";
import {apiUrl} from "../../config";

import './NewsItem.css';

const NewsItem = ({title, date, image, id, deleteHandler}) => {
    return (
        <Grid item xs={12}>
            <Card className='card'>
                <div className='card__content'>
                    {image && <CardMedia
                        title='image'
                        image={apiUrl + '/uploads/' + image}
                        className='card__content__image-block'
                    />}
                    <div className='card__content_info-block'>
                        <CardHeader title={title}/>
                        <span className='card__content__info-block__date'>{date}</span>
                    </div>
                    <div className='card__content__info-block__read-post-block'>
                        <Link
                            to={'/news/' + id}
                            className='card__content__info-block__read-post-block__link'
                        >
                            Read full post >>>
                        </Link>
                    </div>
                </div>
                <div>
                    <Button
                        variant='outlined'
                        color='error'
                        onClick={deleteHandler}
                    >
                        Delete
                    </Button>
                </div>
            </Card>
        </Grid>
    );
};

export default NewsItem;