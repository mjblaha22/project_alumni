import React, { Component } from 'react';
// import { Form, FormGroup, Input } from 'reactstrap';
// import images from '../config/images.json'

import EventsList from '../components/EventsList.js'
import Api from '../Api/UserAPI.js'
import { element } from 'prop-types';


class EventsPage extends Component {
  state = {
    events: null,
  }
  componentDidMount() {
    Api.fetchEvent()
      .then(data => {
        this.setState({
          events: data
        })
        console.log(data)
      })
  }
  render() {
    return (
      <div>
        <h3>ALL EVENTS</h3>
        <EventsList events={this.state.events} />
      </div>
    );
  }
}

export default EventsPage;