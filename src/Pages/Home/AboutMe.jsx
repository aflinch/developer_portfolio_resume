import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

export default function AboutMe() {

    return (
        <section id="aboutMe" className="about-section">
            <div className="about-section-content-box">
                <div className="about-section-content">
                    <h2 className="about-section-heading">About <span className="about-section-sub-color">Me</span></h2>
                </div>
            </div>
        </section>
    )
}