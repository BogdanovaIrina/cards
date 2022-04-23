import React from 'react';
import {NavLink} from "react-router-dom";

export const Login = () => {
    return (
        <div>
            <NavLink to={'/login'}>Login</NavLink>
        </div>
    )
}