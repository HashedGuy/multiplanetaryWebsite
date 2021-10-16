import React from 'react'
import Home from './components/HomePage/Home'
import MartianPhotos from './components/MartianPhotos/MartianPhotos'
import {Route} from 'react-router-dom'
import Navbar from './components/HomePage/Navbar'
import Footer from './components/HomePage/Footer'

function App() {
    return (
        <>
            <Navbar />
            
            <Route exact path='/' component={Home}/>
            <Route exact path='/martianphotos' component={MartianPhotos}/>
            <Footer /> 
                              
        </>
    )
}
export default App