import React from "react";
import experience from "../../data/experience";
import Timeline from "../../Components/Timeline";

export default function ExperienceSection() {

    const sortedExperience = experience?.experience
        ? [...experience.experience].sort((a, b) => b.id - a.id)
        : [];

    return (
        <section id="experienceSection" className="experience-section">
            <div className="experience-section-content">
                <div className="experience-container">
                    <div className="section-heading-row">
                        <h2 className="experience-section-heading">EXPERIENCE<span className="sub-color">.</span></h2>
                        <hr className="title-divider" />
                    </div>
                    <h3 className="experience-section-title">Knowledge Built <span className="sub-color">Out</span></h3>
                </div>

                <div className="timeline-container">
                    <div className="custom-timeline">
                        {sortedExperience.map((item) => (
                            <Timeline key={item.id} item={item} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
