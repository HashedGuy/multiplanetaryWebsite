import React from 'react'

function ISSDeparture() {
    return (
        <>           
            <div className="row">
                <div className="col">
                    <img className="operator-logo" src="logos/roscosmos.png" title="Roscosmos"/>
                </div>
                <div className="col">MS-19</div>
                <div className="col rimuv">Soyuz MS</div>
                <div className="col time">22 March, 2022</div> 
                <div className="col">International Space Station</div> 
                <div className="col status-eit">Expected in time</div>
            </div>
            <div className="row">
                <div className="col">
                    <img className="operator-logo" src="logos/spacex.png" title="SpaceX"/>
                </div>
                <div className="col">Crew-3</div>
                <div className="col rimuv">Crew Dragon Endurance</div>
                <div className="col time">Late April, 2022</div>
                <div className="col">International Space Station</div> 
                <div className="col status-tbc">TBC</div>
            </div>
        </>
    )
}

export default ISSDeparture
