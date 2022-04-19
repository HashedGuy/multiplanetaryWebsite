import React from 'react'
import HomePageSections from './HomePageSections'
import ThreeD from '../RocketScience/ThreeD'

function MainContent() {
    document.title = 'Home page'
    let textOne = `Enough dreaming. \nLearn how the freakin' universe works.`
    return (
        <>  
            <HomePageSections 
                bgImg = "hero-main"
                title = {textOne}               
                noBtn={true}
                sectionInfo = "Getting back to the Moon, mining asteroids, building a city on Mars, colonizing planets, you name it...if all these excite you, this is your website."
            />

            <HomePageSections 
                bgImg="flights-api"
                title="Don't miss the launch!"
                btnActive={true}
                linkTo='./flights'
                buttonText="flights table"
                sectionInfo="Imagine you're at the airport checking the flight table of departures or arrivals. But this time space airport..."
            />

            <HomePageSections 
                bgImg = "photos-api"
                title = "Check if we have any new photo from Mars today"
                linkTo ='./martianphotos'
                btnActive = {true}
                buttonText = "today's photo"
                sectionInfo = "Thanks to the NASA Mars Rover API, we are able to receive photos from Mars from the active rovers. Choose your own rover and see the latest photos with all the details."
            />

            <HomePageSections 
                bgImg = "pis-api"
                title = "Who are in Space right now?"
                linkTo ='./whoareinspace'
                btnActive = {true}
                buttonText = "let's know them"
                sectionInfo = "Some of us have already left the Earth...Thanks to WAIS Multiplanetary API, we can get the updated list of the astronauts in space, and many more about them and their mission in space."
            />

            <ThreeD 
                type="main-page"
            />

            <HomePageSections 
                bgImg = "api"
                title = "Use multiplanetary { APIs }"
                linkTo ='./api'
                btnActive = {false}
                buttonText = "See APIs"
                sectionInfo = "Based on simple REST principles, the Multiplanetary API endpoints return JSON metadata, directly from the Multiplanetary Data Catalogue."
            />       
        </>
    )
}

export default MainContent
