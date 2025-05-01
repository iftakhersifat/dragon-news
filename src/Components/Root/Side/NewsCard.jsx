import React from 'react';

const NewsCard = ({rawNews}) => {
    const {title, image_url} = rawNews;
    return (
        <div>
            <div>
                <h1>{title}</h1>
                <img src={image_url} width={800} alt="" />
            </div>
        </div>
    );
};

export default NewsCard;