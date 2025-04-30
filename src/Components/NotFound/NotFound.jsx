import React from 'react';
import { useNavigate } from 'react-router';

const NotFound = () => {
    const navigate = useNavigate();
    const goHome =()=>{
        navigate('/');
    }
    return (
        <div className='container mx-auto mt-80 text-center space-y-4'>
            <h1>404 Error : Page not found</h1>
            <button onClick={goHome} className='btn bg-blue-500 rounded-xl'>Go to Home</button>
        </div>
    );
};

export default NotFound;