import React from 'react';
import {Link} from "react-router-dom";
import {Button, Card, CardHeader, CardMedia, Grid} from "@mui/material";
import {apiUrl} from "../../config";

const NewsItem = ({title, date, image, id, deleteHandler}) => {
    return (
        <Grid item xs={12}>
            <Card sx={{
                height: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingRight: '15px'
            }}
            >
                <div style={{display: 'flex', width: '90%'}}>
                    {image && <CardMedia
                        title='image'
                        image={apiUrl + '/uploads/' + image}
                        sx={{
                            paddingTop: '11%',
                            width: '12%',
                        }}
                    />}
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                    }}
                    >
                        <CardHeader title={title}/>
                        <span style={{padding: '15px'}}>{date}</span>
                    </div>
                    <div style={{
                        display: 'flex',
                        alignItems: 'end',
                        marginLeft: '15px',
                        paddingBottom: '18px'
                    }}
                    >
                        <Link
                            to={'/news/' + id}
                            style={{
                                textDecoration: 'none',
                                border: '1px solid blue',
                                padding: '7px 15px',
                                borderRadius: '7px'
                            }}
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