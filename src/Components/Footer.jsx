import React from 'react';
import {Phone, Mail} from 'lucide-react';
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
                        <Phone /> (317) 650-5565
                    </span>
                    <span className="footer-contact-info">
                        <Mail /> alexflinchum@gmail.com
                    </span>
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