import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";

export default class DemoApp extends React.Component {

  render() {
    return (
      <div>
        <FullCalendar
          headerToolbar={{
            left: "prev, next today",
            center: "title",
            right: "dayGridMonth, timeGridDay",
          }}
          plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
          initialView="dayGridMonth"
        />
      </div>
    );
  }
}


