import {NavLink} from "react-router-dom";
import {useEffect, useState} from "react";
import { Github, Linkedin } from 'lucide-react';

export default function HeroSection() {
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
        <section id="heroSection" className="hero-section">
            <div className="hero-section-content-box">
                <div className="hero-section-content">
                    <h3 className="hero-section-name">Hello, I'm Alex Flinchum</h3>
                    <h1 className="hero-section-title">
                        <span className="hero-section-title-color">Full-Stack </span>
                        <span className="hero-section-title-sub-color">Developer</span>
                    </h1>
                    <p className="hero-section-description">
                        Crafting reliable enterprise applications with Java, React, and GraphQL.
                        Grounded in strong engineering principles, driven by automation.
                    </p>
                </div>
                <span className="hero-section-buttons">
                    <NavLink
                        onClick={closeMenu}
                        activeClass="navbar-active-content"
                        to="/ContactMe"
                        className="btn btn-primary">
                        Contact Me
                    </NavLink>
                    <button className="btn btn-primary">Download CV</button>
                </span>
                <span className="hero-section-links">
                    <a href="https://www.linkedin.com/in/alexflinchum/" className="link" target="_blank" rel="noopener noreferrer">
                        <Linkedin />
                    </a>
                    <a href="https://github.com/aflinch" className="link" target="_blank" rel="noopener noreferrer">
                        <Github />
                    </a>
                    <a href=" " className="link" target="_blank" rel="noopener noreferrer">
                        <img src="./img/leetcode_img.png" alt="LeetCode"/>
                    </a>
                </span>
            </div>
            <div className="hero-section-img">
                <img src="./img/hero_img.png" alt="Hero Section Img"/>
            </div>
        </section>
    )
}