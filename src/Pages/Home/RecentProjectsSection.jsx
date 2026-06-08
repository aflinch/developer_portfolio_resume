import personal from '../../data/personal.js';
import React from "react";
import ProjectCard from "../../Components/ProjectCard";

export default function RecentProjectsSection() {

    const featuredProjects = personal?.projects
        ? [...personal.projects].sort((a, b) => b.id - a.id).slice(0, 4)
        : [];

    return (
        <section className="projects-section" id="recentProjects">
            <div className="projects-section-content">
                <div className="projects-container">
                    <div className="section-heading-row">
                        <h2 className="projects-section-heading">PROJECTS<span className="sub-color">.</span></h2>
                        <hr className="title-divider" />
                    </div>
                    <h3 className="projects-section-title">
                        Featured full-stack and software engineering <span className="sub-color">work.</span>
                    </h3>
                </div>
                <div className="projects-section-container">
                    {featuredProjects.map((item) => (
                        <ProjectCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
}
