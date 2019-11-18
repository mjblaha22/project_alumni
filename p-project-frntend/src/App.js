import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProfilePage from './pages/ProfilePage.js';
// import AddLocation from './pages/AddLocation.js'
import EventsPage from './pages/EventsPage.js';
import LocationPage from './pages/LocationPage.js';
import BusinessPage from './pages/BusinessPage.js';
import MessagesPage from './pages/MessagesPage.js';
import LoginPage from './pages/LoginPage.js';

function App() {
  let user = {
    userName: 'SledgeHammer',
    firstName: 'MICHAEL',
    lastName: 'BLAHA',
    password: 'Sledge',
    id: '1'
  }
  let location = {
    id: '1',
    location_name: 'Code Platoon',
    street_address: '125 S Clark St',
    city: 'Chicago',
    state: 'IL',
    country: 'USA'
  }
  let business = {
    id: '1'
  }
  return (
    <div>
      <Router>
        <div>
          <Route exact path='/' component={LoginPage} />
          <Route exact path="/profile" component={ProfilePage} />
          <Route exact path="/events" component={EventsPage} />
          <Route exact path="/business" component={BusinessPage} />
          <Route exact path="/events/location" component={LocationPage} />
          <Route exact path="/business/location" component={LocationPage} />
          <Route exact path="/messages" component={MessagesPage} />
        </div>
      </Router>
    </div>
  );
}

export default App;

{/* <ProfilePage user={user}/> */}
{/* <EventsPage />
<LocationPage map={location} />
<BusinessPage busi={business} /> */}
{/* <Route exact path="/login" component={Login} /> */}