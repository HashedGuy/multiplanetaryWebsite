import React, {useState} from 'react'
import {BounceLoader} from 'react-spinners'

const APISample = props => {

    const [hideParameters, setHideParameters] = useState(true)
    const space = <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
    const bigspace = <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>

    // const apiDetails = document.querySelector('.api-details')

    const showParameters = () => {
        setHideParameters(!hideParameters)
    }

    return (
        <div className="api-container">
            <div className={props.active ? "api-box" : "api-box not-active-api"}>
                <div>
                    <h2 className="api-name">{props.name}</h2>
                    <div className = "api-features">
                        <h3>Type: {props.type}</h3>
                        <h3>Number of endpoints: {props.endpoint}</h3>
                        <h3>Response data type: {props.content_type}</h3>
                        <h3>Authorization-required: {props.auth ? 'Yes' : 'No'}</h3>
                        <h3>Status: <span>&nbsp;</span>
                            {props.status} <span>&nbsp;</span>
                            {props.status === 'active' ?
                                            <BounceLoader size={10} margin-top={2} color='green'/> : <BounceLoader size={10} margin-top={2} color='red'/>
                                            }
                        </h3>
                    </div>
                    
                </div>
                <div>
                    <a className={props.active ? "btn" : "btn not-ready"} onClick={showParameters}>{props.active ? 'How to use' : 'Coming soon'}</a>
                </div>
                
            </div>

            <div 
                className="api-details" 
                style={hideParameters ? {display:'none'} : {}}
            >
                <div className="api-description">
                    <h2>Description</h2>
                    <p>{props.description}</p>
                </div>
                <div className="api-parameters">
                    <h2>HTTP Request</h2>
                    <p>{props.query_info}</p>
                    <a href="https://multiplanatery-api.netlify.app/api/basic-api" target="_blank" className="api-link">https://multiplanatery-api.netlify.app/api/basic-api</a>
                    <p style={{marginTop: '2em'}}>The following example is the fetch( ) method to receive data from PeopleInSpace API, and console logs 'the number' of people in space:</p>
                    <p className="json-box">
                        const fetchedData = ( ) => fetch(<span style={{color: 'darkorange'}}>'https://multiplanatery-api.netlify.app/api/basic-api'</span>)<br />
                                            {bigspace}.then(res => res.json( ))<br />
                                            {bigspace}.then(data => console.log(data.<span style={{color: 'darkorange'}}>number</span>))
                    </p>
                </div>
                <div className="api-query">
                    <h2>JSON Response</h2>
                    <p>Fetching data from the base API will result in the following JSON response: </p>
                    <p className="json-box">                                        
                        {'{'} <br />
                        {space}<span style={{color: 'darkorange'}}>"message</span>": "success", <br />
                        {space}<span style={{color: 'darkorange'}}>"number"</span>: NUMBER_OF_PEOPLE_IN_SPACE, <br />
                        {space}<span style={{color: 'darkorange'}}>"people"</span>: {'['} {'{'}...{'}'},{'['} {'{'}...{'}'},...{']'}<br />
                        {'}'}
                    </p>

                    <p>The 'people' array presents the following information: </p>

                    <p className="json-box">                                        
                        
                         {'{'} <br />
                        {space}<span style={{color: 'darkorange'}}>"id"</span>: ID_NUMBER, <br />
                        {space}<span style={{color: 'darkorange'}}>"craft"</span>: CRAFT_NAME, <br />
                        {space}<span style={{color: 'darkorange'}}>"country_code"</span>: NATIONALITY, <br />
                        {space}<span style={{color: 'darkorange'}}>"space_agency"</span>: SPACE_AGENCY, <br />
                        {space}<span style={{color: 'darkorange'}}>"bio"</span>: BIOGRAPHY, <br />
                        {space}<span style={{color: 'darkorange'}}>"img"</span>: IMG_SRC, <br />
                        {'}'}
                        
                    </p>

                    <h2>Rate Limiting</h2>
                    <p>Considering the fact that we don't send people to space every day (yet!), I implemented slightly conservative rate-limit for fetching data to escape potential DDOS attacks, or unnecessary usage of the API. So, the current rate limit is <span style={{color: 'darkorange'}}>10 calls every minute</span>. If you need more than this limit for some reasons, feel free to <a href="mailto:arbus@multiplanetary.website">contact</a>.</p>
                    
                    <h2>Data Source & Support</h2>
                    <p>I gather and update this data personally as launches and landing occur. There is no official source of data for this kind of thing. <br /> <br />
                     Please feel free to <a href="mailto:arbus@multiplanetary.website">email me</a> to communicate any questions, concerns, or requests you may have about using this API, and I'll try to respond asap.</p>

                </div>

                <div className="close-btn">
                    <a className="btn" onClick={showParameters}>Close</a>
                </div>
                

            </div>
            
        </div>
    )
}

export default APISample
