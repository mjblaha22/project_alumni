import React, { useEffect, useState } from 'react';
// import { DropdownButton, Dropdown } from 'react-bootstrap';
// import { Form, FormGroup, Input } from 'reactstrap';
import Profile from '../components/Profile.js'
import Api from '../Api/UserAPI.js'
import App from '../App.js'

const ProfilePage = () => {
  const [userinfo, theUserInfo] = useState(0);
  // let token = localStorage.getItem('token')
  let userid = 1
  const profile = async () => {
    const profileinfo = await Api.fetchProfile(userid)
    if (userinfo === 0){
      theUserInfo(profileinfo)
    }
  }
  console.log(userinfo)
  useEffect(() => {
    profile()
    console.log(userinfo)
  })
  return (
    <div>
      {/* {localStorage.getItem('token') ? true : false && 'Hello your logged in'} */}
      <p> Welcome Alumni </p>
      <h1>{userinfo.first_name}</h1> 
      <p>{userinfo.last_name}</p>
      <img src={userinfo.profile_image}></img>
      <Profile {...this.state.userinfo}/>
    </div>
  );
}

export default ProfilePage;
