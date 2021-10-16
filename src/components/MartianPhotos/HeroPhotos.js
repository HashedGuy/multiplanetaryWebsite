import React from 'react'
import PhotosAPIImg from '../../img/darken-rover_50.jpg'

function HeroPhotos() {
    return (
        <div 
        className="hero hero-photos"
        style ={ { backgroundImage: `url(${PhotosAPIImg})` } }>      

            <div className="hero-body">
                <h2 className="hero-title">Martian rovers sending us photos everyday</h2>
                <p className="hero-info">We use Mars Rover API that is designed to collect image data gathered by NASA's Perseverance, Curiosity, Opportunity, and Spirit rovers on Mars and make it more easily available to other developers, educators, and citizen scientists.</p>
            </div>
        </div>
    )
}

export default HeroPhotos
