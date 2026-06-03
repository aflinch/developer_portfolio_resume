import React from 'react';
import { Github } from "lucide-react";

// Added showTags and showLink as optional props with default values of true
function ProjectCard({ item, showTags = true, showDescription= true, showLink = true}) {
    return (
        <div className="projects-section-card">
            <div className="projects-section-img">
                <img src={item.src} alt="Project Img" />
            </div>
            <div className="projects-section-card-content">
                {showTags && item.tags && (
                    <div className="projects-section-card-tags-container">
                        {item.tags.map((tag, tagIndex) => (
                            <span className="projects-section-card-tag" key={tagIndex}>
                                {tag}
                            </span>
                        ))}
                    </div>
                )}

                <h4 className="projects-section-card-title">{item.title}</h4>

                {showDescription && item.description && (
                    <p className="projects-section-card-description">{item.description}</p>
                )}

                {/* Condition checks if showLink is true and url is valid */}
                {showLink && item.url && item.url !== "none" && (
                    <a href={item.url} target="_blank" rel="noreferrer" className="project-card-link">
                        <Github /> View in Github
                    </a>
                )}
            </div>
        </div>
    );
}

export default ProjectCard;
