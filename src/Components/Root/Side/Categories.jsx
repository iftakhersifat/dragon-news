import React, { Suspense, useEffect, useState } from 'react';
import { NavLink } from 'react-router';

const Categories = () => {

    const [categories, setCategories] =useState([]) // state to hold data
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
                    categories.map(category => <NavLink key={category.id} className={({isActive})=>isActive ? "btn w-[150px] border-none bg-gray-200 text-black" : "btn w-[150px] border-none bg-white"} to={`/center/${category.id}`}>{category.name}
                    </NavLink>)
                }
            </div>
        </div>
    );
};

export default Categories;