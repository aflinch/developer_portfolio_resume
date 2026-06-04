import React from "react";
import {Github, Linkedin, Mail, Phone, Instagram} from "lucide-react";
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
                            <Phone /> (317) 650-5565
                        </span>
                        <span className="contact-info">
                            <Mail /> alexanderflinchum@gmail.com
                        </span>

                        <span className="hero-section-links">
                            <a href="https://www.linkedin.com/in/alexflinchum/" className="link" target="_blank" rel="noopener noreferrer">
                                <Linkedin />
                            </a>
                            <a href=" " className="link" target="_blank" rel="noopener noreferrer">
                                <Instagram />
                            </a>
                            <a href="https://github.com/aflinch" className="link" target="_blank" rel="noopener noreferrer">
                                <Github />
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