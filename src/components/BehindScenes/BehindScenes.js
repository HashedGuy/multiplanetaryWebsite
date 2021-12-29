import React from 'react'
import './bs.css'

function BehindScenes() {
    return (
        <div className='bs-container'>
        <div className="aloha">
            <h2>That's just me</h2>
            <p>This is Arbus, a space enthusiaist who enjoys animating things.</p>

            <br />
            <p>Would love to hear your comments/critique/offers. Feel free to hit me up at <a href="mailto:arbus@multiplanetary.website">arbus@multiplanetary.website</a></p>
            <br />
            <p className="yavash">Some technical details: the website is built on React, nothing fancy, simple HTML, CSS (yep, the simulations are CSS-only too). The animations I made for the explanatory youtube videos are built on Manim (an engine for precise programmatic animations).</p> 
            <p className="yavash">I offer freelance web-dev services as well. Feel free to contact if you're interested in.</p>
            <a className="btn kidding" target="_blank" href="https://www.patreon.com/multiplanetary">Wanna support? <span className="kidding-span">You kidding</span></a>
        </div>
        </div>
    )
}

export default BehindScenes
