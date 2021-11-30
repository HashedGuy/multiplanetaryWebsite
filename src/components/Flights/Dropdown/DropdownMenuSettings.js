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

function DropdownMenuSettings(props) {
    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);

    const [clickedOp, setClickedOp] = useState()

    // choosenOperator = clickedOp
   
    useEffect(() => {
      setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
    }, [])

    useEffect(() => {
      props.sendOperatorToChild(clickedOp)
      // props.sendLocationToChild(clickedOp)
    }, [clickedOp])
  
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
              setClickedOp(props.slug)
              console.log()
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
              leftIcon="&#128184;"
              rightIcon=">"
              goToMenu="settings"
              slug="private-companies"
            >
              Private companies
            </DropdownItem>
            
            <DropdownItem
              leftIcon="&#127970;"
              rightIcon=">"
              goToMenu="animals"
              slug="space-agencies"
            >
              Space Agencies
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
              slug="OperatorX"
            >
              <h3>Private companies</h3>
            </DropdownItem>

            <DropdownItem 
              leftIcon={<SpaceX/>}
              slug="spacex"
            >
              SpaceX
            </DropdownItem>

            <DropdownItem 
                slug="arianespace"
                leftIcon={<ArianeS/>}
            >
              Ariane Space
            </DropdownItem>

            <DropdownItem 
                slug="rocket-lab"
                leftIcon={<RocketLab/>}
            >
              Rocket Lab
            </DropdownItem>
            <DropdownItem 
                slug="astra-space"
                leftIcon={<AstraS/>}
            >
              Astra Space
            </DropdownItem>

            <DropdownItem 
                slug="united-launch-alliance-ula"
                leftIcon={<ULA/>}
            >
              United Launch Allience
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
            <DropdownItem 
              goToMenu="main" 
              leftIcon="<"
              slug="OperatorX"
            >
              <h3>Space agencies</h3>
            </DropdownItem>
            
            <DropdownItem 
              leftIcon={<Roscosmos/>}
              slug="roscosmos"
            >
              Roscosmos
            </DropdownItem>
            <DropdownItem 
              leftIcon={<NASA/>}
              slug="nasa"
            >
              NASA
            </DropdownItem>
            <DropdownItem 
              leftIcon={<ESA/>}
              slug="esa"
            >
              ESA
            </DropdownItem>
            <DropdownItem 
              leftIcon={<CNSA/>}
              slug="cnsa"
            >
              CNSA
            </DropdownItem>
          </div>
        </CSSTransition>
      </div>
    );
  }

export default DropdownMenuSettings
