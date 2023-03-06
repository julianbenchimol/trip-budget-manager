import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import axios from "../../utils/helpers";
import moment from "moment-timezone";


export default class DemoApp extends React.Component {
  componentDidMount() {
    this.refreshTrips();
  }

  refreshTrips() {
    axios.getTrips().then((resp) => {
      this.setState({
        eventSources: resp.data[0].trip.map((e) => {
          let start = moment(e.start).tz("UTC").format("YYYY-MM-DD");
          let end = moment(e.end).tz("UTC").add(1, "days").format("YYYY-MM-DD");
          return {
            ...e,
            start: start,
            end: end,
          };
        }),
      });
    });
  }

  handleEventClick = (event) => {
    this.setState({
      showCard: true,
    });
    this.handleTrip(event.event.extendedProps._id);
  };

  handleDateClick = () => {
    this.setState({
      showNewTrip: true,
    });
  };

  render() {
    return (
      <FullCalendar
        initialView="dayGridMonth"
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        editable={true}
        eventClick={this.handleEventClick}
        dateClick={this.handleDateClick}
        events={this.state.eventSources}
      />
    );
  }
}
