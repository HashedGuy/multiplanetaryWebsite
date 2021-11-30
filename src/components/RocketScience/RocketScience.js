import React from 'react'
import Animation from './Animation'
import ThreeD from './ThreeD'
import './rs.css'


function RocketScience() {
    document.title = "It's a Rocket Science!"
    return (
        <>
            {/* <Animation /> */}
            <ThreeD />
        </>
    )
}

export default RocketScience