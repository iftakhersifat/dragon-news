import React from 'react';
import { Link } from 'react-router';

const DragonDetailsNews = ({news}) => {
    const {image_url, title, details}=news;
    return (
        <div className='border-1 border-blue-50 p-6 mt-4'>
            <img src={image_url} className='w-full' alt="" />
            <h1 className='text-2xl font-bold mt-4 mb-4'>{title}</h1>
            <p>{details}</p>
            <Link to={`/center/${news.category_id}`} className='btn bg-[#D72050] text-white px-3 mt-4'>Back to categories</Link>
            
        </div>
    );
};

export default DragonDetailsNews;