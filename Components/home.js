import React from 'react';
import heroImg from './hero.jpg'
import './home.css'
import About from './about.js';


function Home(){
    return(
        <div>
            <div className="home-container">
                <img id="hero-background" src={heroImg} />
                <h1> 
                    Software Developer
                </h1>
                <p>Connect with me on LinkedIn</p>
                <button className="hero-btn hero-btn-font">LinkedIn</button>
            </div>
        </div>
    );
}

export default Home;