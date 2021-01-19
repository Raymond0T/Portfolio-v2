import React, { useState } from 'react';
import './record.css';
import githubIcon from '../icons/github-btn-icon.png';
import Modal from 'react-modal';

function Record({title, detail, framework, image, style, link, alter, btnClass, web}){
    
    const [screen, setScreen] = useState(false);

    function modalSwitch(){
        setScreen(!screen);
    }

    return(
        <div className="record-card">
            <Modal isOpen={screen} 
                onRequestClose={modalSwitch} 
                className="modal-container" 
                shouldCloseOnOverlayClick={true}
                overlayClassName="modal-overlay"
            > 
            <div className="modal-img">      
                <img src= {image} alt={alter}/>
            </div>
            </Modal>
            <img src= {image} alt={alter} onClick={modalSwitch}/>
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