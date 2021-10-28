import React, {useState, useEffect} from 'react'
import './pis.css'
import ISSImg from "../../img/iss.png"
import ShenzhouImg from "../../img/shenzhou.png"
import PISData from './db.json'

function Astronauts() {
    
    const [activeAstronaut, setAstronaut] = useState([])
    const [craft, setCraft] = useState('')
    const [issLocation, setIssLocation] = useState([])
    const [timeZone, setTimeZone] = useState()
    const [countryCode, setCountryCode] = useState()
    const [selectedAstro, setSelectedAstro] = useState(PISData.people[0])

    const loadData = () => {
        JSON.parse(JSON.stringify(PISData))
        setAstronaut(PISData.people)
        // setSelectedAstro(PISData.people[0])
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
        }, 20000)
      
        fetchData() // <-- (2) invoke on mount
      
        return () => clearInterval(id);
      }, [])

    const fetchDataTwo = async () => {
        try {
            const res = await fetch(`https://api.wheretheiss.at/v1/coordinates/${issLocation.latitude},${issLocation.longitude}`)
            const data = await res.json()
            setTimeZone(data.timezone_id)
            data.country_code === '??' ? setCountryCode('N/A') : setCountryCode(data.country_code)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchDataTwo()
    }, [issLocation])

    return (
        <section className="pis">
                <div className="astro">
                    {activeAstronaut.map(astronaut => (
                        
                            <div 
                                className="astro-info"
                                key={astronaut.id}
                            >                                          
                                    
                                    <a className="btn btn-pis"
                                        key={astronaut.id}
                                        onClick={() => {
                                            setCraft(astronaut.craft)
                                            setSelectedAstro(astronaut)
                                        }} 
                                        >
                                        <h1>{astronaut.name}</h1>
                                        <h3>{astronaut.craft}</h3>
                                    </a>                                         
                            
                            </div>                       
                            
                      
                        ))}
                        
                </div>
                <div className="astro-info-big">
                    <div className="astro-bio">
                        <div>
                            <h1>{selectedAstro.name}</h1><img className="flag" src={selectedAstro.country_logo}/>                            
                            <p>{selectedAstro.bio}</p>
                        </div>                        
                        <div className="astro-photo-section">
                            <img className="astro-img" src={selectedAstro.img}/>
                            <p className="credits">Credits to NASA Active Astronauts</p>
                        </div>
                    </div>
                    <div className="craft-details">
                        <div className = "craft-visual">
                            <img 
                                src={craft === 'Shenzhou 13' ? ShenzhouImg : ISSImg} 
                                className={craft === 'Shenzhou 13' ? "add-padding" : ""}
                            />
                            <h2>Current {craft} position</h2> 
                            <h3>Latitude: {craft === 'Shenzhou 13' ? 'N/A' : issLocation.latitude}</h3>
                            <h3>Longitude: {craft === 'Shenzhou 13' ? 'N/A': issLocation.longitude}</h3>
                            <h3>Time zone: {craft === 'Shenzhou 13' ? 'N/A' : timeZone}</h3>
                            <h3>Country code: {craft === 'Shenzhou 13' ? 'N/A': countryCode}</h3>
                        </div>
                        <div className="craft-info">
                            <h1>{craft === 'Shenzhou 13' ? "Shenzhou 13": "International Space Station (ISS)"}</h1>
                            <p>{craft === 'Shenzhou 13' ? 
                                
                                "Shenzhou 13 (Chinese: 神舟十三号; pinyin: Shénzhōu Shísān-hào) is the eighth crewed Chinese spaceflight and the thirteenth flight of the Shenzhou program. The spacecraft carried three People's Liberation Army Astronaut Corps (PLAAC) taikonauts on the second flight to the Tianhe core module, the first module of the Tiangong space station. The launch of the three-person crew with a Long March-2F launch vehicle from the Jiuquan Satellite Launch Center took place on October 15, 2021 at 16:23 UTC, and the return is planned for spring 2022. "
                                :
                                "The International Space Station (ISS) is a modular space station (habitable artificial satellite) in low Earth orbit. It is a multinational collaborative project involving five participating space agencies: NASA (United States), Roscosmos (Russia), JAXA (Japan), ESA (Europe), and CSA (Canada). The station serves as a microgravity and space environment research laboratory in which scientific research is conducted in astrobiology, astronomy, meteorology, physics, and other fields."}</p>
                        </div>
                    </div>
                </div>
                
            </section>
        
    )
}

export default Astronauts
