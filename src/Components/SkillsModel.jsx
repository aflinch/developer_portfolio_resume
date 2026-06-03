import React from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

function SkillsModel({ skill, iconComponent, onClose }) {
    const IconComponent = iconComponent;

    return createPortal(
       <div className="modal-overlay" onClick={onClose}>
           <div className="modal-content" onClick={(e) => e.stopPropagation()}>
               <button className="modal-close" onClick={onClose}><X /></button>
               <div className="modal-body">
                   <div className="model-header-section">
                       <h3>{iconComponent ? <IconComponent /> : null} {skill.title}</h3>
                       <p className="skills-section-card-progress-num">{skill.level}%</p>
                   </div>
                   <div className="skills-section-card-progress-bar">
                       <div className="skills-section-card-progress" style={{ width: `${skill.level}%` }}></div>
                   </div>
                   <p className="model-description">{skill.description}</p>
               </div>
           </div>
       </div>,
       document.body
    )
}

export default SkillsModel;
