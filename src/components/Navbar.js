import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <a className="title" href="/">
                <img className="title-image" src={require("./images/Home-text.png")} alt="title" />
            </a>

            <div className="links">
                <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : "pending-link" }>
                    Home
                </NavLink>

                <NavLink to="/store" className={({ isActive }) => isActive ? "active-link" : "pending-link" }>
                    Store
                </NavLink>

                <NavLink to="/cart" className={({ isActive }) => isActive ? "active-link" : "pending-link" }>
                    Cart
                </NavLink>
            </div>
        </div>
    );
}

export default Navbar;