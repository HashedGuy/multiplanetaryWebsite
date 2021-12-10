import React from 'react'

function SupportedOperators() {
    return (
        <div className="supported-operators">
            <h1>Available operators</h1>
            <div className="operators">
                <a><img src={`logos/spacex.png`} className="supported-operators-logo" title="SpaceX"/></a>
                <a><img src={`logos/arianespace.png`} className="supported-operators-logo" title="ArianeSpace"/></a>
                <a><img src={`logos/rocket-lab.png`} className="supported-operators-logo" title="Rocket Lab"/></a>
                <a><img src={`logos/blue-origin.png`} className="supported-operators-logo" title="Blue Origin"/></a>
                <a><img src={`logos/astra-space.png`} className="supported-operators-logo" title="Astra Space"/></a>
                <a><img src={`logos/roscosmos.png`} className="supported-operators-logo" title="Roscosmos"/></a>
                <a><img src={`logos/ula-white.png`} className="supported-operators-logo" title="United Launch Alliance"/></a>
                <a><img src={`logos/virgin-orbit.png`} className="supported-operators-logo soon" title="Virgin Orbit (coming soon)"/></a>
                <a><img src={`logos/mitsubishi-heavy-industries.png`} className="supported-operators-logo soon" title="Mitsubishi Heavy Industries (coming soon)"/></a>

            </div>
            
        </div>
    )
}

export default SupportedOperators
