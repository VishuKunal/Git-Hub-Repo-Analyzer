import React from "react";
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbarContainer">
            <ul>
                <li><Link to='/components/DependencyTracker'>Dependency Tracker</Link></li>
                <li><Link to='/components/CommitHistory'>Commit History</Link></li>
                <li><Link to='/components/DocGenerator'>Doc Generator</Link></li>
                <li><Link to='/components/CreateDocumention'>Create Documentation</Link></li>
                <li>About Us</li>
                <li>Home</li>
            </ul>
        </div>
    );
}

export default Navbar;