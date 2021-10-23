import React, {useState, useEffect} from 'react'
import './pis.css'
import ISSImg from "../../img/iss.png"
import ShenzhouImg from "../../img/shenzhou.png"
import PISData from './db.json'

function Astronauts() {
    
    const [activeAstronaut, setAstronaut] = useState([])
    const [craft, setCraft] = useState('')
    const [issLocation, setIssLocation] = useState([])

    const loadData = () => {
        JSON.parse(JSON.stringify(PISData))
        setAstronaut(PISData.people)
    }

    useEffect(() => {
        loadData()
    }, [])

    useEffect(() => {
        // (1) define within effect callback scope
        const fetchData = async () => {
          try {
            const res = await fetch('https://api.wheretheiss.at/v1/satellites/25544')
            const jsonData = await res.json()
            setIssLocation(jsonData)
          } catch (error) {
            console.log(error)
          }
        }
          
        const id = setInterval(() => {
          fetchData() // <-- (3) invoke in interval callback
        }, 5000)
      
        fetchData() // <-- (2) invoke on mount
      
        return () => clearInterval(id);
      }, [])

    console.log(issLocation)

    return (
        
        // <h1>{data.number} people in Space right now</h1>
        <section className="pis">
                <div className="astro">
                    {activeAstronaut.map(astronaut => (
                        <div className="astro-info">                                          
                                
                                <a className="btn btn-pis" onClick={() => {setCraft(astronaut.craft)}}>
                                    <h1>{astronaut.name}</h1>
                                    <h3>{astronaut.craft}</h3>
                                </a>                   
                        
                        </div>))}
                </div>
                <div className="astro-details">
                    <div className = "craft-visual">
                        <img src={craft === 'Shenzhou 13' ? ShenzhouImg : ISSImg}/>
                        <h2>Current {craft} position</h2> 
                        <h3>Latitude: {craft === 'Shenzhou 13' ? 'N/A' : issLocation.latitude}</h3>
                        <h3>Longitude: {craft === 'Shenzhou 13' ? 'N/A': issLocation.longitude}</h3>
                    </div>
                    <div className="craft-info">
                        <h1>{craft === 'Shenzhou 13' ? "Shenzhou 13": "International Space Station (ISS)"}</h1>
                        
                        <p>{craft === 'Shenzhou 13' ? 
                            
                            "Shenzhou 13 (Chinese: 神舟十三号; pinyin: Shénzhōu Shísān-hào) is the eighth crewed Chinese spaceflight and the thirteenth flight of the Shenzhou program. The spacecraft carried three People's Liberation Army Astronaut Corps (PLAAC) taikonauts on the second flight to the Tianhe core module, the first module of the Tiangong space station. The launch of the three-person crew with a Long March-2F launch vehicle from the Jiuquan Satellite Launch Center took place on October 15, 2021 at 16:23 UTC, and the return is planned for spring 2022. "
                            :
                            "The International Space Station (ISS) is a modular space station (habitable artificial satellite) in low Earth orbit. It is a multinational collaborative project involving five participating space agencies: NASA (United States), Roscosmos (Russia), JAXA (Japan), ESA (Europe), and CSA (Canada). The station serves as a microgravity and space environment research laboratory in which scientific research is conducted in astrobiology, astronomy, meteorology, physics, and other fields."}</p>
                    </div>
                </div>
                
            </section>
        
    )
}

export default Astronauts
