import React, {useState} from 'react'
import {BounceLoader} from 'react-spinners'
import '../Flights/flights.css'
import Endpoint from './Endpoint'

const APISample = props => {
    
    const [hideParameters, setHideParameters] = useState(true)
    const [hideKeyPanel, setKeyPanel] = useState(false)
    const [epBox, setEpBox] = useState('mission')
    const [clickedBtn, setClickedBtn] = useState('mission')
    const space = <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
    const bigspace = <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>

    const showParameters = () => {
        setHideParameters(!hideParameters)
    }

    const showKeyPanel = () => {
        setKeyPanel(!hideKeyPanel)
    }

    return (
        <div className="api-container">
            <div className={props.active ? "api-box" : "api-box not-active-api"}>
                <div>
                    <h2 className="api-name">{props.name}</h2>
                    <div className = "api-features">
                        <h3>Type: {props.type}</h3>
                        <h3>Number of endpoints: {props.endpoints.length}</h3>
                        <h3>Response data type: {props.content_type}</h3>
                        <h3>Rate limiting: {props.rate_limit}</h3>
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
                    <a href={props.http_request} target="_blank" className="api-link">{props.http_request}</a>
                    <p style={{marginTop: '2em'}}>{props.fetch_info}</p>
                    <p className="json-box">
                        const fetchedData = ( ) => fetch(<span style={{color: 'darkorange'}}>'{props.http_request}'</span>)<br />
                                            {bigspace}.then(res => res.json( ))<br />
                                            {bigspace}.then(data => console.log(data.<span style={{color: 'darkorange'}}>number</span>))
                    </p>
                </div>

                {(props.endpoints.length > 1) ? 
                
                    <div className="endpoint">
                        <h2>Endpoints</h2>
                        <p>{props.endpoint_info}</p>
                        <div className="endpoint-box">
                            {props.endpoints.map(endpointX => (
                                <a className={clickedBtn === endpointX  ? "btn jst clckd": "btn jst"}
                                    key={endpointX}
                                    onClick={() => {
                                                    setEpBox(endpointX)
                                                    setClickedBtn(endpointX)
                                                    // setHoveredBtn(!hoveredBtn)
                                                    console.log(epBox)
                                                   }
                                               }
                                >
                                    {endpointX}
                                </a>
                            ))}
                        </div>
                        
                        {epBox === 'mission' ? 
                        <Endpoint
                                epBoxG = {epBox}
                                epBoxID = 'mission'                             
                                endpoint_info_paragraph = "Just add the [MISSION_NAME] in the end of the WAIS-X API base link. You will not only check if the mission is space right now, but also get all the useful data about the mission starting from their launch till their landing back to Earth. Checkout the available missions and their parameters in the diagram below:"
                                e_request = "https://mp-waisx.netlify.app/api/v1/[MISSION_NAME]/DEMO_KEY"
                                
                                epBoxes = {[
                                            {
                                                parameter: 'mission_name',
                                                example: 'crew-2',
                                                description: 'Data for SpaceX space missions. Always use small letters and kebab-case. See the list of available missions below.'
                                  
                                            }, 
                                            {
                                                parameter: 'api_key',
                                                example: 'sdhskja72873987v1',
                                                description: 'Multiplanetary API key for expanded usage'
                                            }
                                        ]}
                                
                                epParamBtn = 'missions'
                                epParams = {[
                                             {
                                                name: 'crew-1',
                                                operator: 'spcx'
                                             }, 
                                             {
                                                name: 'crew-2',
                                                operator: 'spcx'
                                             },
                                             {
                                                name: 'crew-3',
                                                operator: 'spcx'
                                             },
                                             {
                                                name: 'ms-18',
                                                operator: 'syz'
                                             },
                                             {
                                                name: 'ms-19',
                                                operator: 'syz'
                                             },
                                             {
                                                name: 'shenzhou-13',
                                                operator: 'shz'
                                             }
                                            ]}
                                
                                epParamKeys = {[
                                                  {
                                                   description: 'SpaceX Crew Missions',
                                                   operator: 'spcx'   
                                                  },
                                                  {
                                                      description: 'Soyuz Missions',
                                                      operator: 'syz'
                                                  },
                                                  {
                                                      description: 'Shenzhou Missions',
                                                      operator: 'shz'
                                                  }
                                              ]} 
                                epKeys = {[
                                            'mission_name', 
                                            'mission_type', 
                                            'mission_crew', 
                                            'launch_info', 
                                            'launched_from',
                                            'launch_rocket',
                                            'spacecraft',
                                            'launch_date',
                                            'launch_operator',
                                            'mission_destination',
                                            'station_name',
                                            'docked_ports',
                                            'landing_info',
                                            'landing_date',
                                            'landing_site',
                                            'status'
                                         ]}
                
                    /> : 

                    epBox === 'space_agency' ? 

                    <Endpoint 
                                epBoxG = {false}
                                epBoxID = 'space_agency'
                                endpoint_info_paragraph = "Thanks to [SPACE_AGENCY] endpoint, you can look for the astronatus of the specific space agencies, including commercial crews who are in space right now. Just follow the below-mentioned format to receive the data. The list of available space agencies is below:"
                                e_request = "https://mp-waisx.netlify.app/api/v1/[SPACE_AGENCY/DEMO_KEY]"
                                                             
                                epBoxes = {[
                                              {
                                                parameter: 'space_agency',
                                                example: 'NASA',
                                                description: 'Data for NASA crew missions. Always use small letters and kebab-case. See the list of available missions below.'                                  
                                              }, 
                                              {
                                                  parameter: 'api_key',
                                                  example: 'sdhskja72873987v1',
                                                  description: 'Multiplanetary API key for expanded usage'
                                              }
                                          ]}
                                
                                epParamBtn = 'Space agencies'
                                epParams = {[
                                    {
                                       name: 'ESA',
                                       operator: 'spcx'
                                    }, 
                                    {
                                       name: 'CNSA',
                                       operator: 'shz'
                                    },
                                    {
                                       name: 'Roscosmos',
                                       operator: 'syz'
                                    },
                                    {
                                       name: 'NASA',
                                       operator: 'shz'
                                    }
                                   ]}

                                epParamKeys = {[
                                    {
                                     description: 'European Space Agency',
                                     operator: 'spcx'   
                                    },
                                    {
                                        description: 'China National Space Administration',
                                        operator: 'shz'
                                    },
                                    {
                                        description: 'Roscosmos State Corporation for Space Activities',
                                        operator: 'syz'
                                    },
                                    {
                                        description: 'National Aeronautics and Space Administration',
                                        operator: 'shz'
                                    }
                                ]}

                            epKeys = {[
                                        'number_of_people_in_space',                                          
                                        'station', 
                                        'country_code',
                                        'bio', 
                                        'launch_craft',
                                        'name',
                                        'mission_name',                                    
                                        'img',
                                        'mission_type'
                                    ]} 
                                         
                    /> : 

                    epBox === 'space_station' ? 

                    <Endpoint   
                                epBoxG = {false}
                                epBoxID = 'space_station'                              
                                endpoint_info_paragraph = "The [SPACE_STATION] is another endpoint you can query people in space according to their destinations. The International Space Station is not the only destination, the astronauts arrive in. Follow the below mentioned the format and check out for more:"
                                e_request = "https://mp-waisx.netlify.app/api/v1/[SPACE_STATION/DEMO_KEY]" 
                                    
                                epBoxes = {[
                                              {
                                                parameter: 'space_station',
                                                example: 'ISS',
                                                description: 'Data for International Space Station. Always use small letters and kebab-case. See the list of available missions below.'
                                              }, 
                                              {
                                                  parameter: 'api_key',
                                                  example: 'sdhskja72873987v1',
                                                  description: 'Multiplanetary API key for expanded usage'
                                              }
                                          ]}
                                      
                                epParamBtn = 'Space stations'
                                epParams = {[
                                    {
                                       name: 'ISS',
                                       operator: 'syz'
                                    }, 
                                    {
                                       name: 'TSS',
                                       operator: 'shz'
                                    }
                                   ]}

                                epParamKeys = {[
                                    {
                                        description: 'International Space Station',
                                        operator: 'syz'
                                    },
                                    {
                                        description: 'Tiangong Space Station',
                                        operator: 'shz'
                                    }
                                ]}

                                epKeys = {[
                                            'crew',                                          
                                            'crew_capacity', 
                                            'status',
                                            'current_crew', 
                                            'docked_ships',
                                            'name'
                                        ]} 
                    /> : ''}

                </div>
                  : ''}

                { (props.endpoints.length < 2) ?
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
                        {space}<span style={{color: 'darkorange'}}>"name"</span>: NAME, <br />
                        {space}<span style={{color: 'darkorange'}}>"craft"</span>: CRAFT_NAME, <br />
                        {space}<span style={{color: 'darkorange'}}>"country_code"</span>: NATIONALITY, <br />
                        {space}<span style={{color: 'darkorange'}}>"space_agency"</span>: SPACE_AGENCY, <br />
                        {space}<span style={{color: 'darkorange'}}>"bio"</span>: BIOGRAPHY, <br />
                        {space}<span style={{color: 'darkorange'}}>"img"</span>: IMG_SRC, <br />
                        {'}'}
                        
                    </p> 

                    
                </div> : '' }

                <h2>Rate Limiting</h2>
                <p>Considering the fact that we don't send people to space every day (yet!), I implemented slightly conservative rate-limit for fetching data to escape potential DDOS attacks, or unnecessary usage of the API. So, the current rate limit is <span style={{color: 'darkorange'}}>10 calls every minute</span>. If you need more than this limit for some reasons, feel free to <a href="mailto:arbus@multiplanetary.website">contact</a>.</p>

                <h2>Data Source & Support</h2>
                <p>I gather and update this data personally as launches and landing occur. There is no official source of data for this kind of thing. <br /> <br />
                Please feel free to <a href="mailto:arbus@multiplanetary.website">email me</a> to communicate any questions, concerns, or requests you may have about using this API, and I'll try to respond asap.</p>

                
                { props.api_key ? 
                <div className="api-key">
                    <a className="btn" onClick={showKeyPanel}>Generate API Key</a>
                    <form style={hideKeyPanel ? {} : {display: 'none'}}>
                        <h4>First name*</h4>
                        <input type="text"/>

                        <h4>Last name*</h4>
                        <input type="text"/>

                        <h4>Email*</h4>
                        <input type="text"/>

                        <h4>Application URL (optional)</h4>
                        <input type="text"/> <br />

                        <a className="btn">Submit</a>
                    </form>
                </div> : ''}

                <div className="close-btn">
                    <a className="btn" onClick={showParameters}>Close</a>
                </div>
                

            </div>
            
        </div>
    )
}

export default APISample
