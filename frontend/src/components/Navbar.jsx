import React from "react";
import '../styles/Navbar.css';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();

    const activateClass = (pathname) => {
        if (pathname === location.pathname.toString()) {
            return 'active';
        }
        else {
            return 'noWork';
        }
    }
    return (
        <div className="navbarContainer">
            <ul>
               
                <li><Link to='/components/DocGenerator' className={activateClass('/components/DocGenerator')} >Code Refactor</Link></li>
                <li><Link to='/components/CreateDocumention' className={activateClass('/components/CreateDocumention')} >Create Document</Link></li>
                <li><Link to='/components/DependencyTracker' className={activateClass('/components/DependencyTracker')} >Dependency Tracker</Link></li>
                <li><Link to='/components/CommitHistory' className={activateClass('/components/CommitHistory')} >Commit History</Link></li>
            </ul>
        </div>
    );
}



export default Navbar;