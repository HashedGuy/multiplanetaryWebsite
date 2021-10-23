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
                <p className="hero-info">We use Mars Rover API that is designed to collect image data gathered by NASA's Perseverance, Curiosity, Opportunity, and Spirit rovers on Mars and make it more easily available to other developers, educators, and citizen scientists.</p>
            </div>
        </div>
    )
}

export default HeroPhotos