import React from 'react';
import { createPortal } from 'react-dom';
import {X} from 'lucide-react';
import personal from "../data/personal";
import ProjectCard from "./ProjectCard";
import {NavLink} from "react-router-dom";

function SkillsModal({ skill, iconComponent, onClose }) {
    const IconComponent = iconComponent;

    return createPortal(
       <div className="modal-overlay" onClick={onClose}>
           <div className="modal-content" onClick={(e) => e.stopPropagation()}>
               <button className="modal-close" onClick={onClose}><X /></button>
               <div className="modal-body">
                   <div className="modal-header-section">
                       <h3>{iconComponent ? <IconComponent /> : null} {skill.title}</h3>
                   </div>
                   <div className="skills-progress-bar">
                       <div className="skills-progress" style={{ width: `${skill.level}%` }}></div>
                   </div>
                   <p>{skill.description}</p>
                   <div className="projects-skill-modal">
                       {personal?.projects
                           ?.filter((item) => item.tags?.includes(skill.title))
                           ?.sort((a, b) => b.id - a.id)
                           ?.slice(0, 4)
                           .map((item) => (
                               <NavLink
                                   className="modal-project-card"
                                   to="/MyProjects">
                                   <ProjectCard item={item} showTags={false} showDescription={false} showLink={false}/>
                               </NavLink>
                           ))}
                   </div>
               </div>
           </div>
       </div>,
       document.body
    )
}

export default SkillsModal;
