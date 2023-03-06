import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {
    function showNavigation() {
        if(Auth.loggedIn()) {
            return (
                <ul className="nav nav-tabs" id="navBar">

                    {/* My Trips Tab: */}
                    <li className="nav-item">
                        <Link to= "/myTrips">
                            My Trips
                        </Link>
                    </li>
                    
                    {/* Logout Tab: */}
                    <li className="nav-item">
                        <a href="/" onClick={()=> Auth.logout()}>
                            Logout
                        </a>
                    </li>
                </ul>
            );
        } else {
            // If NOT logged in
            return (
                <ul className="nav nav-tabs" id="navBar">

                    {/* Signup Tab */}
                    <li className="nav-item">
                        <Link to= "/signup">
                            Signup
                        </Link>
                    </li>

                    {/* Login Tab */}
                    <li className="nav-item">
                        <Link to ="/login">
                            Login
                        </Link>
                    </li>
                </ul>
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