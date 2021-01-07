import React, { useState } from 'react';
import './nav.css';
import defaultLogo from './logo.png';



function Nav(){

    const [hamburger, setHamburger] = useState(true);

    let openSwitch = () => setHamburger(!hamburger);
    let menuClose = () => setHamburger(true);

    console.log(hamburger);
    return(
        <div className="nav-container">
            <div className="nav-bar">
                <img id="home-logo" src={defaultLogo} alt="logo"/>
                <ul className={hamburger ? "nav-tabs close" : "nav-tabs"} onClick={menuClose}>
                    <a href="#hero-background" className="nav-List" onClick={menuClose}>
                        <li>Home</li>
                    </a>
                    <a href="#skill-container" className="nav-List" onClick={menuClose}>
                        <li>Skills</li>
                    </a>
                    <a href="#" className="nav-List" onClick={menuClose}>
                        <li>Projects</li>
                    </a>
                    <a href="#" className="nav-List" onClick={menuClose}>
                        <li>Contact</li>
                    </a>
                </ul>

                <div className="hamburger-menu-container"  onClick={openSwitch}>
                    <div className={hamburger ? 'hamburger-menu' : 'hamburger-menu-open'}>
                        <span class="first-span"></span>
                        <span class="second-span"></span>
                        <span class="third-span"></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Nav;