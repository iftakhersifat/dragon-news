import React from 'react';
import { format } from 'date-fns';
import Marquee from 'react-fast-marquee';
const Header = () => {
    return (
        <div className='container mx-auto'>
            <div className='flex items-center flex-col gap-5'>
            <div className='mt-10'>
                <img src="/assets/logo.png" alt="logo" />
            </div>
            <div className='text-center space-y-2'>
                <p className='text-gray-500 font-semibold text-xl'>Journalism Without Fear or Favour</p>

                {/* date-fns */}
                <p className='text-gray-500'>{format(new Date(), "EEEE, PPP")}</p>
            </div>
        </div>

        <div className='flex items-center gap-4 mt-10 bg-[#F3F3F3] p-4'>
            <h1 className='btn bg-[#D72050] text-white'>Latest</h1>
        <Marquee pauseOnHover={true} speed={60}>
            <p>The GroundTruth Project announces reorganization to more deeply focus on flagship programming</p>
        </Marquee>
        </div>

        </div>
    );
};

export default Header;