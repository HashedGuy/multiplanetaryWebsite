import React, {useState, useEffect} from 'react'

function SupportedOperators(props) {   

    const [clickedOp, setClickedOp] = useState('')

    useEffect(() => {
        props.sendOperatorToParent(clickedOp)
        // props.sendLocationToChild(clickedOp)
      }, [clickedOp])

    return (
        <div className="supported-operators">
            <h1>Available operators</h1>
            <div className="operators">
                <a onClick={()=>setClickedOp('spacex')}><img src={`logos/spacex.png`} className="supported-operators-logo" title="SpaceX"/></a>
                <a onClick={()=>setClickedOp('arianespace')}><img src={`logos/arianespace.png`} className="supported-operators-logo" title="ArianeSpace"/></a>
                <a onClick={()=>setClickedOp('rocket-lab')}><img src={`logos/rocket-lab.png`} className="supported-operators-logo" title="Rocket Lab"/></a>
                <a onClick={()=>setClickedOp('blue-origin')}><img src={`logos/blue-origin.png`} className="supported-operators-logo" title="Blue Origin"/></a>
                <a onClick={()=>setClickedOp('astra-space')}><img src={`logos/astra-space.png`} className="supported-operators-logo" title="Astra Space"/></a>
                <a onClick={()=>setClickedOp('roscosmos')}><img src={`logos/roscosmos.png`} className="supported-operators-logo" title="Roscosmos"/></a>
                <a onClick={()=>setClickedOp('united-launch-alliance-ula')}><img src={`logos/ula-white.png`} className="supported-operators-logo" title="United Launch Alliance"/></a>
                <a onClick={()=>setClickedOp('virgin-orbit')}><img src={`logos/virgin-orbit.png`} className="supported-operators-logo" title="Virgin Orbit (coming soon)"/></a>
                <a onClick={()=>setClickedOp('mitsubishi-heavy-industries')}><img src={`logos/mitsubishi-heavy-industries.png`} className="supported-operators-logo" title="Mitsubishi Heavy Industries (coming soon)"/></a>

            </div>
            
        </div>
    )
}

export default SupportedOperators
