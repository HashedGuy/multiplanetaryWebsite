import React, {useState, useEffect} from 'react'
import moment from 'moment'
import Dropdown from './Dropdown/Dropdown'
import './Dropdown/Dropdown.css'
import DropdownArrival from './Dropdown/DropdownArrival'

import Animation from '../RocketScience/Animation'
import ISSDeparture from './Routes/ISSDeparture'
import TSSDeparture from './Routes/TSSDeparture'
import MoonDeparture from './Routes/MoonDeparture'
import MoonArrivals from './Routes/MoonArrivals'
import ISSArrivals from './Routes/ISSArrivals'
import TSSArrivals from './Routes/TSSArrivals'

import {BounceLoader, BeatLoader} from 'react-spinners'
import SpaceXDepartures from './Routes/SpaceXDepartures'
import SupportedOperators from './SupportedOperators'

function Schedule() {
    document.title = 'Multiplanetary Flights'    
    const [flights, setFlights] = useState([])
    const [clicked, setClicked] = useState(true)
    const [clickedX, setClickedX] = useState(true)
    const [clickedOperator, setClickedOperator] = useState()
    const [clickedLocation, setClickedLocation] = useState('earth')
    const [clickedOperatorA, setClickedOperatorA] = useState()
    const [clickedLocationA, setClickedLocationA] = useState('earth')
    const [bigger, setBigger] = useState(false)
    const [departureBigger, setDepartureBigger] = useState(false)
    const [isLoading, setLoading] = useState(false)

    const sendOperatorToParent = (index) => { // the callback
        setClickedOperator(index);
      };

    const sendLocationToParent = (index) => { // the callback
        setClickedLocation(index);
      };
    
    const sendOperatorToParentA = (index) => { // the callback
        setClickedOperatorA(index);
      };

    const sendLocationToParentA = (index) => { // the callback
        setClickedLocationA(index);
      };

    useEffect(() => {
        setLoading(true)
        fetch('https://fdo.rocketlaunch.live/json/launches/next/5')
            .then(res => res.json())
            .then(data => {
                
                // console.log(data.result)
                setFlights(data.result)
                setLoading(false)
            })                
    }, [])

    console.log(clickedLocation)
    console.log(clickedOperator)

    console.log(clickedLocationA)
    console.log(clickedOperatorA)
    return (
        <>
         <Animation
            activeAnimationX = {bigger}  
            activeAnimation = {departureBigger}  
        />
        <div className="schedule">
            <div className="schedules">
                <div className="departurePro" style={departureBigger ? {flex: 0, opacity: .4} : {}}>           
                <div 
                    className="departure"                    
                >

                    <Dropdown 
                        title="Departures"
                        sendOperatorToParent={sendOperatorToParent}
                        sendLocationToParent={sendLocationToParent}
                    />

                        <div className="departure-features-xtra">
                        {clicked ? 
                            <p>The current flight table shows the departures from the <span style={{textTransform: 'capitalize'}}> 
                            {
                                clickedLocation ? ` ${clickedLocation.toLowerCase()}` :

                                (clickedLocation === undefined) ? ' Earth'
                                : ''
                            }</span>
                            
                            {
                                clickedOperator ? `  operated by ${clickedOperator.toLocaleUpperCase()}` :

                                (clickedOperator === undefined) ? ''
                                : ''
                            }   .<br/> <span>By clicking the 
                            {
                                clickedLocation === 'moon' ? ' \u{1F314} ' 
                                
                                :

                                (clickedLocation === 'space-station') || (clickedLocation === 'iss') || (clickedLocation === 'tss') ? ' \u{1F6F0} ' 
                                
                                :
                                    ' \u{1F30D} '
                            
                            } 
                             you can easily change the departure location.</span></p>
                            : ''}
                        </div> 
                    
                    <section className="schedule-box">
                        <div className="headerX">                            
                            <div className="col">Operator</div>
                            <div className="col">Mission</div>
                            <div className="col rimuv">Vehicle</div>
                            <div className="col">Date/UTC</div>
                            <div className="col">Launch site</div>                      
                            <div className="col">Status</div>
                        </div>
                        {
                                isLoading ? <BeatLoader size={10} color='green' loading /> : 
                                clickedOperator === 'OperatorX' ?
                                'Choose one of the available commercial operators or the space agencies for the departure location'
                                :

                                // clickedOperator === 'spacex' ? 
                                // <SpaceXDepartures />
                                // :
                                
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
                                    <div className="col rimuv">{flight.vehicle.name}</div>
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
                                        <img 
                                            className="operator-logo" 
                                            src={
                                                flight.provider.slug === 'arianespace' ?                                                
                                                `logos/arianespace.png`
                                                :

                                                flight.provider.slug === 'astra-space' ?                                                
                                                `logos/astra-space.png`
                                                :

                                                flight.provider.slug === 'blue-origin' ?                                                
                                                `logos/blue-origin.png`
                                                :

                                                flight.provider.slug === 'mitsubishi-heavy-industries' ?                                                
                                                `logos/mitsubishi-heavy-industries.png`
                                                :

                                                flight.provider.slug === 'roscosmos' ?                                                
                                                `logos/roscosmos.png`
                                                :

                                                flight.provider.slug === 'spacex' ?                                                
                                                `logos/spacex.png`
                                                :

                                                flight.provider.slug === 'united-launch-alliance-ula' ?                                                
                                                `logos/united-launch-alliance-ula.png`
                                                :

                                                flight.provider.slug === 'china' ?                                                
                                                `logos/cnsa.png`
                                                :

                                                flight.provider.slug === 'virgin-orbit' ?                                                
                                                `logos/virgin-orbit.png`
                                                :
                                                
                                                `logos/rocket_logo.png`

                                                
                                            } 
                                            title={flight.provider.name}/>
                                    </div>
                                    <div className="col">{flight.name}</div>
                                    <div className="col rimuv">{flight.vehicle.name}</div>
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
                    className={departureBigger ? "biggerBtn blockedBtn rimuv" : "biggerBtn rimuv"}
                    onClick={() => setBigger(!bigger)}
                    title={!bigger ? "make it larger":"make it smaller"}
                >
                    {bigger ? "<" : ">"}
                </a>
                </div>
                
                <div className="arrivalsPro" style={bigger ? {flex: 0, opacity: .4} : {}}>
                    <a 
                        className={bigger ? "biggerBtn blockedBtn rimuv" : "biggerBtn rimuv"}
                        onClick={() => setDepartureBigger(!departureBigger)}
                        title={!departureBigger ? "make it larger":"make it smaller"}
                    >
                        {!departureBigger ? "<" : ">"}
                    </a>
                    <div className="arrivals">

                        <DropdownArrival 
                            title="Arrivals"
                            sendOperatorToParentA={sendOperatorToParentA}
                            sendLocationToParentA={sendLocationToParentA}
                        >

                        </DropdownArrival>

                        <div className={bigger ? "departure-features-xtra smaller" : "departure-features-xtra"}>
                        {clickedX ? 
                            <p>The current flight table shows the arrivals for the  <span style={{textTransform: 'capitalize'}}>
                            {
                                clickedLocationA ? ` ${clickedLocationA.toLowerCase()}` :

                                (clickedLocationA === undefined) ? ' Earth'
                                : ''
                            }</span>
                            
                            {
                                clickedOperatorA ? `  operated by ${clickedOperatorA.toLocaleUpperCase()}` :

                                (clickedOperatorA === undefined) ? ''
                                : ''
                            }   .<br/> <span>By clicking the 
                            {
                                clickedLocationA === 'moon' ? ' \u{1F314} ' 
                                
                                :

                                (clickedLocationA === 'space-station') || (clickedLocationA === 'iss') || (clickedLocationA === 'tss') ? ' \u{1F6F0} ' 
                                
                                :
                                    ' \u{1F30D} '
                            
                            } 
                             you can easily change the arrival location.</span></p>
                            : ''}
                            </div> 

                        <section className="schedule-box">
                            <div className="headerX">                            
                                <div className="col">Operator</div>
                                <div className="col">Mission</div>
                                <div className="col rimuv">Vehicle</div>
                                <div className="col">Date/UTC</div>
                                <div className="col">Departs from</div>                      
                                <div className="col">Status</div>
                            </div>
                            {}
                            {clickedOperatorA === 'OperatorX' ?
                                'Choose one of the available commercial operators or the space agencies as the arrival location.'
                                :
                                clickedOperatorA === 'private-companies' ?
                                'Choose one of the available commercial operators as the arrival location.'
                                :
                                clickedOperatorA === 'space-agencies' ?
                                'Choose one of the available space agencies as the arrival location.'
                                :
                                ``
                            }
                            {
                            clickedLocationA === 'moon' ?
                            <MoonArrivals />

                            :
                            clickedLocationA === 'space-station' ?
                            `Choose one of the available space stations for the arrival location.`

                            :
                            clickedLocationA === 'iss' ?
                            <ISSArrivals />

                            :
                            clickedLocationA === 'tss' ?
                            <TSSArrivals />

                            :
                            <>
                                <ISSDeparture />
                                <TSSDeparture />
                            </>

                        } 
                            
                        </section>
                    </div>                        
                </div>
            </div>            
        </div>
        <SupportedOperators 
            sendOperatorToParent={sendOperatorToParent}
        />
        </>
    )
}

export default Schedule
