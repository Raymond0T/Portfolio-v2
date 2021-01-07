import React from 'react';
import './experience.css';
import Record from './record.js';
import Data from './expData.json';
import dummy from './logo.png';


function Experience(){

    /**
     * 
     { Data.map(post => {
                    return(
                        <div key={post.id}>
                        <h1 className={post.class}> {post.Name}</h1>
                        <img src={post.image}/>
                        </div>)
                    })
                }
     */
    return(
        <div id="experience-container">
            <h1>Experience</h1>
            <div className="record-container">
                <Record text="This will give us appledfaf dfaThis will give us appledfaf dfaThis will give us appledfaf dfaThis will give us aThppledfaf dfaThis will give us appledfaf dfaThis will give us appledfaf dfaThis will give us appledfaf dfaThis will give us appledfaf dfaThis will give us appledfaf dfa"/>
                <Record />
                <Record />
                <Record />

            </div>
        </div>
    );
}

export default Experience;