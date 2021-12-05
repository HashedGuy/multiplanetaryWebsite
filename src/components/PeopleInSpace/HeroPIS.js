import React, {useState, useEffect} from 'react'
import {BeatLoader} from 'react-spinners'
import HomePageSections from '../HomePage/HomePageSections'

function HeroPhotos() {
    const [astNumber, setAstNumber] = useState('')
    const [isLoading, setLoading] = useState(false)
    document.title = 'WhoAreInSpace'

    useEffect(() => {
        setLoading(true)
        fetch('https://multiplanatery-api.netlify.app/api/wais')
            .then(res => res.json())
            .then(data => {
                
                setAstNumber(data.number)
                setLoading(false)
            })
            
    }, [])

    return (
        <HomePageSections 
                bgImg = "pis-api"
                title = {`${isLoading ? '...' : astNumber} people in space right now`}               
                noBtn={true}
                sectionInfo = "Some of us has already left the Earth...Thanks to the WAIS Multiplanetary API and the WTIA REST API, we can get the updated list of the astronauts in space, as well as the current position of their satellite, timezone information and many more."
        />
    )
}

export default HeroPhotos