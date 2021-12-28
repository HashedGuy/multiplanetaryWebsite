import React from 'react'
import './bs.css'
import {Link} from 'react-router-dom'

function BehindScenes() {
    return (
        <div className="aloha">
            <h2>That's just me</h2>
            <p>This is Arbus, a self-taught astronaut (I wish). A space enthusiaist who enjoys animating things. Just started to build this project (a couple of months ago) and I am excited to take it to the next level and make more publicly available data for the space community.</p>

            <br />
            <p>Would love to hear your comments/critique/offers if you have any. Feel free to hit me up at <a href="mailto:arbus@multiplanetary.website">arbus@multiplanetary.website</a></p>
            <br />
            <p className="yavash">Some technical details: the website is built on React, nothing fancy, simple HTML, CSS (yep, the animations are CSS-only too). I offer freelance web-dev services as well. Feel free to contact if you're interested in.</p>
            <a className="btn kidding" target="_blank" href="https://www.patreon.com/multiplanetary">Wanna support? <span className="kidding-span">You kidding</span></a>
        </div>
    )
}

export default BehindScenes
