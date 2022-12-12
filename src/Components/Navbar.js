import React from "react";
import logo from "../images/airbnb-logo.png";

function Navbar()
{
    return(
        <nav>
            <img className="nav--logo" src={logo} alt="logo"/>
        </nav>
    )
}

export default Navbar;