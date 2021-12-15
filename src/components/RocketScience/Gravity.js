import React, {useState} from 'react'
import './gravity.css'
import GravityDisplay from './GravityDisplay'

function Gravity(props) {
   
    const [gravityLocation, setGravityLocation] = useState('earth')
    const [disclaimer, setDisclaimer] = useState(false)

   
    return (
        <div className="gravity">
            {/* <h1>Let's start with Gravity!</h1> */}
            {/* <p>We heard a lot about gravity from Newton's equations. We will come to that but let's first see how objects fall (if they do at all) in different space locations with humble animations.</p> */}
            <div className="gravity-sections">
                <div className="gravity-location">
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
                    {/* <a 
                        className={
                            gravityLocation === 'venus' ? "btn btn-gravity btn-gr-active" : "btn btn-gravity"}
                        onClick={() => setGravityLocation('venus')}>
                        Venus
                    </a> */}
                    <a 
                        className={
                            gravityLocation === 'iss' ? "btn btn-gravity btn-gr-active" : "btn btn-gravity btn-gr-not-active"}>
                        ISS (LEO)
                    </a>

                    <h1>We've got some balls!</h1>
                    <p>Green and orange. We will drop them from the altitude of 5m to the ground everywhere - on the Earth, Moon, Mars and even in International Space Station. Let's see if they're gonna fall at all.</p>
                    <br/>
                    <p><span className="blue-ball"></span> - is more like a tennis ball, lighter, 1/10 times (around 60gr) of the orange ball's mass (not weight!).</p>
                    <br/>
                    <p><span className="orange-ball"></span> - is more like a basketball, around 600gr. More mass compare to the green ball, and bigger in radius.</p>
                    <br/><br/>
                    <a onClick={()=>setDisclaimer(!disclaimer)}><span className="warning">&#x26A0; How accurate animations are</span></a>
                    {disclaimer ? <p className="disclaimer">Just to make it clear, I'm not a physicist or an astronomer, just a space enthusiast. So, I'm sure there might be some inaccuracy in my animations. Would be more than happy if any one of you notice them and let me know. Just contact me <a href="mailto:arbus@multiplanetary.website">here</a>.</p> : ''}
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

               gravityLocation === 'venus' ?
               <GravityDisplay
                            id="venus"
               />
               :

               ''}
            </div>
            
        </div>
    )
}

export default Gravity
