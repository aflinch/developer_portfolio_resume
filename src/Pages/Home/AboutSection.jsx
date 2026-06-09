import React from "react";
import data from '../../data/index.json';
import info from '../../data/personal.json';
import {NavLink} from "react-router-dom";

export default function AboutSection() {
    const totalSkillsCount = data?.skills?.length || 0;
    const totalProjectsCount = info?.projects?.length || 0;

    return (
        <section id="aboutMe" className="about-section">
            <div className="about-section-content">
                <div className="about-container">
                    <div className="section-heading-row">
                        <h2 className="about-section-heading">ABOUT<span className="sub-color">.</span></h2>
                        <hr className="title-divider" />
                    </div>
                    <h3 className="about-section-title">A Passionate <span className="sub-color">Developer</span></h3>
                </div>

                <div className="about-section-content-column">
                    <div className="about-experience-section">
                        <div className="stat-box">
                            <h2>6+</h2>
                            <p>Years of Education</p>
                        </div>
                        <div className="stat-box">
                            <h2>6+</h2>
                            <p>Years of Experience</p>
                        </div>
                        <div className="stat-box">
                            <h2>{totalSkillsCount}+</h2>
                            <p>Technical Skills</p>
                        </div>
                        <div className="stat-box">
                            <h2>{totalProjectsCount}+</h2>
                            <p>Projects</p>
                        </div>
                    </div>

                    <div className="about-info-section">
                        <div className="about-info-block">
                            <h3>BIO</h3>
                            <p>
                                I'm a software engineer who enjoys building applications that are both reliable behind the
                                scenes and intuitive for the people who use them. Since my six years at General Motors, I
                                have worked across the full stack, from modern web interfaces to backend services and enterprise data platforms.
                            </p>
                            <p>
                                What I enjoy most about software development is solving complex problems, improving systems,
                                and continuously learning new technologies. Whether I'm developing APIs, building React applications,
                                or automating testing workflows, I strive to create solutions that are scalable, maintainable,
                                and deliver real value to users.
                            </p>
                            <p>
                                I'm especially interested in software architecture, developer productivity, and the ways
                                emerging technologies can help teams build better products.
                            </p>
                            <NavLink
                                className="about-info-link"
                                to="/Experience">
                                LEARN MORE
                            </NavLink>
                        </div>


                        <div className="about-info-block">
                            <h3>BACKGROUND</h3>
                            <p>
                                My path into software engineering began at Indiana University, where I studied Informatics,
                                Computer Science, and Game Design. That blend of technical problem-solving and creative
                                thinking continues to influence how I approach development today. I later earned a Master
                                of Science in Software Development from Boston University to deepen my knowledge of software
                                engineering principles and modern development practices.
                            </p>
                            <p>
                                Outside of work, I enjoy designing and developing games, exploring new technologies, running
                                with local groups, and staying involved in the Austin community. Whether I'm working on a
                                personal project or learning a new framework, I enjoy creating things that challenge me to
                                grow as both a developer and a problem solver.
                            </p>
                            <NavLink
                                className="about-info-link"
                                to="/Projects">
                                BROWSE PROJECTS
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
