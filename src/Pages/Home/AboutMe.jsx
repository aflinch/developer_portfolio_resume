
export default function AboutMe() {

    return (
        <section id="aboutMe" className="about-section">
            <div className="about-section-content">
                <div className="about-container">
                    <h2 className="about-section-heading">About <span className="about-section-sub-color">Me</span></h2>
                    <h3 className="about-section-title">A Passionate Developer</h3>
                </div>
                <div className="about-section-container">
                    <div className="about-section-img">
                        <img src="./img/about_img.png" alt="About Me Img"/>
                    </div>
                    <div className="about-section-content-column">
                        <div className="about-section-info">
                            <h3 className="about-section-description-title">Bio</h3>
                            <p className="about-section-description">
                                I am a Full-Stack Software Engineer who loves bridging the gap between robust backend systems and
                                seamless user experiences. Over the last six years at General Motors, I've progressed from a
                                Frontend Software Developer to a Software Engineer II, managing core data platform services and
                                API integrations for hundreds of manufacturing plants. I specialize in Java, .NET, React, and GraphQL,
                                with a heavy focus on building test automation frameworks that ensure application stability at scale.
                            </p>
                            <p className="about-section-description">
                                I hold an M.S. in Software Development from Boston University and a B.S. in Informatics
                                (with a minor in Computer Science and a cognate in Game Design) from Indiana University.
                                This unique background sparked a deep fascination with how complex systems are architected and how
                                users interact with them. Whether I'm mapping out clean software design patterns for an enterprise
                                API or exploring interactive mechanics in video game design, I love the challenge of turning
                                intricate logic into intuitive, high-performance digital experiences.
                            </p>
                            <p className="about-section-description">
                                When I’m not coding, you can find me running with local clubs, playing volleyball, or volunteering
                                in the Austin community.
                            </p>
                        </div>
                        <div className="about-experience-section">
                            <span>
                                <h2 className="about-experience">5+</h2>
                                Years of Education
                            </span>
                            <span>
                                <h2 className="about-experience">6+</h2>
                                Years of Experience
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}