import React, { Component } from 'react';
import ProfileTeaser from './ProfileTeaser.js'


class ProfileList extends Component {
  render() {
    let { profiles, handleTitleClick } = this.props;
    const createTeaserProfiles = () => {
      return profiles.map((profile, id) => {
        console.log(profile)
        return <ProfileTeaser
          key={id}
          id={id}
          user_name={profile.user_name}
          first_name={profile.first_name}
          last_name={profile.last_name}
          business_name={profile.business_name}
          street_address={profile.street_address}
          city={profile.city}
          state={profile.state}
          profile_image={profile.profile_image}
          handleTitleClick={handleTitleClick}
        />
      })
    }

    if (profiles && profiles.length) {
      return (
        <div>
          {
            createTeaserProfiles()
          }
        </div>
      )
    } else {
      return <div>No Profiles</div>
    }
  }
}

export default ProfileList;
