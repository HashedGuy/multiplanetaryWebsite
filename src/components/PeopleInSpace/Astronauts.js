import React, {useState, useEffect} from 'react'
import './pis.css'
import ISSImg from "../../img/iss_croped.png"
import ShenzhouImg from "../../img/shenzhou.png"
import SoyuzImg from "../../img/soyuz.png"
import DragonImg from "../../img/dragon.png"

function Astronauts() {
    
    const [activeAstronaut, setAstronaut] = useState([])
    const [craft, setCraft] = useState('')
    const [issLocation, setIssLocation] = useState([])
    const [timeZone, setTimeZone] = useState()
    const [countryCode, setCountryCode] = useState()
    const [selectedAstro, setSelectedAstro] = useState('')
    const [showLaunchInfo, setLaunchInfo] = useState(false)
    const [showISSLocationInfo, setISSLocationInfo] = useState(false)
    const [showISSParking, setISSParking] = useState(false)

    const showLaunch = () => {
        setLaunchInfo(!showLaunchInfo)
    }

    const issLocationInfo = () => {
        setISSLocationInfo(!showISSLocationInfo)
    }

    const issParking = () => {
        setISSParking(!showISSParking)
    }

    // Fetching PeopleInSpace from Multiplanetary API
    useEffect(() => {
        fetch('https://multiplanatery-api.netlify.app/api/wais')
            .then(res => res.json())
            .then(data => {
                setSelectedAstro(data.people[0])
                setAstronaut(data.people)
                
            })
            
    }, [])

    // Fetching 'location' from wheretheiss API
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
    
    // Fetching 'timeZone' from wheretheiss API  
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
                                        <img className= "btn-flag" src={`flags/${astronaut.country_code}.svg`}/>
                                        <h1>{astronaut.name}</h1>
                                        <h3>{astronaut.craft}</h3>
                                    </a>                                         
                            
                            </div>                       
                            
                      
                        ))}
                        
                </div>
                <div className="astro-info-big">
                    <div className="astro-info-medium">
                        <div className="astro-bio">
                            <div>
                                <h1>{selectedAstro.name}</h1><img className="flag" src={`flags/${selectedAstro.country_code}.svg`}/>                            
                                <p>{selectedAstro.bio}</p>
                            </div>                        
                            <div className="astro-photo-section">
                                <img className="astro-img" src={selectedAstro.img}/>
                                <p className="credits">Credits to NASA Active Astronauts</p>
                            </div>
                        </div>

                        {/* <div className="launch-details">
                            <a className="btn" onClick={showLaunch}>space journey</a>
                                {showLaunchInfo ? 
                                    <div className="launch-show">
                                        <ul className="launch-info">
                                            <li>Launched from: <span className="details">Baikonur, KZ</span></li>
                                            <li>Launch rocket: <span className="details">Soyuz</span></li>
                                            <li>Launch time: <span className="details">9 Apr 2021, 07:42 UTC</span> </li>
                                            <li>Operator: <span className="details">Roscosmos</span></li><br/>
                                            <li>Mission name: <span className="details">Soyuz MS-18</span></li>
                                            <li>Mission type: <span className="details">ISS crew rotation</span></li>
                                        </ul>
                                        <div className="launch-visuals">
                                            <img src={DragonImg} />
                                        </div>
                                    </div> : ''
                                }
                        </div> */}
                    </div>
                    <div className="craft-details">
                        <div className = "craft-visual">
                            <img 
                                src={craft === 'Shenzhou 13' ? ShenzhouImg : ISSImg} 
                                className={craft === 'Shenzhou 13' ? "add-padding" : ""}
                            />

                        {craft === 'Shenzhou 13' ? '' :
                        <> 
                            <a class="btn" onClick={issLocationInfo}>Current ISS Location</a>

                            {showISSLocationInfo ? 
                                <ul className="issLocation-show" style={craft === 'Shenzhou 13' ? {display:'none'} : {}}>
                                    
                                    <li>Latitude: <span className="details">{issLocation.latitude}</span></li>
                                    <li>Longitude: <span className="details">{issLocation.longitude}</span></li>
                                    <li>Time zone: <span className="details">{timeZone}</span></li>
                                    <li>Country code: <span className="details">{countryCode}</span></li>
                                
                                {/* <h3>Currently docked spaceships:</h3> 
                                    <ul>    
                                        <li>Northrop Grumman's Cygnus space freighter</li>
                                        <li>Russia's Soyuz MS-19 crew ship</li>
                                        <li>Progress 78 and 79 resupply ships</li>
                                    </ul>
                                <img src="https://www.nasa.gov/sites/default/files/thumbnails/image/iss_11-08-21.jpg"/> */}
                                </ul> : ''
                            }
                            {/* <a class="btn" onClick={issParking}>iss parking</a>
                            { showISSParking ? 
                                <div className="issParking">
                                    <div className="parking-img">
                                        <img src="https://www.nasa.gov/sites/default/files/thumbnails/image/iss_11-08-21.jpg"/>
                                        <p className="credits">Credists to NASA ISS Images</p>
                                    </div>
                                    
                                    <div className="parking-show">
                                        <h4 className="exc">Currently docked spaceships:</h4> 
                                        <ul className="parking-show-ul">    
                                            <li><span className="details">Northrop Grumman's Cygnus space freighter</span></li>
                                            <li><span className="details">Russia's Soyuz MS-19 crew ship</span></li>
                                            <li><span className="details">Progress 78 and 79 resupply ships</span></li>
                                        </ul>
                                    </div>
                                </div> : ''
                            } */}
                            </>
                        }
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
