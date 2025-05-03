import React from 'react';
import Login from './Login';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;