import React from 'react';
import './socialSelection.css';


function SocialSelection({logo, text, alt, link}){
    return(
        <div>
            <a href={link} target="_blank" className="social-select-container">
                <img src={logo} alt={alt}/>
                <h1>{text}</h1>
            </a>
        </div>
    );
}

export default SocialSelection;