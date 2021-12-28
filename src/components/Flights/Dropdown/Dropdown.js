import React, { useState } from 'react';
import DropdownMenu from './DropdownMenu'
import DropdownMenuSettings from './DropdownMenuSettings.js'
import './Dropdown.css'
    
    function Dropdown(props) {
      const [clickedOperator, setClickedOperator] = useState()
      const [clickedLocation, setClickedLocation] = useState()
      
      const sendOperatorToChild = (index) => { // the callback
        setClickedOperator(index);
        props.sendOperatorToParent(index)
      };

      const sendLocationToChild = (index) => { // the callback
        setClickedLocation(index);
        props.sendLocationToParent(index)
      };

      return (
        <Navbar>
          <h1>{props.title}</h1>
          <div className="nav-listY">
            {
            clickedLocation === 'moon' ? 
              <NavItem 
                icon="&#127764;"
                slug="moon"
                title="Moon"
                clickedLocation={clickedLocation}
              >
                <DropdownMenu
                  sendLocationToChild={sendLocationToChild}
                />
              </NavItem>

           :
            (clickedLocation === 'space-station') || (clickedLocation === 'iss') || (clickedLocation === 'tss') ?
              <NavItem 
                icon="&#128752;"
                slug="space-station"
                title="Space station"
                clickedLocation={clickedLocation}
              >
                <DropdownMenu
                sendLocationToChild={sendLocationToChild}
              /> 
              </NavItem> 
           
           :
              <NavItem 
                icon="&#127757;"
                slug="earth"
                title="Location"
                clickedLocation={clickedLocation}
              >
                <DropdownMenu
                  sendLocationToChild={sendLocationToChild}
                />
              </NavItem> 
            }              

            {/* <NavItem icon="&#128640;" title="Operator">
              <DropdownMenuSettings 
                sendOperatorToChild={sendOperatorToChild}
                sendLocationToChild={sendLocationToChild}
              />
            </NavItem>  */}

          </div> 
          
        </Navbar>
      );
    }
    
    function Navbar(props) {
      return (
        <nav className="navbarX">
          <ul className="navbarX-nav">{props.children}</ul>
        </nav>
      );
    }
    
    function NavItem(props) {
      const [open, setOpen] = useState(false);
    
      return (
        <li className="navX-item">
          <a 
            className="icon-button" 
            title={props.title} 
            onClick={() => {
              setOpen(!open)
              }}
            >
            {props.icon}
          </a>
    
          {open && props.children}
        </li>
      );
    }
    

export default Dropdown
