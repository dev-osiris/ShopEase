import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <a className="title" href="/">ShopEase</a>

            <div className="links">
                <Link to="/">
                    Home
                </Link>

                <Link to="/store">
                    Store
                </Link>

                <Link to="/cart">
                    Cart
                </Link>
            </div>
        </div>
    );
}

export default Navbar;