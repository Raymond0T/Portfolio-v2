import React from 'react';
import './record.css';
import githubIcon from '../icons/github-btn-icon.png';

function Record({title, detail, framework, image, style, link, alter, btnClass}){
    

    return(
        <div className="record-card">
            <img src= {image} alt={alter}/>
            <h1 className={style}>{title}</h1>
            <p> <i><b>Description:</b></i> {detail} </p>
            <p style={{color:"green"}}> <i><b>{framework}</b></i></p>
            <a href={link} target="_blank">
                <button className={btnClass}>
                    <img className="git-btn-icon" src={githubIcon}/>
                    Github
                </button>
            </a>
        </div>
    );
}

export default Record;