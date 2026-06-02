import data from '../../data/index.json';
import SkillsModel from '../../Components/SkillsModel';
import React, {useState} from "react";
import {
    FaJava,
    FaPython,
    FaReact,
    FaDatabase,
    FaGitAlt,
    FaHtml5,
    FaCss3Alt,
    FaPhp,
    FaLaravel,
    FaAngular,
    FaUnity
} from "react-icons/fa";
import {
    SiPostgresql,
    SiJavascript,
    SiGraphql,
    SiDotnet,
    SiSpringboot,
    SiTypescript,
    SiCplusplus
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";

export default function SkillsSection() {
    const [showModel, setShowModel] = useState(false);
    const [selectedSkill, setSelectedSkill] = useState(null);

    const iconMap = {
        // Backend
        "Java": FaJava,
        "C#": TbBrandCSharp,
        "GraphQL": SiGraphql,
        "SQL": FaDatabase,
        "PostgreSQL": SiPostgresql,
        "Python": FaPython,
        "C++": SiCplusplus,
        "PHP": FaPhp,

        // Frameworks
        "SpringBoot": SiSpringboot,
        ".NET": SiDotnet,
        "Laravel": FaLaravel,
        "Angular": FaAngular,

        // Frontend
        "React": FaReact,
        "JavaScript": SiJavascript,
        "HTML": FaHtml5,
        "CSS": FaCss3Alt,
        "TypeScript": SiTypescript,

        // Tools
        "Git": FaGitAlt,
        "Unity": FaUnity
    };

    return (
        <section className="skills-section" id="mySkills">
            <div className="skills-section-content">
                <div className="skills-contianer">
                    <div className="section-heading-row">
                        <h2 className="skills-section-heading">SKILLS<span className="sub-color">.</span></h2>
                        <hr className="title-divider" />
                    </div>
                    <h3 className="skills-section-title"><span className="sub-color">Expertise</span> in Action</h3>
                </div>
                <div className="skills-section-container">
                    {data?.skills?.map((item, index) => {
                        const IconComponent = iconMap[item.title];

                        return (
                            <div className="skills-section-card" key={index} onClick={() => {
                                setSelectedSkill(item);
                                setShowModel(true);
                            }}>
                                <div className="skills-section-card-content">
                                    <h3 className="skills-section-card-title">{IconComponent ? <IconComponent /> : null} {item.title}</h3>
                                    <p className="skills-section-card-description">{item.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
                {showModel && <SkillsModel
                    skill={selectedSkill}
                    onClose={() => {
                        setShowModel(false);
                        setSelectedSkill(null);
                    }}
                />}
            </div>
        </section>
    );
}
