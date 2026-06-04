import React, { useRef } from 'react';
import emails from '@emailjs/browser';

export const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        // Replace these IDs with your actual EmailJS dashboard credentials
        emails
            .sendForm('service_fewjax6', 'template_ner36l9', form.current, {
                publicKey: 'CLWXTKKTqzTuI53jc',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <div className="form-container">
                <div className="form-group">
                    <label>First Name</label>
                    <input type="text" name="from_first_name" required/>
                </div>

                <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" name="from_last_name" />
                </div>
            </div>

            <div className="form-container">
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" name="from_email" required/>
                </div>

                <div className="form-group">
                    <label>Phone</label>
                    <input type="phone" name="from_phone" />
                </div>
            </div>

            <label>Message</label>
            <textarea name="message" placeholder="Write your message..." required/>

            <div className="form-submit-container">
                <input type="submit" value="Send Message" />
            </div>
        </form>
    );
};