import React from 'react'
import './gravity.css'

function GravityAnimation(props) {
    return (
        <div className="mainGravityX">
            <div className="sceneG">
                <div className="floorG"></div>
                <div 
                    className={
                        (props.orangeRelease === 'earth') || (props.bothRelease === 'earth') ? "gravity-ball orange-earth" 
                        :

                        (props.orangeRelease === 'moon') || (props.bothRelease === 'moon') ? "gravity-ball moon"
                        :

                        (props.orangeRelease === 'mars') || (props.bothRelease === 'mars') ? "gravity-ball mars"
                        :

                        (props.orangeRelease === 'venus') || (props.bothRelease === 'venus') ? "gravity-ball venus"
                        :
                         
                        "gravity-ball"
                        }>                        
                </div>
                <div 
                    className={
                        (props.pinkRelease === 'earth')|| (props.bothRelease === 'earth') ? "gravity-ball-two pink-earth" 
                        :

                        (props.pinkRelease === 'moon') || (props.bothRelease === 'moon') ? "gravity-ball-two moon"
                        :

                        (props.pinkRelease === 'mars') || (props.bothRelease === 'mars') ? "gravity-ball-two mars"
                        :

                        (props.pinkRelease === 'venus') || (props.bothRelease === 'venus') ? "gravity-ball-two venus"
                        :
                        
                         "gravity-ball-two"}></div>
            </div>
        </div>
    )
}

export default GravityAnimation
