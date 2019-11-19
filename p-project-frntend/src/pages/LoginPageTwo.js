import React, { useEffect, useState } from 'react';
// import { DropdownButton, Dropdown } from 'react-bootstrap';
// import { Form, FormGroup, Input } from 'reactstrap';
import LoginForm from '../components/LoginForm.js'
import Api from '../Api/UserAPI.js'
import App from '../App.js'

const LoginPageTwo = () => {
  const [usersinfo, theUsersInfo] = useState(0);
  const profiles = async () => {
    const profileinfo = await Api.fetchAllAlumni()
    if (usersinfo === 0) {
      theUsersInfo(profileinfo)
    }
  }
  useEffect(() => {
    profiles()
    console.log(usersinfo)
  })

  return (
    <div>
      <LoginForm ></LoginForm>
      {/* {localStorage.getItem('token') ? true : false && 'Hello your logged in'}
      <p> Welcome Alumni </p>
      <p>{userinfo.first_name}</p> 
      <p>{userinfo.last_name}</p>
      <img src={userinfo.profile_image}></img>
      <Profile {...this.state.userinfo}/> */}
    </div>
  );
}

export default LoginPageTwo;
