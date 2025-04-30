import React from 'react';
import { NavLink, useLoaderData } from 'react-router';

const LeftSide = () => {
    const categories = useLoaderData()
    console.log(categories)
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