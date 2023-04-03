import { useState } from "react";
import moment from "moment";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Event } from "../types/Event";

const localizer = momentLocalizer(moment);

const CalendarPage = () => {
  const [events, setEvents] = useState<Event[]>([]);

  const handleSelect = ({ start, end }: any) => {
    const title = window.prompt("Enter event title:");
    if (title) {
      const newEvent: Event = {
        id: String(events.length + 1),
        title,
        start,
        end,
      };
      setEvents([...events, newEvent]);
    }
  };

  return (
    <div>
      <h1>My Calendar</h1>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        selectable
        onSelectSlot={handleSelect}
        style={{ height: "70vh" }}
      />
    </div>
  );
};

export default CalendarPage;

