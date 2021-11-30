import React, {useState, useEffect} from 'react'
import moment from 'moment'
import Dropdown from './Dropdown/Dropdown'
import './Dropdown/Dropdown.css'

import Animation from '../RocketScience/Animation'
import ISSDeparture from './Routes/ISSDeparture'
import TSSDeparture from './Routes/TSSDeparture'
import MoonDeparture from './Routes/MoonDeparture'

function Schedule() {
    document.title = 'Multiplanetary Flights'    
    const [flights, setFlights] = useState([])
    const [clicked, setClicked] = useState(true)
    const [clickedX, setClickedX] = useState(true)
    const [clickedOperator, setClickedOperator] = useState()
    const [clickedLocation, setClickedLocation] = useState('earth')
    const [bigger, setBigger] = useState(false)
    const [departureBigger, setDepartureBigger] = useState(false)

    const sendOperatorToParent = (index) => { // the callback
        // console.log(index);
        setClickedOperator(index);
      };

    const sendLocationToParent = (index) => { // the callback
        // console.log(index);
        setClickedLocation(index);
      };


    // fetch('https://ll.thespacedevs.com/2.2.0/launch/?limit=10&offset=6370')
    //     .then(res=>res.json())
    //     .then(data => console.log(data))

    useEffect(() => {
        fetch('https://fdo.rocketlaunch.live/json/launches/next/5')
            .then(res => res.json())
            .then(data => {
                console.log(data.result)
                setFlights(data.result)
            })                
    }, [])

    console.log(clickedLocation)
    console.log(clickedOperator)
    return (
        <>
         <Animation
            activeAnimationX = {bigger}  
            activeAnimation = {departureBigger}  
        />
        <div className="schedule">
            {/* <div className="aci"></div> */}

            <div className="schedules">
                <div className="departurePro" style={departureBigger ? {flex: 2, opacity: .4} : {}}>           
                <div 
                    className="departure"
                    
                >

                    <Dropdown 
                        title="Departures &#128640;"
                        sendOperatorToParent={sendOperatorToParent}
                        sendLocationToParent={sendLocationToParent}
                    />

                        <div className="departure-features-xtra">
                        {clicked ? 
                            <p>The current flight table shows the departures from the  
                            {
                                clickedLocation ? ` ${clickedLocation.toLocaleUpperCase()}` :

                                (clickedLocation === undefined) ? ''
                                : ''
                            }
                            
                            {
                                clickedOperator ? `  operated by ${clickedOperator.toLocaleUpperCase()}` :

                                (clickedOperator === undefined) ? ''
                                : ''
                            }   .<br/><br/> <span style={{opacity: .3}}>By clicking the 
                            {
                                clickedLocation === 'moon' ? ' \u{1F314} ' 
                                
                                :

                                (clickedLocation === 'space-station') || (clickedLocation === 'iss') || (clickedLocation === 'tss') ? ' \u{1F6F0} ' 
                                
                                :
                                    ' \u{1F30D} '
                            
                            } 
                             you can easily change the departure location. Or by clicking &#128640; icon you can filter out the flights from your preffed operator only .</span></p>
                            : ''}
                            {/* <a className="arrow" onClick={() => {setClicked(!clicked)}}>
                                {clicked ? '\u25B3' : '\u25BD'}
                            </a> */}
                        </div> 
                    
                    <section className="schedule-box">
                        <div className="headerX">                            
                            <div className="col">Operator</div>
                            <div className="col">Mission</div>
                            <div className="col">Vehicle</div>
                            <div className="col">Date/UTC</div>
                            <div className="col">Launch site</div>                      
                            <div className="col">Status</div>
                        </div>
                        {
                                clickedOperator === 'OperatorX' ?
                                'Choose one of the available commercial operators or the space agencies for the departure location'
                                :
                                clickedOperator === 'private-companies' ?
                                'Choose one of the available commercial operators for the departure location'
                                :
                                clickedOperator === 'space-agencies' ?
                                'Choose one of the available space agencies for the departure location'
                                :
                                clickedOperator ? 

                            flights.map(flight => (
                                flight.provider.slug === clickedOperator ? 
                                <div className="row" key={flight.id}>
                                    <div className="col">
                                        <img className="operator-logo" src={`logos/${flight.provider.slug}.png`} title={flight.provider.name}/>
                                    </div>
                                    <div className="col">{flight.name}</div>
                                    <div className="col">{flight.vehicle.name}</div>
                                    <div className="col time">{flight.win_open === null ? flight.date_str : moment(flight.win_open).format('lll') }</div>
                                    <div className="col">{flight.pad.location.name}, {flight.pad.location.country}</div>                                    
                                    
                                    <div className={flight.win_open === null ? "col status-tbc" : "col status"}>
                                    {flight.win_open === null ? "TBC" : "Confirmed"}
                                    </div>    
                                                                    
                                </div> 
                                : ``
                                
                            )) : 

                            (clickedLocation === 'earth') || (clickedLocation === undefined) ?

                            flights.map(flight => (
                                
                                <div className="row" key={flight.id}>
                                    <div className="col">
                                        <img className="operator-logo" src={`logos/${flight.provider.slug}.png`} title={flight.provider.name}/>
                                    </div>
                                    <div className="col">{flight.name}</div>
                                    <div className="col">{flight.vehicle.name}</div>
                                    <div className="col time">{flight.win_open === null ? flight.date_str : moment(flight.win_open).format('lll') }</div>
                                    <div className="col">{flight.pad.location.name}, {flight.pad.location.country}</div>                                    
                                    
                                    <div className={flight.win_open === null ? "col status-tbc" : "col status"}>
                                    {flight.win_open === null ? "TBC" : "Confirmed"}
                                    </div>    
                                                                    
                                </div>                                
                            )) :
                            
                            clickedLocation === 'moon' ? 
                            <MoonDeparture />
                            :

                            clickedLocation === 'iss' ?
                            <ISSDeparture />
                            :
                            clickedLocation === 'tss' ?
                            <TSSDeparture />
                            :
                            clickedLocation === 'space-station' ?
                            'Choose one of the available space stations for the departure location'
                            :
                            `No available departure flight from ${clickedLocation.toLocaleUpperCase()}.`             
                        }                            
                    </section>
                </div>
                <a 
                    className={departureBigger ? "biggerBtn blockedBtn" : "biggerBtn"}
                    onClick={() => setBigger(!bigger)}
                    title={!bigger ? "make it larger":"make it smaller"}
                >
                    {bigger ? "<" : ">"}
                </a>
                </div>
                
                <div className="arrivalsPro" style={bigger ? {flex: 2, opacity: .4} : {}}>
                    <a 
                        className={bigger ? "biggerBtn blockedBtn" : "biggerBtn"}
                        onClick={() => setDepartureBigger(!departureBigger)}
                        title={!departureBigger ? "make it larger":"make it smaller"}
                    >
                        {!departureBigger ? "<" : ">"}
                    </a>
                    <div className="arrivals">

                        <Dropdown 
                            title="Arrivals &#129666;"
                        >

                        </Dropdown>

                        <div className={bigger ? "departure-features-xtra smaller" : "departure-features-xtra"}>
                            {clickedX ? 
                                <p>The current flight table shows the arrivals for the planet Earth. <br/><br/> <span style={{opacity: .3}}>By clicking the
                                    {clickedLocation === 'moon' ? '\u1F314' : '\u1F30D'} you can easily change the arrival location. Or by clicking &#128640; icon you can filter out the flights from your preffed operator only .</span></p>
                                : ''}
                                {/* <a className="arrow" onClick={() => {setClickedX(!clickedX)}}>
                                    {clickedX ? '\u25B3' : '\u25BD'}
                                </a> */}
                            </div> 

                        <section className="schedule-box">
                            <div className="headerX">                            
                                <div className={bigger ? "col smaller" : "col"}>Operator</div>
                                <div className={bigger ? "col smaller" : "col"}>Mission</div>
                                <div className={bigger ? "col smaller" : "col"}>Vehicle</div>
                                <div className={bigger ? "col smaller" : "col"}>Date/UTC</div>
                                <div className={bigger ? "col smaller" : "col"}>Departs from</div>                      
                                <div className={bigger ? "col smaller" : "col"}>Status</div>
                            </div>
                            <ISSDeparture />
                            <TSSDeparture />
                        </section>
                    </div>                        
                </div>
            </div>

            
        </div>
        </>
    )
}

export default Schedule
