import React, {useState} from 'react'
import './gravity.css'
import GravityDisplay from './GravityDisplay'
import {Link} from 'react-router-dom'

function Gravity(props) {
   
    const [gravityLocation, setGravityLocation] = useState('earth')
    const [disclaimer, setDisclaimer] = useState(false)

   
    return (
        <div className="gravity">
            <div className="gravity-sections">
                <div className="gravity-location">
                    <div className="locations">
                        <a 
                            className={
                                gravityLocation === 'earth' ? "btn btn-gravity btn-gr-active" : "btn btn-gravity"}
                            onClick={()=>setGravityLocation('earth')}>
                            Earth
                        </a>
                        <a 
                            className={
                                gravityLocation === 'moon' ? "btn btn-gravity btn-gr-active" : "btn btn-gravity"}
                            onClick={() => setGravityLocation('moon')}>
                            Moon
                        </a>
                        <a 
                            className={
                                gravityLocation === 'mars' ? "btn btn-gravity btn-gr-active" : "btn btn-gravity"}
                            onClick={() => setGravityLocation('mars')}>
                            Mars
                        </a>
                        <a 
                            className={
                                gravityLocation === 'iss' ? "btn btn-gravity btn-gr-active" : "btn btn-gravity"}
                                onClick={() => setGravityLocation('iss')}
                        >
                            ISS (LEO)
                        </a>
                    </div>
                    <div className="ball-info">
                        <h1>We've got some balls!</h1>
                        <p>Green and orange. We will drop them from the altitude of 5m to the ground everywhere - on the Earth, Moon, Mars and even in International Space Station. Let's see if they're gonna fall at all.</p>
                        <br/>
                        <p><span className="blue-ball"></span> - is closer to the mass of a tennis ball. It's mass is one tenth that of the orange ball.</p>
                        <br/>
                        <p><span className="orange-ball"></span> - it's mass is closer to that of a basket ball which is around 600 gram. It's mass and radius are greater than that of the green ball.</p>
                        <br/><br/>
                        <a onClick={()=>setDisclaimer(!disclaimer)}><span className="warning">&#x26A0; How accurate animations are</span></a>
                        {disclaimer ? <p className="disclaimer">Just to make it clear, I'm not a physicist or an astronomer, just a space enthusiast. So, I'm sure there might be some inaccuracy in my animations. Would be more than happy if any one of you notice them and let me know. Just contact me <Link to='/behindscenes'>here</Link>.</p> : ''}
                    </div>
                </div>

               {gravityLocation === 'earth' ? 
                <GravityDisplay 
                id="earth"
                />
               :

               gravityLocation === 'moon' ? 
               <GravityDisplay
                    id="moon"
               />
               :

               gravityLocation === 'mars' ?
               <GravityDisplay
                            id="mars"
               />
               :

               gravityLocation === 'iss' ?
               <GravityDisplay
                            id="iss"
               />
               :

               ''}
            </div>
            
        </div>
    )
}

export default Gravity
