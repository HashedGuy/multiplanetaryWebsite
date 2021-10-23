import React, {useState, useEffect} from 'react'
import PISImg from '../../img/darkenpis.jpg'
import PISData from './db.json'

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
        <div 
            className="hero hero-photos-pis"
            style ={ { backgroundImage: `url(${PISImg})` } }>      

            <div className="hero-body">
                <h2 className="hero-title">{astNumber} people in space right now</h2>
                <p className="hero-info">Some of us has already left the Earth...Thanks to Open Notify and the WTIA REST API, we can get the updated list of the astronauts in space, as well as the current position of their satellite, timezone information and many more./p>
            </div>
        </div>
    )
}

export default HeroPhotos