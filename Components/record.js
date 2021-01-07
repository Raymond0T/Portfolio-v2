import React from 'react';
import './record.css';
import tempImg from './tempImage.jpg';
import githubIcon from '../icons/github-btn-icon.png';

function Record({text}){
    return(
        <div className="record-card">
            <img src={tempImg}/>
            <h1 className="">Project Manager</h1>
            <p> <i><b>Description:</b></i> {text} </p>
            <p> <i><b>function:</b></i> This is the function</p>
            <button>
                <img className="git-btn-icon" src={githubIcon}/>
                Github</button>
        </div>
    );
}

export default Record;