import React, { useEffect, useState } from 'react';
import RightSide from './RightSide';
import { useLoaderData, useParams } from 'react-router';
import DragonDetailsNews from './DragonDetailsNews';

const DragonNews = () => {
    const data = useLoaderData();
    const {id} =useParams();
    // console.log(data, id);

    const [news, setNews]= useState([]);

    useEffect(()=>{
        const filterNews = data.find(singleNews => singleNews.id == id);
        setNews(filterNews)
    },[data, id])

    return (
        <div className='container mx-auto mt-10'>
            <h1 className='text-2xl font-bold'>Dragon News</h1>
            <div className='flex'>
                <div className='w-[80%]'>
                    <DragonDetailsNews news={news}></DragonDetailsNews>
                </div>
                <div className='w-[20%]'>
                    <RightSide></RightSide>
                </div>
            </div>
        </div>
    );
};

export default DragonNews;