import React, { useEffect, useState } from 'react';
// import { DropdownButton, Dropdown } from 'react-bootstrap';
// import { Form, FormGroup, Input } from 'reactstrap';
import Api from '../Api/UserAPI.js'

const LocationPage = () => {
  const [locationinfo, setLocationInfo] = useState(0);
  let map = {
    id: '1',
    location_name: 'Code Platoon',
    street_address: '125 S Clark St',
    city: 'Chicago',
    state: 'IL',
    country: 'USA'}
  const event = async () => {

  } 
  const location = async () => {
    const locateinfo = await Api.fetchLocation(map)
    console.log(locateinfo)
    if (locationinfo === 0) {
      setLocationInfo(locateinfo)
    }
  }
  useEffect(() => {
    location()
  })
  console.log(locationinfo)
  return (
    <div>
      <p> Location </p>
      <iframe
  width="600"
  height="450"
  frameBorder="0" style={{'border':0}}
  src={locationinfo} allowFullScreen>
</iframe>
    </div>
  );

}
export default LocationPage;