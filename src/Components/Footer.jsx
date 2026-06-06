import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { FaLinkedin } from "react-icons/fa6";
import { SiInstagram } from "react-icons/si";
import logo from "../data/img/logo.png";

function Footer() {

    return (
        <footer className="footer-section">
            <div className="footer-top-container">
                <div className="footer-brand">
                    <img className="logo-footer" src={logo} alt="Logo" />
                    <h3 className="footer-title">Alex.</h3>
                </div>

                <div className="footer-contact-section">
                    <h4>Contact</h4>
                    <span className="footer-contact-info">
                        <Phone /> <a href="tel:+13176505565">(317) 650-5565</a>
                    </span>
                    <span className="footer-contact-info">
                        <Mail /> <a href="mailto:alexanderflinchum@gmail.com">alexanderflinchum@gmail.com</a>
                    </span>
                    <div className="footer-social">
                        <a href="https://www.linkedin.com/in/alexflinchum/" className="footer-contact-info" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin />
                        </a>
                        <a href=" " className="footer-contact-info" target="_blank" rel="noopener noreferrer">
                            <SiInstagram />
                        </a>
                    </div>
                </div>
            </div>


            <hr className="divider" />

            <div className="footer-section-copyright">
                Copyright © 2026 Alex Flinchum. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer;