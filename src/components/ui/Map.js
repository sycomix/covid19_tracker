import React from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'

const mapStyles = {
  width: '100%',
  maxWidth: '600px',
  height: '500px',
};

const MapContainer = (props) => {
  const { lat, lng } = props

  return (
    <div>
      {
        lat & lng
          ? (
            <Map
              google={props.google}
              zoom={14}
              style={mapStyles}
              initialCenter={{ lat, lng }}
            >
              <Marker position={{ lat, lng }} />
            </Map>
          )
          : null
      }
    </div>
  )
}

export default GoogleApiWrapper({
  apiKey: process.env.GATSBY_GOOGLE_MAPS_API_KEY,
})(MapContainer)
