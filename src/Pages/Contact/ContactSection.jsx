import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaLinkedin } from "react-icons/fa6";
import { SiGithub, SiInstagram } from "react-icons/si";
import {ContactForm} from "../../Components/ContactForm";

export default function ContactSection() {

    return (
        <section id="contactSection" className="contact-section">
            <div className="contact-section-content">
                <div className="contact-container">
                    <div className="section-heading-row">
                        <h2 className="contact-section-heading">CONTACT<span className="sub-color">.</span></h2>
                        <hr className="title-divider" />
                    </div>
                    <h3 className="contact-section-title">Get in <span className="sub-color">Touch</span></h3>
                </div>

                <div className="contact-section-content-column">
                    <div className="contact-info-section">
                        <h3>Contact Information</h3>
                        <span className="contact-info">
                            <Phone /> <a href="tel:+13176505565">(317) 650-5565</a>
                        </span>
                        <span className="contact-info">
                            <Mail /> <a href="mailto:alexanderflinchum@gmail.com">alexanderflinchum@gmail.com</a>
                        </span>
                        <span className="contact-info">
                            <MapPin /> Austin, TX (CST)
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
                        </span>
                    </div>

                    <div className="contact-form">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    )
}