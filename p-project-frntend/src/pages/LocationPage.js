import React, { Component, useEffect, useState } from 'react';
// import { DropdownButton, Dropdown } from 'react-bootstrap';
// import { Form, FormGroup, Input } from 'reactstrap';
import Api from '../Api/UserAPI.js'

const LocationPage = (props) => {
  const [locationinfo, setLocationInfo] = useState(0);
  let map = {
    id: props.id,
    location_name: props.event_place,
    street_address: props.street_address,
    city: props.city,
    state: props.state,
  }
  console.log(props.event_place)
  const location = async (props) => {
    const locateinfo = await Api.fetchLocation(props)
    console.log(locateinfo)
    if (locationinfo === 0) {
      setLocationInfo(locateinfo)
    }
  }
  useEffect(() => {
    location(props)
  })
  console.log(locationinfo)
  return (
    <div>
      <iframe
        width="400"
        height="250"
        frameBorder="0" style={{ 'border': 0 }}
        src={locationinfo} allowFullScreen>
      </iframe>
    </div>
  );

}
export default LocationPage;