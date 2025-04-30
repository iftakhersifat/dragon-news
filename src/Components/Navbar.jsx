import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className='flex justify-between mt-10 container mx-auto'>
            <div></div>
            <div>
                <nav className="space-x-4">
                    <NavLink className={({isActive})=>isActive ? "text-blue-500 underline" : "text-gray-500"} 
                    to="/">Home</NavLink>
                    <NavLink className={({isActive})=>isActive ? "text-blue-500 underline" : "text-gray-500"} 
                    to="/about">About</NavLink>
                    <NavLink className={({isActive})=>isActive ? "text-blue-500 underline" : "text-gray-500"}
                    to="/career">Career</NavLink>
                </nav>
            </div>

            <div className='flex gap-4'>
                <img src="/assets/user.png" alt="user" />
                <button className='bg-[#403F3F] text-white btn px-6'>Login</button>
            </div>

        </div>
        
    );
};

export default Navbar;