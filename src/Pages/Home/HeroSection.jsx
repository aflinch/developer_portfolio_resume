import {NavLink} from "react-router-dom";
import React, {useEffect, useState} from "react";
import { SiGithub, SiInstagram, SiLeetcode } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import {TypewriterTitle} from "../../Function/TypeWriter";
import heroSectionImg from "../../data/img/hero-section-img.png";
import resumePdf from "../../data/Flinchum, Alex - Resume.pdf";

const titles = ["Full-Stack Developer", "Gameplay Designer", "Software-Test Engineer"];

export default function HeroSection() {
    const [navActive, setNavActive] = useState(false);

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
                    <TypewriterTitle texts={titles} />
                    <p className="hero-section-description">
                        Designing interactive worlds, building scalable web apps, and breaking code to make it better.
                        <br />Where creative logic meets rigorous technical execution.
                    </p>
                </div>
                <span className="hero-section-buttons">
                    <NavLink
                        onClick={closeMenu}
                        to="/Contact"
                        className="btn btn-primary">
                        Contact Me
                    </NavLink>
                    <a href={resumePdf} download="Flinchum, Alex - Resume.pdf" className="btn btn-primary">Download CV</a>
                </span>
                <span className="hero-section-links">
                    <a href="https://www.linkedin.com/in/alexflinchum/" className="link" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                    <a href=" " className="link" target="_blank" rel="noopener noreferrer">
                        <SiInstagram />
                    </a>
                    <a href="https://github.com/aflinch" className="link" target="_blank" rel="noopener noreferrer">
                        <SiGithub />
                    </a>
                    <a href="https://leetcode.com/u/allflinch/" className="link" target="_blank" rel="noopener noreferrer">
                        <SiLeetcode />
                    </a>
                </span>
            </div>
            <div className="hero-section-img">
                <img src={heroSectionImg} alt="Hero Section Img"/>
            </div>
        </section>
    )
}
