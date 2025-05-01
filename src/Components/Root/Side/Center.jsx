import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Center = () => {
    const {id} = useParams();

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        fetch("/news.json")
        .then(res=> res.json())
        .then(json =>{
            setData(json);
            setIsLoading(false)
        })

        

    }, []);
    

    if(isLoading){
        return <span className="loading loading-infinity loading-xl"></span>
    }

    const filterNews = data.filter(news=> news.category_id == id);
        console.log(filterNews);

    // console.log(data)
    return (
        <div>
            <h1>News - {id}</h1>
        </div>
    );
};

export default Center;