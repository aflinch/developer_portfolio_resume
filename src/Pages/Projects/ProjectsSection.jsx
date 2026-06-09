import React from "react";
import personal from "../../data/personal.json";
import ProjectCard from "../../Components/ProjectCard";

export default function RecentProjectsSection() {

    const sortedProjects = personal?.projects
        ? [...personal.projects].sort((a, b) => b.id - a.id)
        : [];

    return (
        <section id="projectSection" className="all-projects-section">
            <div className="all-projects-section-content">
                <div className="all-projects-container">
                    <div className="section-heading-row">
                        <h2 className="all-projects-section-heading">PROJECTS<span className="sub-color">.</span></h2>
                        <hr className="title-divider" />
                    </div>
                    <h3 className="all-projects-section-title"><span className="sub-color">Concepts </span> Made Real</h3>
                </div>
                <div className="projects-section-container">
                    {sortedProjects.map((item) => (
                        <ProjectCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
}
