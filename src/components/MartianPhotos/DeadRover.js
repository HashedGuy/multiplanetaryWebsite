import React, {useState, useEffect} from 'react'
import OpportunityImg from '../../img/opportunity.png'
import {BounceLoader, BarLoader, BeatLoader} from 'react-spinners'

function DeadRover() {

    const deadRovers = ["Opportunity", "Spirit"]
    const [myDeadRover, setMyDeadRover] = useState('')

    const key = 'Xi8DhCGi9T1CeXVvprgR77bDOpfAxYK6qybRARvp'
    
    const [deadData, setDeadData] = useState([])

    const [deadPhoto, setDeadPhoto] = useState([])
    
    const [isLoading, setLoading] = useState(false)
   
    useEffect(() => {
        setLoading(true)
        if (myDeadRover) {
            fetch(`https://api.nasa.gov/mars-photos/api/v1//manifests/${myDeadRover}/?api_key=${key}`)
            .then(res => res.json())
            .then(data => {
                // console.log("render")
                setDeadData(data.photo_manifest)
                setLoading(false)
            }) 
        } else {
            fetch(`https://api.nasa.gov/mars-photos/api/v1//manifests/opportunity/?api_key=${key}`)
            .then(res => res.json())
            .then(data => {
                // console.log("render")
                setDeadData(data.photo_manifest)
                setLoading(false)
            }) 
        }
        return () => {
            setDeadData({})
        }         
    }, [myDeadRover])


    useEffect(() => {
        setLoading(true)
        if (myDeadRover) {
            fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${myDeadRover}/latest_photos?api_key=${key}`)
                .then(res => res.json())
                .then(data => {
                    // console.log(data.latest_photos)
                    setDeadPhoto(data.latest_photos[0])
                    setLoading(false)
                })   
         } else {
            fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/latest_photos?api_key=${key}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data.latest_photos)
                    setDeadPhoto(data.latest_photos[0])
                    setLoading(false)
                })   
         }

         return () => {
            setDeadPhoto({})
        }

   }, [myDeadRover])
    
    return (
    <section className="dead-rovers">

        <div className="dead-body">
            <h2 className="section-title">Some rovers on Mars are <span style={{backgroundColor: 'red', color: 'wheat'}}>not active </span>anymore but they sent us the first photos</h2>
        </div>

        <div className="dead-rover-info">
            
            {deadRovers.map(deadRover => (
                <div className="dead-rover rover-active">
                    <a
                            key={deadRover} 
                            onClick={
                                    () => {setMyDeadRover(deadRover)}}
                            // onClick = {makeAppear}
                    >
                            <h2>{deadRover}</h2>
                                    
                    </a>
                    <p> 
                        <span className="remove">
                            {
                                deadRover === 'Opportunity' ?
                                "The Mars 2020 Perseverance Rover will search for signs of ancient microbial life, which will advance NASA's quest to explore the past habitability of Mars. The rover has a drill to collect core samples of Martian rock and soil..."
                                :                                        
                                "Part of NASA's Mars Science Laboratory mission, Spirit is the largest and most capable rover ever sent to Mars. It launched Nov. 26, 2011 and landed on Mars at 10:32 p.m. PDT on Aug. 5, 2012...."
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
                <div className="photos-info">
                    <h2 className="photos-title">Latest photo from {myDeadRover ? myDeadRover : "Opportunity"}</h2>
                    <p>Photo taken: {isLoading ? <BeatLoader size={6} color='red' loading /> : deadPhoto.earth_date}</p>
                    <p>Camera: {}</p>
                    <p className="latest-photo-info" id="latest-photo-info-perseverance"></p>
                    <a href="" className="btn"><span>{myDeadRover ? myDeadRover : "Opportunity"} album</span></a>
                </div>
                <div className="latest-photo-section" id="perseverance-latest-photo">
                    <img src={isLoading ? "Photo Loading..." : deadPhoto.img_src} className="latest-photo" alt={`latest photo from ${myDeadRover}`}/>
                </div>
            </div>        
        </div>

        {/* <div className="dead-rover-parameters" id="spirit">            
            <div className="rover-parameters-2">
                <img src="img/opportunity.png" alt=""/>
                <div className="dead-rover-parameters-info" id="spirit-info"></div>
                <div id="not-active-signal-two" style={{display: 'none'}}></div>
            </div>
            
            <div className="photos">
                <div className="dead-photos-info">
                    <h2 className="photos-title">Last photo from Spirit</h2>                    
                    <p className="latest-photo-info" id="latest-photo-info-spirit"></p>
                    <a href="" className="btn"><span>Spirit album</span></a>
                </div>
                <div className="latest-photo-section" id="spirit-latest-photo"></div>
            </div>
        
        </div> */}
        </section>

    )
}

export default DeadRover
