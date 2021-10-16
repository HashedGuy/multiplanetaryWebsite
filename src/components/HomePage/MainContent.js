import React from 'react'
import PhotosAPIImg from '../../img/darken-rover_50.jpg'
import SatellitePassImg from '../../img/darken-man-min_50.jpg'
import SpaceGarageImg from '../../img/launch-api_50.jpg'

function MainContent() {
    return (
        <>                
            <section 
                className="photos-api"
                style ={ { backgroundImage: `url(${PhotosAPIImg})` } }
            >
                <h2 className="section-title">Check if we have any new photo from Mars today</h2>
                <a href="photos-api.html" className="btn"><span>today's photo</span></a>
                <p className="section-info">Thanks to Mars Rover API, we are receiving photos from Mars from the active rovers. Choose your own rover and see the latest photos with all the details.</p>
            </section>
            
            <section 
                className="pass-satellite-api"
                style ={ { backgroundImage: `url(${SatellitePassImg})` } }
            >
                <h2 className="section-title">Look at the sky! There might be a satellite flying over your head</h2>
                <a href="" className="btn not-ready"><span>Coming soon</span></a>
                <p className="section-info">Query next passes for a given satellite above you. Uses Skyfield to predict passes, and Celestrak GP API to get updated TLE data.</p>
            </section>

            <section 
                className="launch-api"
                style ={ { backgroundImage: `url(${SpaceGarageImg})` } }
            >
                <h2 className="section-title">Everything about launches, spaceships and many more</h2>
                <a href="" className="btn not-ready"> <span> Coming soon</span> </a>
                <p className="section-info">If you live for adventure, <strong>what bigger adventure is there than leaving your planet</strong>,
                    traveling through space, and helping to colonize another celestial body?</p>  
            </section>
        </>
    )
}

export default MainContent