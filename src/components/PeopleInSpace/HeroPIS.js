import React, {useState, useEffect} from 'react'
// import PISImg from '../../img/darkenpis.jpg'
import PISData from './db.json'
import HomePageSections from '../HomePage/HomePageSections'

function HeroPhotos() {
    const [astNumber, setAstNumber] = useState()

    const loadData = () => {
        JSON.parse(JSON.stringify(PISData))
        setAstNumber(PISData.number)
    }

    useEffect(() => {
        loadData()
    }, [])

    return (
        <HomePageSections 
                bgImg = "pis-api"
                title = {`${astNumber} people in space right now`}               
                noBtn={true}
                sectionInfo = "Some of us has already left the Earth...Thanks to Open Notify and the WTIA REST API, we can get the updated list of the astronauts in space, as well as the current position of their satellite, timezone information and many more."
        />
    )
}

export default HeroPhotos