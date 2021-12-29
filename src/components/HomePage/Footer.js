import React from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'

function Footer() {
    return (
        <footer>
            <nav className="nav-footer">
                <ul>
                    <li className="nav-item-footer"><Link to='/martianphotos'><span className="remove">Martian</span>Photos</Link></li>
                    <li className="nav-item-footer"><Link to='/whoareinspace'><span className='rmv-ft'>WhoAre</span>InSpace</Link></li>
                    <li className="nav-item-footer"><Link to='/rocketscience'><span className='rmv-ft'>Rocket</span>Science</Link></li>
                    <li className="nav-item-footer"><Link to='/flights'>Flights</Link></li>
                    {/* <li className="nav-item-footer not-ready"><Link to='/api'>API</Link></li> */}
                    <li className="nav-item-footer"><Link to='/behindscenes'>BehindScenes</Link></li>
                </ul>
            </nav>
            <div className="project-name">
                <p className="copyright">multiplanetary © 2021</p>
            </div>
        </footer>
    )
}

export default Footer