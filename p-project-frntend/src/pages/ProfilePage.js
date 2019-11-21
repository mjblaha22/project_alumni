import React, { useEffect, useState } from 'react';
import UserNav from '../components/UserNav.js';
// import { DropdownButton, Dropdown } from 'react-bootstrap';
// import { Form, FormGroup, Input } from 'reactstrap';
import Profile from '../components/Profile.js'
import Api from '../Api/UserAPI.js'
// import App from '../App.js'

const ProfilePage = (props) => {
  const [userinfo, theUserInfo] = useState(0);
  const profile = async () => {
    const profileinfo = await Api.fetchProfile(props.userid)
    if (userinfo === 0) {
      theUserInfo(profileinfo)
    }
  }
  
  useEffect(() => {
    profile()
  })
  return (
    <div>

      <div>
        <h3> Welcome {userinfo.first_name + ' ' + userinfo.last_name} </h3>
      </div>
      <div className='profile-teaser-container'>
        <img className='homepic' src={userinfo.profile_image}></img>
        <h1>Cohort: {userinfo.cohort}</h1>
        <h1>Business: {userinfo.business_name}</h1>
        <h1>City: {userinfo.city}</h1>
      </div>

    </div>
  );
}

export default ProfilePage;
