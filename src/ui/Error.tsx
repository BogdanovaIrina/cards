import React from 'react';
import {NavLink} from "react-router-dom";

export const Error = () => {
    return (
        <div>
            <NavLink to={'/404'}>404</NavLink>
        </div>
    )
}