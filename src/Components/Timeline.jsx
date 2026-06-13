import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';

function Timeline({ item }) {
    const iconMap = {
        "work": Briefcase,
        "school": GraduationCap
    }

    const IconComponent = iconMap[item.category];

    return (
        <div key={item.id } className="timeline-row">

            <div className="timeline-meta-column">
                <h3>{item.org}</h3>
                <h4>{item.start} - {item.end ?? "Present"}</h4>
                <h4>{item.location}</h4>
            </div>

            {/* COLUMN 2: CENTER TRACK (Vertical line segments & blue dot) */}
            <div className="timeline-track-column">
                <div className="node-dot"></div>
            </div>

            {/* COLUMN 3: RIGHT SIDE (The stretching descriptive card) */}
            <div className="timeline-card">
                <div className="timeline-card-title">
                    <h3>{IconComponent ? <IconComponent /> : null} {item.title}</h3>
                    <div className="projects-section-card-tags-container">
                        {item.tags.map((tag, tagIndex) => (
                            <span className="experience-section-card-tag" key={tagIndex}>
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="skills-progress-bar">
                    <div className="skills-progress" style={{ width: `${item.level || 0}%` }}></div>
                </div>
                <ul>
                    {item.description.split('\n').map((line, index) => (
                        <li key={index}>{line}</li>
                    ))}
                </ul>
            </div>

        </div>

    );
}

export default Timeline;