import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../data/img/logo.png";

function Navbar() {
    const [navActive, setNavActive] = useState(false);

    const toggleNav = () => {
        setNavActive(!navActive);
    };

    const closeMenu = () => {
        setNavActive(false);
    };

    useEffect(() => {
        const handleResize = () => {
            // Automatically close the mobile menu if screen expands beyond mobile view
            if (window.innerWidth > 412) {
                closeMenu();
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <nav className={`navbar ${navActive ? "active" : ""}`}>
            <div className="navbar-brand">
                <img className="logo" src={logo} alt="Logo" />
                <h3 className="navbar-title">Alex.</h3>
            </div>

            {/* Hamburger Icon */}
            <button className="navbar-hamburger" onClick={toggleNav} aria-label="Toggle navigation">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </button>

            {/* Navigation Links */}
            <div className={`navbar-items ${navActive ? "active" : ""}`}>
                <ul>
                    <li>
                        <NavLink
                            onClick={closeMenu}
                            className={({ isActive }) =>
                                isActive ? "navbar-content navbar-active-content" : "navbar-content"
                            }
                            to="/"
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            onClick={closeMenu}
                            className={({ isActive }) =>
                                isActive ? "navbar-content navbar-active-content" : "navbar-content"
                            }
                            to="/Experience"
                        >
                            Experience
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            onClick={closeMenu}
                            className={({ isActive }) =>
                                isActive ? "navbar-content navbar-active-content" : "navbar-content"
                            }
                            to="/Projects"
                        >
                            Projects
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            onClick={closeMenu}
                            className={({ isActive }) =>
                                isActive ? "navbar-content navbar-active-content" : "navbar-content"
                            }
                            to="/Contact"
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;