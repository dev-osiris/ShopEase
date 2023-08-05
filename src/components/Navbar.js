import React from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = ({ searchText, setSearchText, cartLen}) => {
    return (
        <div className="navbar">
            <a className="title" href="/">
                <img className="title-image" src={require("./images/Home-text.png")} alt="title" />
            </a>

            {useLocation().pathname === '/store' && 
                //preventDefualt prevents the page to reload on hitting enter and losing the search results.
                <form onSubmit={(e) => e.preventDefault()} className="search-form" role="search">
                  <input 
                    className="search-box" 
                    type="search" 
                    placeholder="Search Laptops" 
                    aria-label="Search"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)} 
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
                    <sup 
                        style={{display: cartLen === 0 ? 'none' : 'inline'}}
                        id="cart-len-icon">
                        {cartLen}
                    </sup>
                </NavLink>
            </div>
        </div>
    );
}

export default Navbar;