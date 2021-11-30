import React, { useState, useEffect, useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import { ReactComponent as SpaceX } from '../../../img/svg/spcx.svg'
import { ReactComponent as AstraS } from '../../../img/svg/astra-space.svg'
import { ReactComponent as ArianeS } from '../../../img/svg/ariane-space.svg'
import { ReactComponent as RocketLab } from '../../../img/svg/rocket-lab.svg'
import { ReactComponent as ULA } from '../../../img/svg/ula.svg'
import { ReactComponent as Roscosmos } from '../../../img/svg/roscosmos.svg'
import { ReactComponent as NASA } from '../../../img/svg/nasa.svg'
import { ReactComponent as ESA } from '../../../img/svg/esa.svg'
import { ReactComponent as CNSA } from '../../../img/svg/cnsa+.svg'
import { ReactComponent as TSS } from '../../../img/svg/tss.svg'
import { ReactComponent as ISS } from '../../../img/svg/ISS.svg'

function DropdownMenu(props) {
    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);

    const [clickedLoc, setClickedLoc] = useState()
    const [closeDropdownMenu, setCloseDropdownMenu] = useState()
  
    useEffect(() => {
      setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
    }, [])

    useEffect(() => {
      // props.setOpen(closeDropdownMenu)
      // setCloseDropdownMenu(!closeDropdownMenu)
    }, [clickedLoc])

    useEffect(() => {
      props.sendLocationToChild(clickedLoc)
    }, [clickedLoc])
  
    function calcHeight(el) {
      const height = el.offsetHeight;
      setMenuHeight(height);
    }
  
    function DropdownItem(props) {
      return (
        <a
          className={props.notReady ? "menuX-item disableClick" : "menuX-item"} 
          onClick={() => {
            props.goToMenu && setActiveMenu(props.goToMenu)
            setClickedLoc(props.slug)
            // props.closeMenu(true)
          }}
        >
          <span className="icon-button">{props.leftIcon}</span>
          {props.children}
          <span className="icon-right">{props.rightIcon}</span>
        </a>
      );
    }
  
    return (
      <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
  
        <CSSTransition
          in={activeMenu === 'main'}
          timeout={500}
          classNames="menuX-primary"
          unmountOnExit
          onEnter={calcHeight}>
          <div className="menuX">
            <DropdownItem
              leftIcon="&#127757;"
              slug="earth"
            >
                Earth
            </DropdownItem>
            <DropdownItem
                leftIcon="&#127765;"
                slug="moon"
              >
                  Moon
            </DropdownItem>
            <DropdownItem
              leftIcon="&#128752;"
              slug="space-station"
              rightIcon=">"
              goToMenu="settings">
              Space Stations
            </DropdownItem>
  
          </div>
        </CSSTransition>
  
        <CSSTransition
          in={activeMenu === 'settings'}
          timeout={500}
          classNames="menuX-secondary"
          unmountOnExit
          onEnter={calcHeight}>
          <div className="menuX">
            <DropdownItem 
              goToMenu="main" 
              leftIcon="<"
              slug="space-station"
            >
              <h3>Space Stations</h3>
            </DropdownItem>

            <DropdownItem 
              leftIcon={<ISS/>}
              slug="iss"
            >
              International Space St
            </DropdownItem>

            <DropdownItem 
              leftIcon={<TSS/>}
              slug="tss"
            >
              Tiangong Space St
            </DropdownItem>

            <DropdownItem 
              leftIcon="&#128752;" 
              notReady={true}
              slug="lunar-gateway"
            >
              Lunar Gateway
            </DropdownItem>

            <DropdownItem 
              leftIcon="&#128752;" 
              notReady={true}
              slug="orbital-reef"
            >
              Orbital Reef
            </DropdownItem>

          </div>
        </CSSTransition>
  
        <CSSTransition
          in={activeMenu === 'animals'}
          timeout={500}
          classNames="menuX-secondary"
          unmountOnExit
          onEnter={calcHeight}>
          <div className="menuX">
            <DropdownItem goToMenu="main" leftIcon="<">
              <h3>Operators</h3>
            </DropdownItem>
            <DropdownItem leftIcon={<SpaceX/>}>SpaceX</DropdownItem>
            <DropdownItem leftIcon={<ArianeS/>}>Ariane Space</DropdownItem>
            <DropdownItem leftIcon={<RocketLab/>}>Rocket Lab</DropdownItem>
            <DropdownItem leftIcon={<AstraS/>}>Astra Space</DropdownItem>
            <DropdownItem leftIcon={<ULA/>}>United Launch Allience</DropdownItem>
            <DropdownItem leftIcon={<Roscosmos/>}>Roscosmos</DropdownItem>
            <DropdownItem leftIcon={<NASA/>}>NASA</DropdownItem>
            <DropdownItem leftIcon={<ESA/>}>ESA</DropdownItem>
            <DropdownItem leftIcon={<CNSA/>}>CNSA</DropdownItem>
          </div>
        </CSSTransition>
      </div>
    );
  }

export default DropdownMenu
