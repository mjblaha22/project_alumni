import React from 'react';
import LocationPage from '../pages/LocationPage.js'

function EventTeaser({id, event_place, event_discription, date_start, time_start, street_address, city, state, zipcode}) {
  console.log(event_place)
  return (
    <div>
      
      <LocationPage id={id} event_place={event_place} street_address={street_address} city={city} state={state}/>
      <h1>{event_place}</h1> 
      <h1>{date_start}</h1>
      <h1>{time_start}</h1>
      <h1>{street_address}</h1>
      <button><a href='/'  >Back</a></button>
    </div>
  )
}

export default EventTeaser