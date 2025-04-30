import React, { Suspense, useEffect, useState } from 'react';
import { NavLink } from 'react-router';

const LeftSide = () => {

    const [categories, setCategories] =useState(null) // state to hold data
    const [loading, setLoading] = useState(true); // state to show loading

    useEffect(()=>{
        fetch("/categories.json")
        .then(res=>res.json())
        .then(json=>{
            setCategories(json);
            setLoading(false);
        })
    }, [])

    if(loading){
        return <span className="loading loading-infinity loading-xl"></span>
    }


    return (
        <div>
            <h1 className='text-xl font-bold mb-4'>All Category</h1>
            <div className='space-y-4 grid grid-cols-1'>
                {
                    categories.map(category => <NavLink key={category.id} className="btn w-[150px] border-none bg-white">{category.name}
                    </NavLink>)
                }
            </div>
        </div>
    );
};

export default LeftSide;