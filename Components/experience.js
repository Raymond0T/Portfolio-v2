import React from 'react';
import './experience.css';
import Record from './record.js';
import ExpData from './expData.json';


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
                {ExpData.map(prop => {
                    return(
                        <Record key={prop.id} title={prop.Name} detail={prop.Description} 
                            framework={prop.skill} image={prop.image} alter={prop.alter} style={prop.class} link={prop.gitLink} btnClass={prop.btnClass}/>)
                    })
                }

            </div>
        </div>
    );
}

export default Experience;