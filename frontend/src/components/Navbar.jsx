import React from "react";
import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <div className="navbarContainer">
            <ul>
                <li>Dependency Tracker</li>
                <li>Others</li>
                <li>About Us</li>
                <li>Home</li>
            </ul>
        </div>
    );
}

export default Navbar;