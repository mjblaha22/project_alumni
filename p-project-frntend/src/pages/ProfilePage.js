import React, { useEffect, useState } from 'react';
import UserNav from '../components/UserNav.js';
// import { DropdownButton, Dropdown } from 'react-bootstrap';
// import { Form, FormGroup, Input } from 'reactstrap';
import Profile from '../components/Profile.js'
import Api from '../Api/UserAPI.js'
// import App from '../App.js'

const ProfilePage = (props) => {
  console.log(props.userid)
  const [userinfo, theUserInfo] = useState(0);
  const profile = async () => {
    const profileinfo = await Api.fetchProfile(props.userid)
    if (userinfo === 0) {
      theUserInfo(profileinfo)
    }
  }
  useEffect(() => {
    profile()
    console.log(userinfo)
  })
  return (
    <div>
    
    <div>
      <h1> Welcome Alumni </h1>
    </div>
    <div>
      <div >
      <h1>{userinfo.first_name}</h1>
      <h1>{userinfo.last_name}</h1>
      </div>
      <img className='homepic' src={userinfo.profile_image}></img>
    </div>
    </div>
  );
}

export default ProfilePage;
