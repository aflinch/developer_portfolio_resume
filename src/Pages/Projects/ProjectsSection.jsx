import React from "react";
import personal from "../../data/personal";
import ProjectCard from "../../Components/ProjectCard";

export default function ContactSection() {

    return (
        <section id="projectSection" className="all-projects-section">
            <div className="projects-section-content">
                <div className="projects-contianer">
                    <div className="section-heading-row">
                        <h2 className="all-projects-section-heading">PROJECTS<span className="sub-color">.</span></h2>
                        <hr className="title-divider" />
                    </div>
                    <h3 className="all-projects-section-title"><span className="sub-color">Concepts </span> Made Real</h3>
                </div>
                <div className="projects-section-container">
                    {personal?.projects
                        ?.sort((a, b) => b.id - a.id)
                        .map((item) => (
                            <ProjectCard item={item} />
                        ))}
                </div>
            </div>
        </section>
    )
}