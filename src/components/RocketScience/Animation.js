import React from 'react'

function Animation(props) {
    return (
        <div className="animation">
            {/* <h1>Lift off!</h1> */}
            <img 
                className= "rocket" 
                style= {props.activeAnimationX ? {opacity:.4} : {}} 
                src={`png/sn20.png`}
            />
            <img
                className="capsule" 
                style= {props.activeAnimation ? {opacity:.4} : {}} 
                src={`png/Dragon.png`}
            />
            {/* <h3>Yes blet</h3> */}
            
        </div>
    )
}

export default Animation
