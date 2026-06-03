import data from '../../data/index.json';
import SkillsModal from '../../Components/SkillsModal';
import React, {useState} from "react";
import {
    FaJava, FaPython, FaReact, FaDatabase, FaGitAlt,
    FaHtml5, FaCss3Alt, FaPhp, FaLaravel, FaAngular,
    FaUnity, FaJira, FaGolang
} from "react-icons/fa6";
import {
    SiPostgresql, SiJavascript, SiGraphql, SiDotnet,
    SiSpringboot, SiTypescript, SiCplusplus, SiMongodb,
    SiUnrealengine
} from "react-icons/si";
import { VscAzure, VscSymbolMethod} from "react-icons/vsc";

export default function SkillsSection() {
    const [showModel, setShowModel] = useState(false);
    const [selectedSkill, setSelectedSkill] = useState(null);
    const [activeCategory, setActiveCategory] = useState("all");

    const iconMap = {
        // Backend
        "Java": FaJava,
        "C#": VscSymbolMethod,
        "GraphQL": SiGraphql,
        "SQL": FaDatabase,
        "PostgreSQL": SiPostgresql,
        "Python": FaPython,
        "C++": SiCplusplus,
        "PHP": FaPhp,
        "GO": FaGolang,

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
        "Unity": FaUnity,
        "Unreal Engine": SiUnrealengine,
        "MongoDB": SiMongodb,
        "Azure": VscAzure,
        "Jira": FaJira
    };

    const categories = ["all", "frontend", "backend", "framework", "tool"];

    const filteredSkills = data?.skills?.filter(
        skill => activeCategory === "all" || skill.category === activeCategory);

    return (
        <section className="skills-section" id="mySkills">
            <div className="skills-section-content">
                <div className="skills-container">
                    <div className="section-heading-row">
                        <h2 className="skills-section-heading">SKILLS<span className="sub-color">.</span></h2>
                        <hr className="title-divider" />
                    </div>
                    <h3 className="skills-section-title"><span className="sub-color">Expertise</span> in Action</h3>
                </div>
                <div className="skills-section-filter">
                    {categories.map((category, index) => (
                        <button className={activeCategory === category ? "skills-button skills-active-button" : "skills-button"}
                                key={index}
                                onClick={() => setActiveCategory(category)}>
                            {category}
                        </button>
                    ))}
                </div>
                <div className="skills-section-container">
                    {filteredSkills
                        ? [...filteredSkills]
                            .sort((a, b) => b.level - a.level)
                            .map((item, index) => {
                        const IconComponent = iconMap[item.title];

                        return (
                            <div className="skills-section-card" key={index} onClick={() => {
                                setSelectedSkill(item);
                                setShowModel(true);
                            }}>
                                <div className="skills-section-card-content">
                                    <h3 className="skills-section-card-title">{IconComponent ? <IconComponent /> : null} {item.title}</h3>
                                </div>
                                <div className="skills-progress-bar">
                                    <div className="skills-progress" style={{ width: `${item.level}%` }}></div>
                                </div>
                                <p>{item.level}%</p>
                            </div>
                        );
                    })
                    : null
                    }
                </div>
                {showModel && <SkillsModal
                    skill={selectedSkill}
                    iconComponent={iconMap[selectedSkill.title]}
                    onClose={() => {
                        setShowModel(false);
                        setSelectedSkill(null);
                    }}
                />}
            </div>
        </section>
    );
}
