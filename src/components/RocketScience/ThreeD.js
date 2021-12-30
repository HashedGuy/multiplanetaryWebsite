import React, {useRef} from 'react'
import { Link } from 'react-router-dom'
import Gravity from './Gravity'

function ThreeD(props) {
   
        const myRef = useRef(null)
     
        const executeScroll = () => {
            myRef.current.scrollIntoView() 
        }  
        // run this function from an event handler or an effect to execute scroll 
     
    return (
        <>
        <div className={props.type === 'main-page' ? "mainThreeD mainThreeDMP" : "mainThreeD"}>
            {props.type === 'main-page' ?
                <div className="rsMP"> 
                <h1>It's a rocket science!</h1>
                <Link to="./rocketscience" className="btn">start with gravity</Link>
                <p className="section-info">We'll try to learn more about space by applying basic physics concepts and humble animations.</p>
                
                </div>
                
                :
                
                <div className="titleRS">
                    <h1>Let's start with gravity</h1>
                    <div className="gravity-chevron"><a onClick={executeScroll}>&#8964;</a></div>
                </div>
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
                <div  className="ball"></div>                           
            </div>
            {props.type === 'main-page' ? '' : 
                <div className="titleRS">
                    <h1>Let's start with gravity</h1>
                    <div className="gravity-chevron"><a onClick={executeScroll}>&#8964;</a></div>
                </div>}
            
        </div>
        {props.type ==='main-page' ? '' :
        <>
            <div ref={myRef}></div>
            <Gravity/>
        </>
            }
        </>
    )
}

export default ThreeD
