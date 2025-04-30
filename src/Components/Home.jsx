import React from 'react';
import { format } from 'date-fns';

const Home = () => {
    return (
        <div className='container mx-auto'>
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

        <div className='flex items-center gap-4 mt-10 bg-[#F3F3F3] p-4'>
            <h1 className='btn bg-[#D72050] text-white'>Latest</h1>
        <marquee>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti reprehenderit vitae earum.</p>
        </marquee>
        </div>

        </div>
    );
};

export default Home;