import React, {useState, useEffect} from 'react'
import OpportunityImg from '../../img/opportunity.png'
import {BounceLoader, BeatLoader} from 'react-spinners'

function DeadRover() {

    const deadRovers = ["Opportunity", "Spirit"]
    const [myDeadRover, setMyDeadRover] = useState('')
    
    const [deadData, setDeadData] = useState([])

    const [deadPhoto, setDeadPhoto] = useState([])
    
    const [isLoading, setLoading] = useState(false)
    const [deadFetching, setDeadFetching] = useState(false)

    useEffect(() => {
        setMyDeadRover('Opportunity')
    }, [])
   
    useEffect(() => {
        setLoading(true)
        setDeadFetching(true)
        if (myDeadRover) {
            fetch(`https://api.nasa.gov/mars-photos/api/v1//manifests/${myDeadRover}/?api_key=${process.env.REACT_APP_NASA_API_KEY}`)
            .then(res => res.json())
            .then(data => {
                setDeadData(data.photo_manifest)
                setLoading(false)
                setDeadFetching(false)
            }) 
        } else {
            fetch(`https://api.nasa.gov/mars-photos/api/v1//manifests/opportunity/?api_key=${process.env.REACT_APP_NASA_API_KEY}`)
            .then(res => res.json())
            .then(data => {
                setDeadData(data.photo_manifest)
                setLoading(false)
                setDeadFetching(false)
            }) 
        }
        return () => {
            setDeadData({})
        }         
    }, [myDeadRover])


    useEffect(() => {
        setLoading(true)
        setDeadFetching(true)
        if (myDeadRover) {
            fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${myDeadRover}/latest_photos?api_key=${process.env.REACT_APP_NASA_API_KEY}`)
                .then(res => res.json())
                .then(data => {
                    setDeadPhoto(data.latest_photos[0])
                    setLoading(false)
                    setDeadFetching(false)
                })   
         } else {
            fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/latest_photos?api_key=${process.env.REACT_APP_NASA_API_KEY}`)
                .then(res => res.json())
                .then(data => {
                    setDeadPhoto(data.latest_photos[0])
                    setLoading(false)
                    setDeadFetching(false)
                })   
         }

         return () => {
            setDeadPhoto({})
        }

   }, [myDeadRover])

   deadFetching ? document.title = "Fetching NASA data..." : document.title = "Martian Photos"
    
    return (
        <section className="dead-rovers">

            <div className="dead-body">
                <h2 className="section-title">
                    Some rovers on Mars are <span style={{backgroundColor: 'darkred', color: 'wheat'}}>not active </span>anymore but they sent us the first photos
                </h2>
            </div>

            <div className="dead-rover-info">
                
                {deadRovers.map(deadRover => (
                    <div 
                        className={
                        (deadRover === myDeadRover) || (deadRover === '') ? "dead-rover rover-active"
                        : 
                        "dead-rover"
                        }
                        key={deadRover}
                    >
                        <a
                                key={deadRover} 
                                onClick={
                                        () => {setMyDeadRover(deadRover)}}
                        >
                                <h2>{deadRover}</h2>
                                        
                        </a>
                        <p style={
                                deadRover === 'Spirit' ? {borderRight: 0} : {}
                            }
                        > 
                            <span className="remove">
                                {
                                    deadRover === 'Opportunity' ?
                                    "Opportunity, also known as MER-B (Mars Exploration Rover – B) or MER-1, and nicknamed 'Oppy', is a robotic rover that was active on Mars from 2004 until mid-2018. Launched on July 7, 2003, as part of NASA's Mars Exploration Rover program, it landed in Meridiani Planum on January 25, 2004, three weeks after its twin Spirit (MER-A) touched down on the other side of the planet."
                                    :                                        
                                    "Spirit, also known as MER-A (Mars Exploration Rover – A) or MER-2, is a Mars robotic rover, active from 2004 to 2010. Spirit was operational on Mars for 2208 sols or 3.3 Martian years (2249 days; 6 years, 77 days). It was one of two rovers of NASA's Mars Exploration Rover Mission managed by the Jet Propulsion Laboratory (JPL)."
                                }
                            </span>
                        </p>            
                    </div>
                ))}
            </div>

            
            <div className="dead-rover-parameters active-rover" id="opportunity">            
                <div className="rover-parameters-2">
                    <img 
                            src={ myDeadRover === 'Opportunity' ? 
                                    OpportunityImg
                                    :
                                    OpportunityImg
                                } 
                            alt={`latest photo from ${myDeadRover}`}
                        />

                    <div className="dead-rover-parameters-info" id="opportunity-info">
                        <h3>Launching date: {isLoading ? <BeatLoader size={8} color='red' loading /> : deadData.launch_date}</h3>
                        <h3>Landing date: {isLoading ? <BeatLoader size={8} color='red' loading /> : deadData.landing_date}</h3>
                        <h3>Total photos taken: {isLoading ? <BeatLoader size={8} color='red' loading /> : deadData.total_photos}</h3>
                        <h3>Status: {isLoading ? <BeatLoader size={8} color='red' loading /> : deadData.status} <span>&nbsp;</span>
                                    {deadData.status === 'complete' ?
                                    <BounceLoader size={14} margin-top={2} color='red'/> : ""
                                    }
                        </h3>   
                    </div>
                </div>
                
                <div className="photos">
                    <div className="dead-photos-info">
                        <h2 className="photos-title">Latest photo from {myDeadRover ? myDeadRover : "Opportunity"}</h2>
                        <p>Photo taken: {isLoading ? <BeatLoader size={6} color='red' loading /> : deadPhoto.earth_date}</p>
                       
                        <p className="latest-photo-info" id="latest-photo-info-perseverance"></p>
                    </div>
                    <div className="latest-photo-section" id="perseverance-latest-photo">
                        <img src={isLoading ? "Photo Loading..." : deadPhoto.img_src} className="latest-photo" alt={`latest photo from ${myDeadRover}`}/>
                    </div>
                </div>        
            </div>
        </section>

    )
}

export default DeadRover
