import React from 'react';
import './skill.css';
import SkillChoice from './skillChoice.js';
import adobeIcon from '../icons/small_adobe_icon.png';
import cplusIcon from '../icons/small_c++_icon.png';
import cssIcon from '../icons/small_css_icon.png';
import htmlIcon from '../icons/small_html_icon.png';
import javaIcon from '../icons/small_java_icon.png';
import jsIcon from '../icons/small_js_icon.png';
import sqlIcon from '../icons/small_sql_icon.png';


function Skill(){
    return(
        <div id="skill-container">
            <h1> Skill </h1>
            <div className="logo-container">
                <SkillChoice logo={adobeIcon} text="Adobe"/>
                <SkillChoice logo={cplusIcon} text="C++"/>
                <SkillChoice logo={cssIcon} text="CSS"/>
                <SkillChoice logo={htmlIcon} text="HTML"/>
                <SkillChoice logo={javaIcon} text="Java"/>
                <SkillChoice logo={jsIcon} text="Javascript"/>
                <SkillChoice logo={sqlIcon} text="SQL"/>
            </div>
        </div>
    );
}

export default Skill;