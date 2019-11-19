import React, { Component } from 'react';
import EventTeaser from './EventTeaser.js'


class EventList extends Component {
  render() {
    let { events, handleTitleClick } = this.props;
    const createTeaserEvents = () => {
      return events.map((event, id) => {
        console.log(event)
        return <EventTeaser
          key={id}
          id={event.user_id}
          event_place={event.event_place}
          event_name={event.event_name}
          start_date={event.start_date}
          time_start={event.time_start}
          street_address={event.street_address}
          city={event.city}
          state={event.state}
          handleTitleClick={handleTitleClick}
        />
      })
    }

    if (events && events.length) {
      return (
        <div>
          {
            createTeaserEvents()
          }
        </div>
      )
    } else {
      return <div>No Events</div>
    }
  }
}

export default EventList;
