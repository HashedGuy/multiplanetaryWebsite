import React, {useState, useEffect} from 'react'
import GravityAnimation from './GravityAnimation'
import { MathJax, MathJaxContext } from "better-react-mathjax"

function GravityDisplay(props) {
    const [pinkRelease, setPinkRelease] = useState(false)
    const [orangeRelease, setOrangeRelease] = useState(false)
    const [bothRelease, setBothRelease] = useState(false)
    const [showWhy, setShowWhy] = useState(false)
    const [whyFaster, setWhyFaster] = useState(false)

    const restartFunc = () => {
        setPinkRelease(false)
        setOrangeRelease(false)
        setBothRelease(false)
    }

    useEffect(() => {
        restartFunc()
    }, [props.id]) 
    return (
        <div className="gravity-display">
        <a className="btn release" onClick={() => setOrangeRelease(props.id)}>Release orange ball</a>                    
        <a className="btn release" onClick={() => setBothRelease(props.id)}>Release both</a>
        <a className="btn release" onClick={() => setPinkRelease(props.id)}>Release green ball</a>
        <a className="btn release restart-btn" onClick={restartFunc}>Restart</a>

        <GravityAnimation 
            pinkRelease = {pinkRelease}  
            orangeRelease = {orangeRelease}  
            bothRelease = {bothRelease}
        />

        <a className="btn" onClick={()=>setShowWhy(!showWhy)}>
            {props.id === 'earth' ? "Why balls fall at all" 
            :
            
            props.id === 'moon' ? "Why balls fall at the same time"
            :

            props.id === 'mars' ? "Why balls fall faster than moon"
            :

            props.id === 'venus' ? "balls fall like on the Earth?"
            :

            ''}
        </a>

       <div style={showWhy ? {display:'block'} : {display:'none'}}>
            {props.id === 'earth' ? 
            <>
                <p>Because of many reasons, but what concerns us the most here is the enormous pulling force of Earth's gravity.</p>
                <br/>
                {/* <MathJaxContext className="calculations">
                    <MathJax 
                        config={{ "HTML-CSS": { scale: 800 }}}
                    >
                            {"\\(F \= G\\frac{m1m2}{r^2}\\)"}
                    </MathJax>
                </MathJaxContext> */}
                {/* <br/> */}
                <p className="question"><a onClick={()=>setWhyFaster(!whyFaster)}>Ok, why orange ball falls faster?</a></p>
                <br/>
                <p style={whyFaster ? {display: 'block'} : {display: 'none'}}>Unlike other planets, the Earth has the air! So air resistance affects the objects' falling speed. Two objects with the same mass, the one with less air resistance shape will fall faster. <br/><br/>However, our balls have the same perfect circle shape. Here comes another rule: two objects, with the same shape, heavier will fall faster because it provides more net force against the air, like our <span className="orange-ball"></span> ball.</p>
            </>
            :
            
            props.id === 'moon' ? 
            <>
                <p>Because of the absence of the air. We've seen from the Earth animation how air resistance slowed down the fall of <span className="blue-ball"></span>ball. The moon doesn't have any air or an atmosphere. <br/><br/> 
                   Luckily, we have <a href="https://www.youtube.com/watch?v=oYEgdZ3iEKA" target="_blank">a real footage</a> of the free fall experiement of a hammer and a feather on the Moon conducted by the NASA Apollo Mission.</p>
                <br/>
                <p className="question"><a onClick={()=>setWhyFaster(!whyFaster)}>Would balls bounce higher or more on the Moon than they do on the Earth?</a></p>
                <br/>
                <p style={whyFaster ? {display: 'block'} : {display: 'none'}}>The answer is it depends. Not having air resistance might make us think of more bounces on the Moon but bouncing mainly depends on the elasticity of the ground. For instance, the wooden floor on the Earth would bounce the object more than the Moon's dusty ground.</p>
            </>
            :

            props.id === 'mars' ?
            <p>Because the gravity is stronger than on the Moon. <br/><br/>Despite the fact Mars has an atmosphere, the air density is so low that it would not affect the falling speed of the objects dramatically like on the Earth.</p>
            :

            // props.id === 'venus' ?
            // <p>Kinda. The reason is Venus has almost the same gravity with the Earth. So the fall look almost identical in free fall, however air resistance would slow down <span className="blue-ball"></span> speed on the Earth, which doesn't happen in Venus.</p>
            // :
            
            ''}
            </div>
    </div>

    )
}

export default GravityDisplay
