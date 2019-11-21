import React, {FlexView} from 'react'
// import { Link } from 'react-router-dom'
import LocationPage from '../pages/LocationPage.js'

function ProfileTeaser({ id, user_name, first_name, last_name, cohort, business_name, street_address, state, city, profile_image }) {
  let full_name = (first_name + ' ' + last_name)
  return (
    <div>
    <div className='profile-teaser-container'>
      <LocationPage event_place={business_name} street_address={street_address} city={city} state={state}/>
      <img src={profile_image}></img>
      <h1>{full_name}</h1>
      <h1>Cohort:{cohort}</h1>
      <h1>{business_name}</h1>
    </div>
    <div>
      <hr/>
      </div>
      </div>

  )
}

export default ProfileTeaser
{/* <Link to={`/profile/${id}`}>{first_name}</Link> */ }