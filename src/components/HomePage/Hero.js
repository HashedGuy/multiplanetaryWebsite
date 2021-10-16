import React from 'react'
import BackImg from '../../img/galaxyHR_70.jpg'

function Hero() {

    return (
        <div 
            className="hero main"
            style ={ { backgroundImage: `url(${BackImg})` } }
        >     
            <div className="hero-body">
                <h2 className="hero-title">We’re close to travel to Mars <strong>how about living there?</strong></h2>
                <p className="hero-info">The Mars might look like a barren rock, but it’s an amazing place that will serve as <a href="#" className="info-link">
                    our gateway to the rest of our galaxy</a> as humanity starts to spread it’s wings beyond the one and only planet that we know so far.</p>
            </div>
        </div>
    )
}

export default Hero
