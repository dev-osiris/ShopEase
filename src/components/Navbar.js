import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <a className="title" href="/">
                <img className="title-image" src={require("./images/Home-text.png")} alt="title" />
            </a>

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