import React from 'react';
import './social.css';
import SocialSelection from './socialSelection.js';
import gitLogo from '../icons/github-btn-icon.png';
import emailLogo from '../icons/email-icon.png';
import linkedLogo from '../icons/Linkedin-icon.png';




function Social(){
    return(
        <div id="social-container">
            <div className="social-section">
                <h1>Social</h1>
            </div>
            <div className="social-logo-container">
                <SocialSelection logo={gitLogo} text="Github" alt="github-logo" link="https://github.com/Raymond0T"/>
                <SocialSelection logo={linkedLogo} text="LinkedIn" alt="LinkedIn-logo" link="https://www.linkedin.com/in/raymond-t-795494163/"/>
                <SocialSelection logo={emailLogo} text="raymond8trau@gmail.com" alt="email-logo" link="https://www.google.com/gmail/about/#"/>
            </div>
            
        </div>
    );
}

export default Social;