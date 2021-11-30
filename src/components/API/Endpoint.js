import React, {useState} from 'react'
import '../Flights/flights.css'

const Endpoint = props => {
    const [hideMissions, setMissions] = useState(false)
    const [hideKeys, setKeys] = useState(false)
    const [clickedBtn, setClickedBtn] = useState(props.epParamBtn)

    const showMissions = () => {
        setMissions(!hideMissions)
    }

    const showKeys = () => {
        setKeys(!hideKeys)
    }

    return (     
            
            <div className="endpoint-box">               
                <p>{props.endpoint_info_paragraph}</p>
                <a href={props.e_request} target="_blank" className="api-link">{props.e_request}</a>
                        
                <div className="m24">
                    <div className="headerX">        
                        <div className="col">Parameter</div>
                        <div className="col">Example</div>
                        <div className="col">Description</div>                            
                    </div>
                    
                    {props.epBoxes.map(epBox => (
                        <div className="row">                     
                                <div className="col">{epBox.parameter}</div>
                                <div className="col status-eit">{epBox.example}</div>
                                <div className="col">{epBox.description}</div>
                        </div>))}
                    
                </div>

                <a 
                    className={clickedBtn === props.epParamBtn ? "btn jst clckd" : "btn jst"} 
                    onClick={() => {
                        setClickedBtn(props.epParamBtn)
                            }}
                >
                    {props.epParamBtn}
                </a>
                <a 
                    className={clickedBtn === 'keys' ? "btn jst clckd" : "btn jst"} 
                    onClick={() => {
                        setClickedBtn('keys')
                            }}
                >
                    Keys
                </a>
                
                {clickedBtn === props.epParamBtn ? 
                    <div className="m25">
                        <div className="headerKey">    
                            <div className="m26">
                                {props.epParams.map(epParam => (
                                    <span 
                                        className={
                                                    epParam.operator === 'spcx' ? "x25 spcx" : 
                                                    epParam.operator === 'syz' ? "x25 syz" :
                                                    epParam.operator === 'shz' ? "x25 shz" : "x25"}>
                                        {epParam.name}
                                    </span> 
                                ))}
                            </div>
                            <div className="keys">
                                {props.epParamKeys.map(epParamKey => (
                                    <span className="desc-keys">
                                        <span 
                                            className={
                                                    epParamKey.operator === 'spcx' ? "spcxG" :
                                                    epParamKey.operator === 'syz' ? "syzG" : 
                                                    epParamKey.operator === 'shz' ? "shzG" : ''}>
                                            ⦿
                                        </span>
                                        {epParamKey.description}
                                    </span>
                                ))}                                    
                            </div>                         
                        </div>
                                            
                    </div> 
                : ''}
                                            
                {clickedBtn === 'keys' ? 
                    <div className="m25">
                        <div className="headerX">    
                            <div className="m26">
                                {props.epKeys.map(epKey => (
                                    <span className="x25">{epKey}</span>    
                                ))}
                            </div>                         
                        </div>
                                
                    </div> 
                : ''}
                
            </div> 
        
        )}

export default Endpoint
