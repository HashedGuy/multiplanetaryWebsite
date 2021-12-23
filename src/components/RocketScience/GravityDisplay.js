import React, {useState, useEffect, useRef} from 'react'
import GravityAnimation from './GravityAnimation'
import {BounceLoader, BeatLoader} from 'react-spinners'
import { MathJax, MathJaxContext } from "better-react-mathjax"

function GravityDisplay(props) {
    const [pinkRelease, setPinkRelease] = useState(false)
    const [orangeRelease, setOrangeRelease] = useState(false)
    const [bothRelease, setBothRelease] = useState(false)
    const [reboost, setReboost] = useState(false)
    const [reboostLoading, setReboostLoading] = useState(false)
    const [showWhy, setShowWhy] = useState(true)
    const [whyFaster, setWhyFaster] = useState(false)
    const [whyFasterX, setWhyFasterX] = useState(false)
    const [count, setCount] = useState(3)

    const restartFunc = () => {
        setPinkRelease(false)
        setOrangeRelease(false)
        setBothRelease(false)
        setReboost(false)
        setReboostLoading(false)
    }
    

      
    const timerRef = useRef(null);

    const reboostFunc = () => {
        restartFunc()
        setReboost(props.id)
        setReboostLoading(`Reboost starting soon ...`)
        // timerRef.current = setInterval(() => setReboostLoading(`...`), 500)
        timerRef.current = setTimeout(() => setReboostLoading(`Engine fired!🔥`), 3000)
        timerRef.current = setTimeout(() => setReboostLoading('Reboost complete.'), 11000) 
        timerRef.current = setTimeout(() => setReboostLoading(false), 15000)
        timerRef.current = setTimeout(() => restartFunc(), 15000) 
        
          
    }


    useEffect(() => {
        restartFunc()
    }, [props.id]) 
    return (
        <div className="gravity-display">
            <h3 className="reboost-message">{reboostLoading}</h3>
            <a className="btn release" onClick={() => setOrangeRelease(props.id)}>Drop orange ball</a>                    
            <a className="btn release" onClick={() => setBothRelease(props.id)}>Drop both</a>
            <a className="btn release" onClick={() => setPinkRelease(props.id)}>Drop green ball</a>
            <a className="btn release restart-btn" onClick={restartFunc}>Restart</a>
            {props.id === 'iss' ? 
            <a 
                className={reboostLoading ? "btn release" : "btn release reboost-btn"} 
                onClick={reboostFunc}>Reboost</a> : ''
            }

            {/* {reboost === 'iss' ? <p>Reboost starts in {count}</p> : ''} */}

            <GravityAnimation 
                pinkRelease = {pinkRelease}  
                orangeRelease = {orangeRelease}  
                bothRelease = {bothRelease}
                id = {props.id}
                reboost = {reboost}
            />
            <div className="queriesG">
                <a className="btn btn-query" onClick={()=>setShowWhy(!showWhy)}>
                    {props.id === 'earth' ? "Why balls fall at all" 
                    :
                    
                    props.id === 'moon' ? "Why balls fall at the same time"
                    :
            
                    props.id === 'mars' ? "Why balls fall faster than moon"
                    :
            
                    props.id === 'iss' ? "What's reboost"
                    :
            
                    ''}
                </a>
            
               <div style={showWhy ? {display:'block'} : {display:'none'}}>
                    {props.id === 'earth' ? 
                    <>
                        <p>Because of many reasons, but what concerns us the most here is the greater pulling force of Earth's gravity.</p>
                        <video width="640px" height="480px" controls>
                          <source src="./video/Vectors.mp4" type="video/mp4"/>
                          {/* <source src="movie.ogg" type="video/ogg"/> */}
                        Your browser does not support the video tag.
                        </video> 
                        
                        {/* <MathJaxContext className="calculations">
                            <MathJax 
                                config={{ "HTML-CSS": { scale: 800 }}}
                            >
                                    {"\\(F \= G\\frac{m1m2}{r^2}\\)"}
                            </MathJax>
                        </MathJaxContext> */}
                        {/* <br/> */}
                        <p className="question"><a onClick={()=>setWhyFaster(!whyFaster)}>Ok, why orange ball falls faster?</a></p>
                        
                        <p style={whyFaster ? {display: 'block'} : {display: 'none'}}>Unlike other planets, the Earth has the air! So air resistance affects the objects' falling speed. Two objects with the same mass, the one with less air resistance shape will fall faster. <br/><br/>However, our balls have the same perfect circle shape. Here comes another rule: two objects, with the same shape, heavier will fall faster because it provides more net force against the air, like our <span className="orange-ball"></span> ball.</p>
                        <video width="640px" height="480px" controls>
                          <source src="./video/SVGs.mp4" type="video/mp4"/>
                          {/* <source src="movie.ogg" type="video/ogg"/> */}
                        Your browser does not support the video tag.
                        </video> 
                    </>
                    :
                    
                    props.id === 'moon' ? 
                    <>
                        <p>Because of the absence of the air. We've seen from the Earth animation how air resistance slowed down the fall of <span className="blue-ball"></span>ball. The moon doesn't have any air or an atmosphere. <br/><br/> 
                           Luckily, we have <a href="https://www.youtube.com/watch?v=oYEgdZ3iEKA" target="_blank">a real footage</a> of the free fall experiement of a hammer and a feather on the Moon conducted by the NASA Apollo Mission.</p>
                       
                        <p className="question"><a onClick={()=>setWhyFaster(!whyFaster)}>Would balls bounce higher or more on the Moon than they do on the Earth?</a></p>
                        
                        <p style={whyFaster ? {display: 'block'} : {display: 'none'}}>The answer is it depends. Not having air resistance might make us think of more bounces on the Moon but bouncing mainly depends on the elasticity of the ground. For instance, the wooden floor on the Earth would bounce the object more than the Moon's dusty ground.</p>
                        <video width="640px" height="480px" controls>
                          <source src="./video/SVGsMoon.mp4" type="video/mp4"/>
                          {/* <source src="movie.ogg" type="video/ogg"/> */}
                        Your browser does not support the video tag.
                        </video> 
                    </>
                    :
                    
                    props.id === 'mars' ?
                    <>
                    <p>Because the Martian gravity is stronger than on the Moon.</p>
                    <p className="question"><a onClick={()=>setWhyFaster(!whyFaster)}>Martian air resistance slows down the objects' fall as well?</a></p>
                        
                        <p style={whyFaster ? {display: 'block'} : {display: 'none'}}>Despite the fact Mars has an atmosphere, the air density is so low that it would not affect the falling speed of the objects dramatically like it does on the Earth.</p>
                    </>
                    :
                    
                    props.id === 'iss' ?
                    <>
                    <p>International Space Station orbits in an altitude where there's almost no air, but there're still some tiny amount of atomic oxygen which in collision with the spacecraft slows down the ISS and causes a loss of altitude, around 90-100m every day. Therefore, once in a month the ISS reboosts (i.e. firing its engines) to adjust its altitude. <br/><br/>
                        During reboost, the objects that stay at rest (but actually they're in free fall) start to move to the opposite direction of the spacecraft's velocity. When the reboost is complete, the objects are again stop to 'move'.
                        Luckily, there're enough real shootage of the ISS reboost in YouTube. Here's <a target="_blank" href="https://www.youtube.com/watch?v=sI8ldDyr3G0">my fav one</a> by NASA astronaut Jeff Williams.</p>
                  
                    <p className="question"><a onClick={()=>setWhyFaster(!whyFaster)}>If the balls are in free fall inside the ISS why do they float?</a></p>
                    <p style={whyFaster ? {display: 'block'} : {display: 'none'}}>Whenver we watch the ISS videos, we see objects, astronauts floating, like they're in zero-gravity. That's not true thou. The ISS itself, and everything inside it experience 90% of the Earth gravity but they manage not to hit the Earth thanks to their enormous velocity (7.6km per second). This scenario is also called 'microgravity'.</p>
                    
                    <p className="question"><a onClick={()=>setWhyFasterX(!whyFasterX)}>Then why balls are not at 100% rest?</a></p>
                    <p style={whyFasterX ? {display: 'block'} : {display: 'none'}}>To imitiate the real ISS environment, when you drop the balls in our animation, you can see tiny drifts up and down or left and right. This is usually caused by the ventilation working inside the spacecraft.</p>
                    </>

                    :
                    
                    ''}
                    </div>
                </div>
            </div>

    )
}

export default GravityDisplay
