import React from 'react'
import MainComponent from './components/HomePage/MainContent'
import MartianPhotos from './components/MartianPhotos/MartianPhotos'
import PeopleInSpace from './components/PeopleInSpace/PeopleInSpace'
import API from './components/API/API'
import Flights from './components/Flights/Flights'
import RocketScience from './components/RocketScience/RocketScience'
import BehindScenes from './components/BehindScenes/BehindScenes'
import {Route} from 'react-router-dom'
import Navbar from './components/HomePage/Navbar'
import Footer from './components/HomePage/Footer'

function App() {
    return (
        <>
            <Navbar />            
            <Route exact path='/' component={MainComponent}/>
            <Route exact path='/martianphotos' component={MartianPhotos}/>
            <Route exact path='/whoareinspace' component={PeopleInSpace}/>
            <Route exact path='/api' component={API}/>
            <Route exact path='/flights' component={Flights}/>
            <Route exact path='/rocketscience' component={RocketScience}/>
            <Route exact path='/behindscenes' component={BehindScenes}/>
            <Footer /> 
                              
        </>
    )
}
export default App