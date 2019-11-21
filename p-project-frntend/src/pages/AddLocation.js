import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
// import EventsAPI from '../Api/UserAPI.js'
// event.preventDefault()
import Api from '../Api/UserAPI.js'

const AddEventPage = ({user, event}) => {

  const submitEvent = async (event) => {
    let event_place = event.target.event_place.value;
    let event_name = event.target.event_name.value;
    let event_discription = event.target.event_discription.value;
    let date_start = event.target.date_start.value;
    let time_start = event.target.time_start.value;
    let street_address = event.target.street_address.value;
    let state =event.target.state.value;
    let zipcode = event.target.zipcode.value;
    let newEventObject = {
      event_place: event_place,
      event_name: event_name,
      event_discription: event_discription,
      date_start: date_start,
      time_start: time_start,
      street_address: street_address,
      state: state,
      zipcode: zipcode
    }
    let response = Api.fetchProfile(newEventObject)
    if (response.status === 'success') {
      this.setState({
        'status': response.status
      })
    } else {
      console.log("HERE")
      this.setState({
        'status': response.status
      })
    }
  }  
    return (
      <div>
        <Form onSubmit={submitEvent} id='add-event'>
          <FormGroup>
            <Label for="event_place" className="col-2 ml-3">Place of Name</Label>
            <Input type="text" name="event_place" id="event_place" className="col-6 ml-3" placeholder="Place of Event..." />
          </FormGroup>
          <FormGroup>
            <Label for="event_discription" className="col-2 ml-3">Start Time</Label>
            <Input type="text" name="event_discription" id="event_discription"  className="col-6 ml-3" placeholder="Event Description..."/>
          </FormGroup>
          <FormGroup>
            <Label for="date_start" className="col-2 ml-3">Date of Event</Label>
            <Input type="text" name="date_start" id="date_start" className="col-6 ml-3" placeholder="Date of Event..." />
          </FormGroup>
          <FormGroup>
            <Label for="time_start" className="col-2 ml-3">Date of Event</Label>
            <Input type="text" name="time_start" id="time_start" className="col-6 ml-3" placeholder="Time of Event..." />
          </FormGroup>
          <FormGroup>
            <Label for="street_address" className="col-2 ml-3">Start Time</Label>
            <Input type="text" name="street_address" id="street_address"  className="col-6 ml-3" placeholder="Street Address..."/>
          </FormGroup>
          <FormGroup>
            <Label for="city" className="col-2 ml-3">Date of Event</Label>
            <Input type="text" name="city" id="city" className="col-6 ml-3" placeholder="City..." />
          </FormGroup>
          <FormGroup>
            <Label for="state" className="col-2 ml-3">Date of Event</Label>
            <Input type="text" name="state" id="state" className="col-6 ml-3" placeholder="State..." />
          </FormGroup>
          <FormGroup>
            <Label for="zipcode" className="col-2 ml-3">Date of Event</Label>
            <Input type="text" name="zipcode" id="zipcode" className="col-6 ml-3" placeholder="Zipcode..." />
          </FormGroup>
          <Button type='submit' className="col-6 ml-3" form='add-event' >Submit</Button>
        </Form>
        <Link style={{margin:'20px'}} to='/'>Back</Link>
      </div>
    );
}


export default AddEventPage;
