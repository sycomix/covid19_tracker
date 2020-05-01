import React from "react"
import { Map, GoogleApiWrapper, Marker } from "google-maps-react"
import styled from "@emotion/styled"

const mapStyles = {
  width: "100%",
  maxWidth: "600px",
  height: "250px",
}
const OverMap = styled.div`
  div:first-of-type {
    position: relative !important;
    border-radius: 10px;
  }
`

const MapContainer = props => {
  const { lat, lng } = props

  return (
    <OverMap>
      {lat & lng ? (
        <Map
          google={props.google}
          zoom={18}
          style={mapStyles}
          initialCenter={{ lat, lng }}
        >
          <Marker position={{ lat, lng }} />
        </Map>
      ) : null}
    </OverMap>
  )
}

export default GoogleApiWrapper({
  apiKey: process.env.GATSBY_GOOGLE_MAPS_API_KEY,
})(MapContainer)
