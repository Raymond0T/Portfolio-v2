import React from 'react';
import './skillChoice.css';

function SkillChoice({text, logo}){
    return(
        <div>
            <img className="logo-style" src={logo} alt=""/>
            <h1 className="logo-text">{text}</h1>
        </div>
    );
}

export default SkillChoice;