import React from 'react';

function Profile({ first_name, last_name, cohort, business_name, street_address, city, state, zipcode, profile_image }) {
  return (
    <div>
      <h1>{first_name}</h1><h1>{last_name}</h1>
      <h1>{cohort}</h1>
      {business_name ? <h1>{business_name}</h1> : null}
      {profile_image ? <img alt={last_name} src={profile_image}></img> : null}
      <p>{business_name}</p>
      <button><a href='/'  >Login Page</a></button>

    </div>
  );
}

export default Profile;