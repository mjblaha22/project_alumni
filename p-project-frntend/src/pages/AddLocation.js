import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
// import EventsAPI from '../Api/UserAPI.js'
// event.preventDefault()
import Api from '../Api/UserAPI.js'

const AddEventPage = ({user, event}) => {

  submitEvent = async (event) => {
    let event_name = event.target.event_name.value;
    let date_start = event.target.date_start.value;
    let time_start = event.target.time_start.value;
    let street_address = event.target.street_address.value;
    let state =event.target.state.value;
    let zipcode = event.target.zipcode.value;
    let newEventObject = {
      event_name: event_name,
      date_start: date_start,
      time_start: time_start,
      street_address: street_address,
      state: state,
      zipcode: zipcode
    }
    // let response = Api.fetchProfile(newEventObject)
    // if (response.status === 'success') {
    //   this.setState({
    //     'status': response.status
    //   })
    // } else {
    //   console.log("HERE")
    //   this.setState({
    //     'status': response.status
    //   })
    // }
  }  
    return (
      <div>
        <Form onSubmit={submitEvent} id='add-event'>
          <FormGroup>
            <Label for="event_name" className="col-2 ml-3">Event Name</Label>
            <Input type="text" name="event_name" id="event_name" className="col-6 ml-3" placeholder="Event event_name..." />
          </FormGroup>
          <FormGroup>
            <Label for="date_start" className="col-2 ml-3">Date of Event</Label>
            <Input type="text" name="date_start" id="date_start" className="col-6 ml-3" placeholder="Event date_start..." />
          </FormGroup>
          <FormGroup>
            <Label for="time_start" className="col-2 ml-3">Start Time</Label>
            <Input type="textarea" name="time_start" id="time_start"  className="col-6 ml-3" placeholder="Event time_start..."/>
          </FormGroup>
          <Button type='submit' className="col-6 ml-3" form='add-event' >Submit</Button>
        </Form>
        <Link style={{margin:'20px'}} to='/'>Back</Link>
      </div>
    );
}


export default AddEventPage;
