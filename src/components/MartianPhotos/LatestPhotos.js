import React, {useState, useEffect} from 'react'

function LatestPhotos() {

    const key = 'Xi8DhCGi9T1CeXVvprgR77bDOpfAxYK6qybRARvp'

    const [photo, setPhoto] = useState([])

    useEffect(() => {
        fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/latest_photos?api_key=${key}`)
            .then(res => res.json())
            .then(data => {
                setPhoto(data.latest_photos[0])
            })            

    }, [])

    return (      
            <div className="photos">
                <div className="photos-info">
                    <h2 className="photos-title">Latest photo from Perseverance</h2>
                    
                    <p className="latest-photo-info" id="latest-photo-info-perseverance"></p>
                    <a href="" className="btn"><span>{myRo} album</span></a>
                    <p style={{fontSize: '.8rem'}}>WARNING: We are in <a target="_blank" href="https://mars.nasa.gov/all-about-mars/night-sky/solar-conjunction/"> Mars solar conjunction</a>, the period when the Sun comes between Mars and Earth, blocking the signals. This means Perseverance will temporarily pause sending us back raw images for about two weeks. Check back for new images after Oct. 18.</p>

                </div>
                <div className="latest-photo-section" id="perseverance-latest-photo">
                    <img src={photo.img_src} class="latest-photo" alt="latest photo from Perseverance"/>
                </div>
            </div> 
    )
}

export default LatestPhotos
