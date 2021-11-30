import React, {useState} from 'react'
import logo from '../../img/logo-white.png'
import {Link} from 'react-router-dom'

function Navbar() {

  const [navbar, setNavbar] = useState(false)
  const removeNavbar = () => {
    if (window.scrollY >= 82) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }
  window.addEventListener('scroll', removeNavbar)

  const [isActive, setActive] = useState(false)
  const mobileMenu = () => {
    setActive(!isActive)
  }

  return (
    <header 
      className={navbar ? "scrolling-active" : ""}>
        <div className="container">
            <nav className="nav">
                <Link to='/'><span className="hide-me-logo"><img src={logo} alt="Mars logo" className="logo"/></span>
                    <h4 className="logo-title"><span className="hide-me">multiplanetary</span></h4></Link>
                <ul 
                    className={`nav-list ${isActive ? "active" : ""}`}
                >
                    <li className="nav-item"><Link to='./martianphotos'>MartianPhotos</Link></li>
                    <li className="nav-item"><Link to='/whoareinspace'>WhoAreInSpace</Link></li>
                    <li className="nav-item not-ready">RocketScience</li>
                    <li className="nav-item"><Link to='/flights'>Flights</Link></li>
                    <li className="nav-item"><Link to='./api'>API</Link></li>
                </ul>
                <div 
                    className={`hamburger ${isActive ? "active" : ""}`} 
                    onClick={mobileMenu}
                >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </nav>
        </div>
    </header>
  )
}

export default Navbar
