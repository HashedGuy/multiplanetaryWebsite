import React, {useState} from 'react'
import ThreeD from './ThreeD'
import Gravity from './Gravity'
import './rs.css'


function RocketScience() {
    document.title = "It's a Rocket Science!"
    return (
        <>
            <ThreeD />
        </>
    )
}

export default RocketScience