import React from 'react'
import {Link} from 'react-router-dom'

function Footer() {
    return (
        <footer>
            <nav className="nav-footer">
                <ul>
                    <li className="nav-item-footer"><Link to='/martianphotos'><span className="remove">Martian</span>Photos</Link></li>
                    <li className="nav-item-footer"><Link to='/peopleinspace'>PeopleInSpace</Link></li>
                    <li className="nav-item-footer not-ready">SatellitePass</li>
                    <li className="nav-item-footer not-ready"><span className="remove">Space</span>Garage</li>
                    <li className="nav-item-footer not-ready"><Link to='/martianphotos'>Doc<span className="remove">umentation</span></Link></li>
                </ul>
            </nav>
            <div className="project-name">
                <p className="copyright">multiplanetary © 2021</p>
            </div>
        </footer>
    )
}

export default Footer