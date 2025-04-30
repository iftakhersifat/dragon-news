import React from 'react';

const Navbar = () => {
    return (
        <div className='flex items-center flex-col gap-5'>
            <div className='mt-10'>
                <img src="/assets/logo.png" alt="logo" />
            </div>
            <div className='text-center space-y-2'>
                <p className='text-gray-500 font-semibold text-xl'>Journalism Without Fear or Favour</p>
                <p className='text-gray-500'>Sunday, November 27, 2025</p>
            </div>
        </div>
    );
};

export default Navbar;