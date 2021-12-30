import React, {useState, useEffect} from 'react'

function SupportedOperators(props) {   

    const [clickedOp, setClickedOp] = useState('')

    useEffect(() => {
        props.sendOperatorToParent(clickedOp)
      }, [clickedOp])

    return (
        <div className="supported-operators">
            <h1>Available operators</h1>
            <div className="operators">
                <a onClick={()=>setClickedOp('spacex')}>
                    <img 
                        src={`logos/spacex.png`} 
                        className={(clickedOp === 'spacex') || (clickedOp === '') ? "supported-operators-logo" : "supported-operators-logo soon"} 
                        title="SpaceX"
                    />
                </a>

                <a onClick={()=>setClickedOp('arianespace')}>
                    <img 
                        src={`logos/arianespace.png`} 
                        className={(clickedOp === 'arianespace') || (clickedOp === '') ? "supported-operators-logo" : "supported-operators-logo soon"}
                        title="ArianeSpace"
                    />
                </a>

                <a onClick={()=>setClickedOp('rocket-lab')}>
                    <img 
                        src={`logos/rocket-lab.png`} 
                        className={(clickedOp === 'rocket-lab') || (clickedOp === '') ? "supported-operators-logo" : "supported-operators-logo soon"}
                        title="Rocket Lab"
                    />
                </a>

                <a onClick={()=>setClickedOp('blue-origin')}>
                    <img 
                        src={`logos/blue-origin.png`} 
                        className={(clickedOp === 'blue-origin') || (clickedOp === '') ? "supported-operators-logo" : "supported-operators-logo soon"}
                        title="Blue Origin"
                    />
                </a>

                <a onClick={()=>setClickedOp('astra-space')}>
                    <img 
                        src={`logos/astra-space.png`} 
                        className={(clickedOp === 'astra-space') || (clickedOp === '') ? "supported-operators-logo" : "supported-operators-logo soon"}
                        title="Astra Space"
                    />
                </a>
                <a onClick={()=>setClickedOp('roscosmos')}>
                    <img 
                        src={`logos/roscosmos.png`} 
                        className={(clickedOp === 'roscosmos') || (clickedOp === '') ? "supported-operators-logo" : "supported-operators-logo soon"}
                        title="Roscosmos"
                    />
                </a>

                <a onClick={()=>setClickedOp('united-launch-alliance-ula')}>
                    <img 
                        src={`logos/ula-white.png`} 
                        className={(clickedOp === 'united-launch-alliance-ula') || (clickedOp === '') ? "supported-operators-logo" : "supported-operators-logo soon"} 
                        title="United Launch Alliance"
                    />
                </a>

                <a onClick={()=>setClickedOp('virgin-orbit')}>
                    <img 
                        src={`logos/virgin-orbit.png`} 
                        className={(clickedOp === 'virgin-orbit') || (clickedOp === '') ? "supported-operators-logo" : "supported-operators-logo soon"}
                        title="Virgin Orbit (coming soon)"
                    />
                </a>

                <a onClick={()=>setClickedOp('mitsubishi-heavy-industries')}>
                    <img 
                        src={`logos/mitsubishi-heavy-industries.png`} 
                        className={(clickedOp === 'mitsubishi-heavy-industries') || (clickedOp === '') ? "supported-operators-logo" : "supported-operators-logo soon"} 
                        title="Mitsubishi Heavy Industries (coming soon)"
                    />
                </a>

                <a onClick={()=>setClickedOp('')} className={clickedOp === '' ? "supported-operators-logo rmv-filter soon" : "supported-operators-logo rmv-filter"}>Remove filter</a>

            </div>
            
        </div>
    )
}

export default SupportedOperators
