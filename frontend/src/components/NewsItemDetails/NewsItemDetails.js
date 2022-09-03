import React from 'react';
import {apiUrl} from "../../config";

import './NewsItemDetails.css';

const NewsItemDetails = ({news}) => {
    return (
        <div className='news-item'>
            <div className='news-item__header'>
                {!!news.image ? <img
                    src={apiUrl + '/uploads/' + news.image}
                    alt={news.title}
                    className='news-item__header__img'
                /> : null}
                <h2 className='news-item__header__title'>{news.title}</h2>
            </div>
            <p className='news-item__date'>{news.date}</p>
            <p className='news-item__description'>{news.description}</p>
        </div>
    );
};

export default NewsItemDetails;