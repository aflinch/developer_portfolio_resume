import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

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
            if (window.innerWidth <= 500) {
                closeMenu();
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    useEffect(() => {
        if(window.innerWidth <= 1200) {
            closeMenu();
        }
    }, []);

    return (
        <nav className={`navbar ${navActive ? "active" : ""}`}>
            <div className="navbar-brand">
                <img src="./img/logo.png" alt="Logo" />
                <h3 className="navbar-title">Alex.</h3>
            </div>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className={`nav_hamburger ${navActive ? "active" : ""}`} onClick={toggleNav}>
                <span className="nav_hameburger_line"></span>
                <span className="nav_hameburger_line"></span>
                <span className="nav_hameburger_line"></span>
            </a>
            <div className={`navbar-items ${navActive ? "active" : ""}`}>
                <ul>
                    <li>
                        <NavLink
                            onClick={closeMenu}
                            className={({ isActive }) =>
                                isActive
                                    ? "navbar-content navbar-active-content"
                                    : "navbar-content"
                            }
                            to="/">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            onClick={closeMenu}
                            className={({ isActive }) =>
                                isActive
                                    ? "navbar-content navbar-active-content"
                                    : "navbar-content"
                            }
                            to="/MyResume">
                            Experience
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            onClick={closeMenu}
                            className={({ isActive }) =>
                                isActive
                                    ? "navbar-content navbar-active-content"
                                    : "navbar-content"
                            }
                            to="/MyProjects">
                            Projects
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            onClick={closeMenu}
                            className={({ isActive }) =>
                                isActive
                                    ? "navbar-content navbar-active-content"
                                    : "navbar-content"
                            }
                            to="/ContactMe">
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;