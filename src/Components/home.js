import React from 'react';
import heroImg from '../icons/hero.jpg'
import './home.css'


function Home(){
    return(
        <div>
            <div className="home-container">
                <img id="hero-background" src={heroImg} />
                <div className="hero-content">
                    <h1> 
                        Software Engineer
                    </h1>
                    <p>Learn about my projects and experiences</p>
                    <a href="#experience-container">
                        <button className="hero-btn hero-btn-font">Learn Now</button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Home;