import React, { useEffect, useState } from 'react';
// import { DropdownButton, Dropdown } from 'react-bootstrap';
// import { Form, FormGroup, Input } from 'reactstrap';
import Api from '../Api/UserAPI.js'

const ProfilePage = ({ user }) => {
  const [userinfo, theUserInfo] = useState(0);
  let userid = 1
  const profile = async () => {
    const profileinfo = await Api.fetchProfile(userid)
    if (userinfo === 0){
    theUserInfo(profileinfo)
    }
  }
  useEffect(() => {
     profile()
  })
  console.log(userinfo)
  return (
    <div>
      <p> Welcome Alumni {userinfo.first_name} {userinfo.last_name}</p>
      <p>You have messages!!</p>
      <p>You have been invited to</p>
    </div>
  );
}

export default ProfilePage;
