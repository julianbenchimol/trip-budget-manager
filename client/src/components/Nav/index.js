import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {
    function showNavigation() {
        if(Auth.loggedIn()) {
            return (
                <div id="navBar">
                    <div className="container-fluid">
                        <span className="text-light fs-3" id="navBarText">Your travel planning Website!</span>
                    </div>
                    <ul className="nav nav-tabs" id="navBar">
                    {/* My Trips Tab: */}
                        <li className="nav-item">
                            <Link to = "/" className="nav-link">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to= "/mytrips" className="nav-link">
                                My Trips
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to= "/newtrip" className="nav-link">
                                New Trip
                            </Link>
                        </li>

                    {/* Logout Tab: */}
                        <li className="nav-item">
                            <a href="/" onClick={()=> Auth.logout()} className='nav-link'>
                            Logout
                            </a>
                        </li>
                    </ul>
                </div>
            );
        } else {
            // If NOT logged in
            return (
                <div id="navBar">
                    <div className="container-fluid">
                        <span className="text-light fs-3" id="navBarText">Your travel planning Website!</span>
                    </div>
                        <ul className="nav nav-tabs" id="navBarItems">
                    {/* Signup Tab */}
                            <li className="nav-item">
                                <Link to= "/signup" className="nav-link">
                                    Signup
                                </Link>
                            </li>

                    {/* Login Tab */}
                            <li className="nav-item">
                                <Link to ="/login" className="nav-link">
                                    Login
                                </Link>
                            </li>
                        </ul>
                </div>
            );
        }
    }
    return (
        <header>
        <nav>
            {showNavigation()}
        </nav>
    </header>
    );
}

export default Nav;