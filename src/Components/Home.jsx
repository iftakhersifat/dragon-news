import React from 'react';
import LeftSide from './Root/Side/LeftSide';
import Center from './Root/Side/Center';
import RightSide from './Root/Side/RightSide';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <div className='mt-10 flex'>
            <aside className="w-[20%]">
                <LeftSide></LeftSide>
            </aside>
            <aside className="w-[60%]">
                <Center></Center>
            </aside>
            <aside className="w-[20%]">
                <RightSide></RightSide>
            </aside>
        </div>
        </div>
    );
};

export default Home;