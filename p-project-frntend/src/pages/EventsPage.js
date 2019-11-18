import React, { useEffect, useState } from 'react';
// import { DropdownButton, Dropdown } from 'react-bootstrap';
// import { Form, FormGroup, Input } from 'reactstrap';
import LocationPage from './LocationPage.js'
import Api from '../Api/UserAPI.js'

const EventsPage = () => {
  const [eventinfo, theEventInfo] = useState(0);

  const events = async () => {
    const event = await Api.fetchEvent()
    if (eventinfo === 0) {
      theEventInfo(event)
    }
  }
  useEffect(() => {
    events()
  })
  if (eventinfo) {
    console.log(eventinfo)
    console.log(eventinfo['0'])
    console.log(eventinfo[0].event_name)
  }
  return (
    <div>
      <p>Event Name {eventinfo && eventinfo[0].event_name}</p>
      <LocationPage/>
      <p>Date {eventinfo && eventinfo[0].date_start}</p>
      <p>Start Time {eventinfo && eventinfo[0].time_start}</p>
    </div>
  );
}

export default EventsPage;
