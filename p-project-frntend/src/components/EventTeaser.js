import React from 'react';
import LocationPage from '../pages/LocationPage.js'

function EventTeaser({ id, event_place, event_discription, start_date, time_start, street_address, city, state, zipcode }) {
  console.log(event_discription)
  return (
    <div>
      <div >
        <LocationPage id={id} event_place={event_place} street_address={street_address} city={city} state={state} />
        <h1>Place : {event_place}</h1>
        <h1>{event_discription}</h1>
        <h1>Address : {street_address}</h1>
      </div>
      <div>
        <h1>Date of Event : {start_date}</h1>
        <h1>Start Time : {time_start}</h1>
      </div>
      <hr />
    </div>
  )
}

export default EventTeaser