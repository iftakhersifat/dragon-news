import { format } from 'date-fns';
import React from 'react';

const Navbar = () => {
    return (
        <div className='flex items-center flex-col gap-5'>
            <div className='mt-10'>
                <img src="/assets/logo.png" alt="logo" />
            </div>
            <div className='text-center space-y-2'>
                <p className='text-gray-500 font-semibold text-xl'>Journalism Without Fear or Favour</p>
                
                {/* date-fns */}
                <p className='text-gray-500'>{format(new Date(), "EEEE, MMMM, yyyy")}</p>
            </div>
        </div>
    );
};

export default Navbar;