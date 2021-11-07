import React from 'react'
import HomePageSections from '../HomePage/HomePageSections'

function HeroAPI() {
    document.title = 'Multiplanetary API'
    return (
        <HomePageSections 
                bgImg = "api"
                title = "Use multiplanetary { APIs }"                
                noBtn={true}
                sectionInfo = "Based on simple REST principles, the Multiplanetary API endpoints return JSON metadata, directly from the Multiplanetary Data Catalogue."
        />
    )
}

export default HeroAPI
