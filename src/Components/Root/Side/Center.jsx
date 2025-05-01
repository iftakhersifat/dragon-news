import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Center = () => {
    const {id} = useParams();

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // news show 
    const[news, setNews] =useState([])

    useEffect(()=>{
        fetch("/news.json")
        .then(res=> res.json())
        .then(json =>{
            setData(json);
            setIsLoading(false)
        })

        

    }, []);

    useEffect(()=>{
        if(id== "0"){
            setNews(data);
        } else if (id == "1"){
            const filter = data.filter(news=> news.others?.is_today_pick == true);
            setNews(filter);
        }
        else{
        const filterNews = data.filter(news=> news.category_id == id);
            setNews(filterNews);}
    
    }, [id, data])

    

    if(isLoading){
        return <span className="loading loading-infinity loading-xl"></span>
    }

    
    // console.log(data)
    return (
        <div>
      <h1 className='text-xl font-bold mb-4'>Total News Found: {news.length}</h1>
      
    </div>
  );
};

export default Center;