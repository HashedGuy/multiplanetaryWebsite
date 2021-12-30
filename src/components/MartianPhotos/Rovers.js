import React, {useState, useEffect} from 'react'
import PersImg from '../../img/rover-pers.png'
import CuriosityImg from '../../img/rover-curiosity.png'
import IngenuityImg from '../../img/ingenuity.png'
import {BounceLoader, BeatLoader} from 'react-spinners'

function Rovers() {
        
    const rovers = ["Perseverance", "Curiosity", "Ingenuity"]
    const [myRover, setMyRover] = useState('')

    useEffect(() => {
        setMyRover('Perseverance')
    }, [])
    
    const [data, setData] = useState([])

    const [photo, setPhoto] = useState([])
    
    const [isLoading, setLoading] = useState(false)

    const [fetching, setFetching] = useState(false)

    useEffect(() => {
        setLoading(true)
        setFetching(true)       
        if (isLoading) {document.title = "Fetching NASA data ..."}
        if (myRover === 'Ingenuity') {
            setFetching(false)
        }   else if ((myRover === 'Perseverance') || (myRover === 'Curiosity')) {
            fetch(`https://api.nasa.gov/mars-photos/api/v1//manifests/${myRover}/?api_key=${process.env.REACT_APP_NASA_API_KEY}`)
            .then(res => res.json())
            .then(data => {
                setData(data.photo_manifest)
                setLoading(false)
                setFetching(false)
            }) 
        } else {
            fetch(`https://api.nasa.gov/mars-photos/api/v1//manifests/perseverance/?api_key=${process.env.REACT_APP_NASA_API_KEY}`)
            .then(res => res.json())
            .then(data => {
                setData(data.photo_manifest)
                setLoading(false)
                setFetching(false)
            }) 
        }
        return () => {
            setData({})
        }         
    }, [myRover])


    useEffect(() => {
        setLoading(true)
        setFetching(true) 
        if (myRover === 'Ingenuity') {
            setFetching(false)
         } else if ((myRover === 'Perseverance') || (myRover === 'Curiosity')) {
            fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${myRover}/latest_photos?api_key=${process.env.REACT_APP_NASA_API_KEY}`)
                .then(res => res.json())
                .then(data => {
                    setPhoto(data.latest_photos[0])
                    setLoading(false)
                    setFetching(false) 
                })   
         } else {
            fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/latest_photos?api_key=${process.env.REACT_APP_NASA_API_KEY}`)
                .then(res => res.json())
                .then(data => {
                    setPhoto(data.latest_photos[0])
                    setLoading(false)
                    setFetching(false) 
                })   
         }
         
         return () => {
             setPhoto({})
         }

    }, [myRover])

    fetching ? document.title = "Fetching NASA data..." : document.title = "Martian Photos"

    return (
        <section className="rovers">
            <div className="rover-info">
                    {rovers.map(rover => (
                        
                        <div 
                            className={                                 
                                 (rover === myRover) || (rover === '') ? "rover rover-active"
                                 : 
                                 "rover"
                                }
                            key={rover}
                        >
                            <a
                                key={rover} 
                                onClick={
                                        () => {setMyRover(rover)}}
                            >
                                <h2>{rover}</h2>
                                
                            </a>
                            <p style={
                                rover === 'Ingenuity' ? {borderRight: 0} : {}
                            }> 
                                <span className="remove">
                                    {
                                        rover === 'Perseverance' ?
                                        "The Mars 2020 Perseverance Rover will search for signs of ancient microbial life, which will advance NASA's quest to explore the past habitability of Mars. The rover has a drill to collect core samples of Martian rock and soil..."
                                        :
                                        rover === 'Curiosity' ? 
                                        "Part of NASA's Mars Science Laboratory mission, Curiosity is the largest and most capable rover ever sent to Mars. It launched Nov. 26, 2011 and landed on Mars at 10:32 p.m. PDT on Aug. 5, 2012...."
                                        :
                                        "The Mars Helicopter, Ingenuity, is a technology demonstration to test powered, controlled flight on another world for the first time. It hitched a ride to Mars on the Perseverance rover..."
                                    }
                                </span>
                            </p>
                        </div>
                    ))}

            </div>

            <div className={myRover === 'Perseverance' || 'Curiosity' || 'Ingenuity' ? 
                                        "rover-parameters active-rover"
                                        :                            
                                        "rover-parameters"}
            >            
                <div className="rover-parameters-2">
                    <img 
                        src={ myRover === 'Ingenuity' ? 
                                IngenuityImg
                                : 
                              myRover === 'Curiosity' ? 
                                CuriosityImg
                                :
                                PersImg
                              } 
                        alt=""
                    />
                    <div className="rover-parameters-info">
                        { myRover === 'Ingenuity' ? 
                        <>
                        <h2 style={{marginBottom:'0.5em'}}>Coming soon...</h2>
                        <p>Dates of planned test activities are subject to change due to a variety of factors related to the Martian environment, communication relays, helicopter and/or rover status.</p> 
                        </>
                        :
                        <>
                            <h3>Launching date: {isLoading ? <BeatLoader size={8} color='green' loading /> : data.launch_date}</h3>
                            <h3>Landing date: {isLoading ? <BeatLoader size={8} color='green' loading /> : data.landing_date}</h3>
                            <h3>Total photos taken: {isLoading ? <BeatLoader size={8} color='green' loading /> : data.total_photos}</h3>
                            <h3>Status: {isLoading ? <BeatLoader size={8} color='green' loading /> : data.status} <span>&nbsp;</span>
                                        {data.status === 'active' ?
                                        <BounceLoader size={14} margin-top={2} color='green'/> : ""
                                        }
                            </h3>   
                        </>
                        }
                                               
                    </div>
                </div>
                
                <div className="photos"
                     style={myRover === 'Ingenuity' ? 
                     {display: 'none'} : {}}        
                >
                    <div className="photos-info">
                        <h2 className="photos-title">Latest photo from {myRover ? myRover : "Perseverance"}</h2>
                        <p>Photo taken: {isLoading ? <BeatLoader size={6} color='green' loading /> : photo.earth_date}</p>                       
                        <p className="latest-photo-info" id="latest-photo-info-perseverance"></p>
                    </div>
                    <div className="latest-photo-section" id="perseverance-latest-photo">
                        <img src={isLoading ? "Photo Loading..." : photo.img_src} className="latest-photo" alt={`latest photo from ${myRover}`}/>
                    </div>
                </div> 
            
            </div>        
        </section>    
    )
}

export default Rovers
