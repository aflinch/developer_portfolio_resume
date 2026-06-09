import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import personal from "../data/personal.json";
import ProjectCard from "./ProjectCard";
import { NavLink } from "react-router-dom";

function SkillsModal({ isOpen, skill, iconComponent, onClose }) {
    const [animateIn, setAnimateIn] = useState(false);
    const [shouldRender, setShouldRender] = useState(false);

    const IconComponent = iconComponent;

    useEffect(() => {
        let timer;
        if (isOpen) {
            setShouldRender(true);
            timer = setTimeout(() => setAnimateIn(true), 20);
        } else {
            setAnimateIn(false);
            timer = setTimeout(() => setShouldRender(false), 400);
        }
        return () => clearTimeout(timer);
    }, [isOpen]);

    const [cachedSkill, setCachedSkill] = useState(null);
    useEffect(() => {
        if (skill) setCachedSkill(skill);
    }, [skill]);

    const activeSkill = isOpen ? skill : cachedSkill;

    if (!shouldRender || !activeSkill) return null;

    return createPortal(
        <div className={`modal-overlay ${animateIn ? 'active' : ''}`} onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}><X /></button>
                <div className="modal-body">
                    <div className="modal-header-section">
                        <h3>{iconComponent && activeSkill ? <IconComponent /> : null} {activeSkill.title}</h3>
                    </div>
                    <div className="skills-progress-bar">
                        <div className="skills-progress" style={{ width: `${activeSkill.level || 0}%` }}></div>
                    </div>
                    <p>{activeSkill.description}</p>
                    <div className="projects-skill-modal">
                        {personal?.projects
                            ?.filter((item) => item.tags?.includes(activeSkill.title))
                            ?.sort((a, b) => b.id - a.id)
                            ?.slice(0, 2)
                            .map((item, index) => (
                                <NavLink
                                    key={item.id || index}
                                    className="modal-project-card"
                                    to="/Projects">
                                    <ProjectCard item={item} showTags={false} showDescription={false} showLink={false}/>
                                </NavLink>
                            ))}
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
}

export default SkillsModal;