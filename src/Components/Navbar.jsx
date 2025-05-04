import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from './Firebase/AuthProvider';


const Navbar = () => {
    const {user, logOut} = use(AuthContext);


    // handel LogOut
    const handelLogOut =()=>{
        logOut().then(()=>{
            alert("Successfully LogOut");
        })
        .catch(error=>{
            console.log(error);
        })
          
    }
    return (
        <div className='flex justify-between mt-10 container mx-auto'>
            <div>{user && user.email}</div>
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
                <img className='w-12 rounded-full' src={`${user ? user.photoURL : "/assets/user.png"}`} alt="user" />
                {
                    user ? <button onClick={handelLogOut} className='bg-[#403F3F] text-white btn px-6'>Log Out</button> : <Link to="/auth/login" className='bg-[#403F3F] text-white btn px-6'>Login</Link>
                }
            </div>

        </div>
        
    );
};

export default Navbar;