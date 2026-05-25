import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

export default function AboutMe() {

    return (
        <section id="aboutMe" className="about-section">
            <div className="about-section-content-box">
                <div className="about-contianer">
                    <h2 className="about-section-heading">About <span className="about-section-sub-color">Me</span></h2>
                </div>
                <div className="about-section-container">
                    <div className="hero-section-img">
                        <img src="./img/about_img.png" alt="About Me Img"/>
                    </div>
                    <p className="about-section-description">
                        I am a Full-Stack Software Engineer who loves bridging the gap between robust backend systems and
                        seamless user experiences. Over the last six years at General Motors, I've progressed from a
                        Frontend Software Developer to a Software Engineer II,
                        managing core data platform services and API integrations for hundreds of manufacturing plants.
                        I specialize in Java, .NET, React, and GraphQL, with a heavy focus on building test automation
                        frameworks that ensure application stability at scale.
                        <br />I hold an M.S. in Software Development from Boston University and a B.S. in Informatics
                        (with a minor in Computer Science and a cognate in Game Design) from Indiana University.
                        This unique background sparked a deep fascination with how complex systems are architected and how
                        users interact with them. Whether I'm mapping out clean software design patterns for an enterprise
                        API or exploring interactive mechanics in video game design, I love the challenge of turning
                        intricate logic into intuitive, high-performance digital experiences.
                        When I’m not coding, you can find me running with local clubs, playing volleyball, or volunteering
                        in the Austin community.
                    </p>
                </div>
            </div>
        </section>
    )
}