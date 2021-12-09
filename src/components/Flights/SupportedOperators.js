import React from 'react'

function SupportedOperators() {
    return (
        <div className="supported-operators">
            <h1>Available operators</h1>
            <div className="operators">
                <a><img src={`logos/spacex.png`} className="supported-operators-logo" title="SpaceX" alt="spacex"/></a>
                <a><img src={`logos/arianespace.png`} className="supported-operators-logo" title="ArianeSpace" alt="ariane-space"/></a>
                <a><img src={`logos/rocket-lab.png`} className="supported-operators-logo" title="Rocket Lab" alt="rocket-lab"/></a>
                <a><img src={`logos/blue-origin.png`} className="supported-operators-logo" title="Blue Origin" alt="blue-origin"/></a>
                <a><img src={`logos/astra-space.png`} className="supported-operators-logo" title="Astra Space" alt="astra-space"/></a>
                <a><img src={`logos/roscosmos.png`} className="supported-operators-logo" title="Roscosmos" alt="roscosmos"/></a>
                <a><img src={`logos/ula-white.png`} className="supported-operators-logo" title="United Launch Alliance" alt="united-launch-alliance"/></a>
                <a><img src={`logos/virgin-orbit.png`} className="supported-operators-logo soon" title="Virgin Orbit (coming soon)" alt="virgin-orbit"/></a>

            </div>
            
        </div>
    )
}

export default SupportedOperators
