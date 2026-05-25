import personal from '../../data/personal.json';
import {useEffect, useState} from "react";
import SkillsModel from "../../Components/SkillsModel";

export default function RecentProjects() {
    const [showModel, setShowModel] = useState(false);
    const [selectedSkill, setSelectedProject] = useState(null);

    return (
        <section className="projects-section" id="recentProjects">
            <div className="projects-contianer">
                <h2 className="projects-section-heading">Recent <span className="projects-section-sub-color">Projects</span></h2>
                <p className="projects-section-description">
                    Here are some of my most recent projects
                    that highlight my experience in full-stack development and software engineering.
                </p>
            </div>
            <div className="skills-section-container">
                {personal?.projects
                    ?.toSorted((a, b) => b.id - a.id) // Sorts by ID, highest to lowest
                    ?.slice(0, 3)
                    .map((item, index) => (
                    <div className="projects-section-card" key={index} >
                        <div className="projects-section-img">
                            <img src={item.src} alt="Project Img" />
                        </div>
                        <div className="projects-section-card-content">
                            <h4 className="projects-section-card-title">{item.title}</h4>
                            <div className="projects-section-card-tags-container">
                                {item.tags.map((tag, tagIndex) => (
                                    <span className="projects-section-card-tag" key={tagIndex}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <p className="projects-section-card-description">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}