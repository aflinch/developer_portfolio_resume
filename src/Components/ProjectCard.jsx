import React from 'react';
import {Github} from "lucide-react";

function ProjectCard({ item }) {

    return(
        <div className="projects-section-card" key={item.id} >
            <div className="projects-section-img">
                <img src={item.src} alt="Project Img" />
            </div>
            <div className="projects-section-card-content">
                <div className="projects-section-card-tags-container">
                    {item.tags.map((tag, tagIndex) => (
                        <span className="projects-section-card-tag" key={tagIndex}>
                            {tag}
                        </span>
                    ))}
                </div>
                <h4 className="projects-section-card-title">{item.title}</h4>
                <p className="projects-section-card-description">{item.description}</p>
                {item.url && item.url !== "none" && (
                    <a href={item.url} target="_blank" rel="noreferrer" className="project-card-link">
                        <Github /> View in Github
                    </a>
                )}
            </div>
        </div>
    )
}

export default ProjectCard;
