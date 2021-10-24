import React from 'react'
import PhotosAPIImg from '../../img/darken-rover_50.jpg'
import SatellitePassImg from '../../img/darken-man-min_50.jpg'
import SpaceGarageImg from '../../img/launch-api_50.jpg'
import PISImg from '../../img/darkenpis.jpg'
import {Link} from 'react-router-dom'

function MainContent() {
    document.title = 'Home page'
    return (
        <>                
            <section 
                className="photos-api"
                style ={ { backgroundImage: `url(${PhotosAPIImg})` } }
            >
                <h2 className="section-title">Check if we have any new photo from Mars today</h2>
                <Link to='./martianphotos'><a href="photos-api.html" className="btn"><span>today's photo</span></a></Link>
                <p className="section-info">Thanks to Mars Rover API, we are receiving photos from Mars from the active rovers. Choose your own rover and see the latest photos with all the details.</p>
            </section>


            <section 
                className="launch-api"
                style ={ { backgroundImage: `url(${PISImg})` } }
            >
                <h2 className="section-title">Who are in Space right now?</h2>
                <Link to='./peopleinspace'><a href="photos-api.html" className="btn"><span>lets know them</span></a></Link>
                <p className="section-info">Some of us has already left the Earth...Thanks to Open Notify and the WTIA REST API, we can get the updated list of the astronauts in space, as well as the current position of their satellite, timezone information and many more.</p>  
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