import React from 'react';
import {NavLink} from "react-router-dom";

export const Login = () => {
    return (
        <div>
            <NavLink to={'/cards/login'}>Login</NavLink>
        </div>
    )
}