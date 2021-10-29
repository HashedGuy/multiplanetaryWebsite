import React from 'react'
import HomePageSections from '../HomePage/HomePageSections'

function HeroPhotos() {
    return (
        <HomePageSections 
                bgImg = "photos-api"
                title = "Martian rovers sending us photos everyday"                
                noBtn={true}
                sectionInfo = "We use Mars Rover API that is designed to collect image data gathered by NASA's Perseverance, Curiosity, Opportunity, and Spirit rovers on Mars and make it more easily available to other developers, educators, and citizen scientists."
        />
    )
}

export default HeroPhotos
