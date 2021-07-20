import React from 'react';
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
    return (
        <div className="ui vertical pointing menu">
       
            <NavLink exact={true} activeClassName="active" to="/" className="item">Home</NavLink>

            <NavLink exact={true} activeClassName="active" to="/about" className="item">About</NavLink>
         
            <NavLink exact={true} activeClassName="active" to="/login" className="item">Login</NavLink>
       
        </div>
    )
}
