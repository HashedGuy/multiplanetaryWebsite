import React from 'react'
import { Link } from 'react-router-dom'

function Animation(props) {
    return (
        <>
        <div className={props.type === 'main-page' ? "animation animationM" : "animation"}>
        {props.type === "main-page" ? 
            <div className="animationTitle">
                <h1>Don't miss the launch!</h1> 
                <p>Feel like you're at the airport checking the flight table for departures or arrivals. But space airport...</p>
                <Link to="./flights" className="btn">Flights table</Link>
            </div>
                : ''
            }
            {props.type === 'main-page' ? 
            <img className="issMP" src={`png/issmodel.png`}/> : ""}
            <img 
                className= {props.type === "main-page" ? "rocket rocketM" : "rocket"} 
                style= {props.activeAnimationX ? {opacity:.4} : {}} 
                src={`png/sn20.png`}
            />
            <img
                className={props.type === "main-page" ? "capsule capsuleM" : "capsule"} 
                style= {props.activeAnimation ? {opacity:.4} : {}} 
                src={`png/Dragon.png`}
            />
            
            
        </div>
        
        </>
    )
}

export default Animation
