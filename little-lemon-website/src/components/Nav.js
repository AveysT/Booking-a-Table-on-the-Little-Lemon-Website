import React, {useState} from "react";
import logo from "../images/logo.svg";

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <nav className={`navbar ${menuOpen ? "open" : ""}`}>
            <a href="/" className="logo">
            <img src={logo} alt="logo"/>
            </a>

            {/* Navbar items */}
            <div className="menu-icon" onClick={toggleMenu}> 
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>

            {/* Navbar items */}
                <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/">About</a>
                    </li>
                    <li>
                        <a href="/">Services</a>
                    </li>
                    <li>
                        <a href="/">Menu</a>
                    </li>
                    <li>
                        <a href="/">Reservation</a>
                    </li>
                    <li>
                        <a href="/">Order Online</a>
                    </li>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/">Home</a>
                    </li>
                </ul>
            </nav>
            )
}

export default Nav;