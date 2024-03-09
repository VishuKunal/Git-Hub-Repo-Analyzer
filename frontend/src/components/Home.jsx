import React from "react";
import Navbar from './Navbar';
import DependencyTracker from "./DependencyTracker";

const Home = () => {
    return (
        <div className="homeContainer">
            <Navbar />
            <DependencyTracker />
        </div>
    );
}

export default Home;