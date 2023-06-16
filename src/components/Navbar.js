import React from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <a className="title" href="/">
                <img className="title-image" src={require("./images/Home-text.png")} alt="title" />
            </a>

            {useLocation().pathname === '/store' && 
                <form className="search-form" role="search">
                  <input 
                    className="search-box" 
                    type="search" 
                    placeholder="Search" 
                    aria-label="Search"
                    // onChange={(e) => props.setSearchText(e.target.value)} 
                  />
                </form>
              }

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