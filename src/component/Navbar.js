import React from "react";
import './Navbar.css'

const Navbar = () => {
    return (
        <ul className="nav">
            <p className="logo">SicBock</p>
            <li><a href="#genre">Genre</a></li>
            <li><a href="#random">Random</a></li>
            <li><a href="#product">Product</a></li>
            <li><a href="#help">Help</a></li>
        </ul>
    )
}

export default Navbar