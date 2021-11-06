import React from 'react'
import APISample from './APISample'

function APIs() {
    return (
        <>
          <APISample 
                    name = "WhoIsInSpace (WIIS) API"
                    type = "REST, Open API"
                    endpoint = "1"
                    content_type = "JSON"
                    auth = {false}
                    active = {true}
                    status = "active"

                    description = "WhoIsInSpace (WIIS) API is one of the APIs offered by the Multiplanetary. The WIIS API returns the current number of people in space, the unique data about them, such as bio, image, space agency, the satellite they're in etc. To access the data through the WIIS API is easy, and no authorization required. The WIIS API returns all response data as a JSON object, and takes no inputs."
                    query_info = "In general, queries can be issued to the system with the following URI format: "
          />  

          <APISample
                    name = "SpaceGarage API" 
                    type = "REST"
                    endpoint = "3"
                    content_type = "JSON"
                    auth = {true}
                    active = {false}
                    status = 'in production'
          />
        </>
    )
}

export default APIs
