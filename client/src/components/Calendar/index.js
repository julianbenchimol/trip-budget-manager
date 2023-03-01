import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";

export default class DemoApp extends React.Component {
  render() {
    return (
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        dateClick={this.handleDateClick}
      />
    );
  }

  handleDateClick = (arg) => {
    // bind with an arrow function
    alert(arg.dateStr);
  };
}
