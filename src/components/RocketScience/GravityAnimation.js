import React from 'react'
import './gravity.css'

function GravityAnimation(props) {
    return (
        <div className="mainGravityX">
            <div className={props.reboost ? "sceneG sceneISS" : "sceneG"}>
                <div 
                    className={
                            props.id === 'iss' ? "floorG floorISS" 
                            :

                            props.id === 'mars' ? "floorG floorMars"
                            :

                            props.id === 'moon' ? "floorG floorMoon"
                            :

                            "floorG"
                            
                        }
                >

                </div>
                <div 
                    className={
                        (props.orangeRelease === 'earth') || (props.bothRelease === 'earth') ? "gravity-ball orange-earth" 
                        :

                        (props.orangeRelease === 'moon') || (props.bothRelease === 'moon') ? "gravity-ball moon"
                        :

                        (props.orangeRelease === 'mars') || (props.bothRelease === 'mars') ? "gravity-ball mars"
                        :

                        (props.orangeRelease === 'iss') || (props.bothRelease === 'iss') ? "gravity-ball orange-iss"
                        :

                        (props.reboost === 'iss') ? "gravity-ball reboost-iss"
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

                        (props.pinkRelease === 'iss') || (props.bothRelease === 'iss') ? "gravity-ball-two green-iss"
                        :

                        (props.reboost === 'iss') ? "gravity-ball-two reboost-iss"
                        :
                        
                         "gravity-ball-two"}></div>
            </div>
        </div>
    )
}

export default GravityAnimation
