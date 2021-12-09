import React from 'react'

function SpaceXDepartures() {
    return (
        <>
            {/* <div className="row">
                <div className="col">
                    <img className="operator-logo" src="logos/spacex.png" title="SpaceX"/>
                </div>
                <div className="col">IXPE</div>
                <div className="col rimuv">Falcon 9</div>
                <div className="col time">Dec 9, 2021 10:00 AM</div> 
                <div className="col">Kennedy Space Center, United States</div> 
                <div className="col status">Confirmed</div>
            </div> */}
            <div className="row">
                <div className="col">
                    <img className="operator-logo" src="logos/spacex.png" title="SpaceX"/>
                </div>
                <div className="col">Türksat 5B</div>
                <div className="col rimuv">Falcon 9</div>
                <div className="col time">Dec 19, 2021 03:58 AM</div>
                <div className="col">Cape Canaveral Space Force Station, United States</div> 
                <div className="col status-eit">Expected in time</div>
            </div>
            <div className="row">
                <div className="col">
                    <img className="operator-logo" src="logos/spacex.png" title="SpaceX"/>
                </div>
                <div className="col">CRS-24</div>
                <div className="col rimuv">Falcon 9</div>
                <div className="col time">Dec 21, 2021 10:06 AM</div> 
                <div className="col">Kennedy Space Center, United States</div> 
                <div className="col status-eit">Expected in time</div>
            </div>
            <div className="row">
                <div className="col">
                    <img className="operator-logo" src="logos/spacex.png" title="SpaceX"/>
                </div>
                <div className="col">Starlink Group 2-3</div>
                <div className="col rimuv">Falcon 9</div>
                <div className="col time">Dec 2021</div> 
                <div className="col">Vandenberg Space Force Base, United States</div> 
                <div className="col status-tbc">TBC</div>
            </div>
        </>
    )
}

export default SpaceXDepartures
