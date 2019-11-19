import React from 'react'
// import { Link } from 'react-router-dom'
import LocationPage from '../pages/LocationPage.js'

function ProfileTeaser({ id, user_name, first_name, last_name, business_name, street_address, state, city, profile_image }) {
  return (
    <div>
      <LocationPage event_place={business_name} street_address={street_address} city={city} state={state}/>
      <img src={profile_image}></img>
      <h1>{first_name}</h1>
      <h1>{last_name}</h1>
      <h1>{user_name}</h1>
      <h1>{business_name}</h1>
      <button><a href='/'  >Back</a></button>
    </div>
  )
}

export default ProfileTeaser
{/* <Link to={`/profile/${id}`}>{first_name}</Link> */ }