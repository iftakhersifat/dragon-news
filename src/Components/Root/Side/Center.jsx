import React from 'react';
import { useParams } from 'react-router';

const Center = () => {
    const {id} = useParams()
    return (
        <div>
            <h1>midPoint - {id}</h1>
        </div>
    );
};

export default Center;