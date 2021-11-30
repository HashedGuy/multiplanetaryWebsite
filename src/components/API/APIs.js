import React from 'react'
import APISample from './APISample'
import Endpoint from './Endpoint'

function APIs() {
    return (
        <>
          <APISample 
                    name = "WhoAreInSpace (WAIS) API"
                    type = "REST, Open API"
                    endpoints = {['base']}
                    content_type = "JSON"
                    auth = {false}
                    rate_limit = "10 calls/minute"
                    active = {true}
                    status = "active"

                    description = "WhoAreInSpace (WAIS) API is one of the APIs offered by the Multiplanetary. The WAIS API returns the current number of people in space, the unique data about them, such as bio, image, space agency, the satellite they're in etc. To access the data through the WAIS API is easy, and no authorization required. The WAIS API returns all response data as a JSON object, and takes no inputs."
                    query_info = "In general, queries can be issued to the system with the following URI format: "
                    http_request = "https://multiplanatery-api.netlify.app/api/wais"
                    fetch_info = "The following example is the fetch( ) method to receive data from the WAIS API, and console logs 'the number' of people in space:"

                    api_key = {false}
          />  

          <APISample
                    name = "WAIS-X API" 
                    type = "REST"
                    endpoints = {['mission', 'space_station', 'space_agency']}
                    content_type = "JSON"
                    auth = {true}
                    rate_limit = 'TBA'
                    active = {true}
                    status = 'active'

                    endpoint_info = "The WAIS-X API gives you enough flexibility to search for specific queries related to the people in space right now. Thanks to its endpoints, you can look for people in space either by searching for the mission, space station, or space agencies. Let's dive into each of them for easier queries."

                    description = "WhoAreInSpace-X (WAIS-X) API is one of the APIs offered by the Multiplanetary. The WAIS-X API returns ... To access the data through the WAIS API is easy, all you need to do is to sign up for an API key to access and use WAIS-X services. The WAIS-X API returns all response data as a JSON object, and takes no inputs."
                    query_info = "In general, queries can be issued to the system with the following URI format: "
                    http_request = "https://mp-waisx.netlify.app/api/v1/base"
                    fetch_info = "The following example is the fetch( ) method to receive data from the WAIS API, and console logs 'the number' of people in space:"
                                       
                    api_key = {true}
          />

          <APISample
                    name = "SpaceGarage API" 
                    type = "REST"
                    endpoints = {["A", "B", "C"]}
                    content_type = "JSON"
                    auth = {true}
                    rate_limit = 'TBA'
                    active = {false}
                    status = 'in production'
          />
        </>
    )
}

export default APIs
