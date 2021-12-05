import React from 'react'
import { Link } from 'react-router-dom'

function ThreeD(props) {
    return (
        <div className={props.type === 'main-page' ? "mainThreeD mainThreeDMP" : "mainThreeD"}>
            {props.type === 'main-page' ?
                <div className="rsMP"> 
                <h1>It's a rocket science!</h1>
                <p className="rimuv">We'll try to learn more about space by applying basic physics concepts and humble animations </p>
                <Link to="./rocketscience" className="btn">Coming soon</Link>
                </div>
                
                :
                
                <div className="titleRS"><h1>Coming soon</h1></div>
                } 
            <div className={props.type ==='main-page' ? "scene sceneMP": "scene"}>
                <div className="floor"></div>
                <div className="cube">
                    <div className="front">F</div>
                    <div className="back">m</div>
                    <div className="left">g</div>
                    <div className="right">=</div>
                    <div className="top">
                        <div className="ballShadow"></div>
                    </div>
                    <div className="bottom"></div>
                </div>
                <div className="ball"></div>                           
            </div>
            
        </div>
    )
}

export default ThreeD
