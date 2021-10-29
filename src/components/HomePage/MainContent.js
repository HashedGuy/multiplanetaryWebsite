import React from 'react'
import HomePageSections from './HomePageSections'

function MainContent() {
    document.title = 'Home page'
    return (
        <>  
            <HomePageSections 
                bgImg = "hero-main"
                title = "For wannabe multiplanet species"                
                noBtn={true}
                sectionInfo = "Getting back to the Moon, staying there, building a city on Mars, colonizing other planets...if all these excite you, you're on the right place."
            />

            <HomePageSections 
                bgImg = "photos-api"
                title = "Check if we have any new photo from Mars today"
                linkTo ='./martianphotos'
                btnActive = {true}
                buttonText = "today's photo"
                sectionInfo = "Thanks to Mars Rover API, we are receiving photos from Mars from the active rovers. Choose your own rover and see the latest photos with all the details."
            />

            <HomePageSections 
                bgImg = "pis-api"
                title = "Who are in Space right now?"
                linkTo ='./peopleinspace'
                btnActive = {true}
                buttonText = "lets know them"
                sectionInfo = "Some of us has already left the Earth...Thanks to Open Notify and the WTIA REST API, we can get the updated list of the astronauts in space, as well as the current position of their satellite, timezone information and many more."
            />

            <HomePageSections 
                bgImg = "pass-satellite-api"
                title = "Look at the sky! There might be a satellite flying over your head"
                linkTo ='./'
                btnActive = {false}
                buttonText = "coming soon"
                sectionInfo = "Query next passes for a given satellite above you. Uses Skyfield to predict passes, and Celestrak GP API to get updated TLE data."
            />

            <HomePageSections 
                bgImg = "launch-api"
                title = "Everything about launches, spaceships and many more"
                linkTo ='./'
                btnActive = {false}
                buttonText = "coming soon"
                sectionInfo = "If you live for adventure, what bigger adventure is there than leaving your planet,
                traveling through space and helping to colonize another celestial body?"
            />       
        </>
    )
}

export default MainContent