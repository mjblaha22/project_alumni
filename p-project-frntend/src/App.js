import React, { useEffect, useState } from 'react';
import Api from './Api/UserAPI.js'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import UserNav from './components/UserNav.js';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProfilePage from './pages/ProfilePage.js';
import AllProfiles from './pages/AllProfiles';
import AddLocation from './pages/AddLocation.js'
import EventsPage from './pages/EventsPage.js';
import LocationPage from './pages/LocationPage.js';
import BusinessPage from './pages/BusinessPage.js';
import MessagesPage from './pages/MessagesPage.js';
import { userInfo } from 'os';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(true)
  const [userName, setUserName] = useState(0)
  const [userPass, setUserPass] = useState(0)
  const [usersinfo, setUsersInfo] = useState(0)
  const [userid, setUserId] = useState(0)

  const profileSubmit = async (event) => {
    event.preventDefault()
    let user_name = event.target.user_name.value
    let password = event.target.password.value
    if (userPass === 0) {
      setUserPass(password)

      // setLoggedIn(true)
    }
    if (userName === 0) {
      setUserName(user_name)
    }
    console.log(password)
    console.log(userName)
  }
  const profiles = async () => {
    const profileinfo = await Api.fetchAllAlumni()
    if (usersinfo === 0) {

      setUsersInfo(profileinfo)
    }
  }
  const userCheck = () => {
    if (loggedIn === false) {
      for (let i = 0; i < usersinfo.length; i++) {
        if (usersinfo[i].user_name == userName && usersinfo[i].password == userPass) {
          setUserId(i)
          setLoggedIn(true)
        } else {
          console.log('nope')
        }
      }
    }
  }
  useEffect(() => {
    profiles()
  })
  useEffect(() => {
    userCheck()
  })


  if (!loggedIn) {
    return (
      <div className='loginform'>
        <Form onSubmit={profileSubmit} method="GET" id='test'>
          <FormGroup>
            <Label for="user_name" className="col-2 ml-3">Username</Label>
            <Input type="text" name="user_name" id="user_name" className="col-6 ml-3" placeholder="Sledge" />
          </FormGroup>
          <FormGroup>
            <Label for="password" className="col-2 ml-3">Password</Label>
            <Input type="password" name="password" id="password" className="col-6 ml-3" placeholder="codeplatoon" />
          </FormGroup>
          <Button type='submit' className="col-6 ml-3" form='test' >Submit</Button>
        </Form>
        {/* <a style={{ margin: '20px' }} href='/'>Back</a> */}
      </div>
    );
  } else {
    console.log('dude')
    return (
      <div>
        <Router>
          <div>
            <div>
              <UserNav />
            </div>
            <div>
              <Route exact path='/' render={(props) => <ProfilePage {...props} userid={userid + 1} loggedIn={loggedIn} />} />
            </div>
            <div>
              <Route exact path="/alumni" component={AllProfiles} />
            </div>
            <Route exact path="/events" component={EventsPage} />
            <Route exact path="/business" component={BusinessPage} />
            <Route exact path="/addlocation" component={AddLocation} />
            <Route exact path="/business/location" component={LocationPage} />
            <div>
              <Route exact path="/messages" component={MessagesPage} />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}
export default App;
// state = {
//   user_name : null,
//   loggedIn : false,
//   // displayedForm : null,
// }


// handleLogin = async (e, data) => {
//   e.preventDefault();
//   await fetch('http://localhost:8000/alumni/user/', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(data)
//   })
//     .then(res => res.json())
//     .then(json => {
//       user = "authenticated"
//       localStorage.setItem('token', json.token);
//       this.setState({
//         loggedIn: true,
//         // displayed_form: '',
//         user_name: json.user.user_name
//       });

//     });
// };

// handleLogout = () => {
//   console.log("HERE")
//   localStorage.removeItem('token');
//   this.setState({
//     loggedIn: false,
//     user_name: ''
//   });
// };
// render ()  {
//   console.log(localStorage)
//   console.log(user)
//   console.log("APP STATEP ", this.state)
//   const renderLoginPage = (props) => {
//     return (
//       <LoginPage
//         history={props.history}
//         handleLogin={this.handleLogin}
//         userName={this.state.user_name}
//         loggedIn={this.state.loggedIn}
//         handleLogout={this.handleLogout}
//         />
//     )
//   }
//   const renderProfilePageTwo = (props) => {
//     return (
//       <ProfilePageTwo
//         history={props.history}
//         handleLogin={this.handleLogin}
//         userName={this.state.user_name}
//         loggedIn={this.state.loggedIn}
//         />
//     )
//   }

{/* <ProfilePage user={user}/> */ }
{/* <EventsPage />
<LocationPage map={location} />
<BusinessPage busi={business} /> */}
{/* <Route exact path="/login" component={Login} /> */ }