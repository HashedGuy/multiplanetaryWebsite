import React from 'react'
import Home from './components/HomePage/Home'
import MartianPhotos from './components/MartianPhotos/MartianPhotos'
import PeopleInSpace from './components/PeopleInSpace/PeopleInSpace'
import {Route} from 'react-router-dom'
import Navbar from './components/HomePage/Navbar'
import Footer from './components/HomePage/Footer'

function App() {
    return (
        <>
            <Navbar />            
            <Route exact path='/' component={Home}/>
            <Route exact path='/martianphotos' component={MartianPhotos}/>
            <Route exact path='/peopleinspace' component={PeopleInSpace}/>
            <Footer /> 
                              
        </>
    )
}
export default App