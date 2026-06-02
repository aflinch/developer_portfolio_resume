import personal from '../../data/personal.js';
import React from "react";
import ProjectCard from "../../Components/ProjectCard";

export default function RecentProjects() {

    return (
        <section className="projects-section" id="recentProjects">
            <div className="projects-section-content">
                <div className="projects-contianer">
                    <div className="section-heading-row">
                        <h2 className="projects-section-heading">PROJECTS<span className="sub-color">.</span></h2>
                        <hr className="title-divider" />
                    </div>
                    <h3 className="projects-section-title">
                        Featured full-stack and software engineering <span className="sub-color">work.</span>
                    </h3>
                </div>
                <div className="projects-section-container">
                    {personal?.projects
                        ?.toSorted((a, b) => b.id - a.id)
                        ?.slice(0, 3)
                        .map((item) => (
                            <ProjectCard item={item} />
                    ))}
                </div>
            </div>
        </section>
    )
}
