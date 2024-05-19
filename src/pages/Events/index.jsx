import React, { useState } from "react";
import EventCard from "../../components/EventCard";
import "./index.scss";
import Dropdown from "../../components/Dropdown";
import useFetch from "../../hooks/useFetch";

const options = [
  {
    value: "title?asc",
    label: "Title (A-Z)",
  },
  {
    value: "title?desc",
    label: "Title (Z-A)",
  },
  {
    value: "date?desc",
    label: "Date (Newest first)",
  },
  {
    value: "date?asc",
    label: "Date (Oldest first)",
  },
  {
    value: "organizer?asc",
    label: "Organizer (A-Z)",
  },
  {
    value: "organizer?desc",
    label: "Organizer (Z-A)",
  },
];

const EventsPage = () => {
  const [sorting, setSorting] = useState("title?asc");

  const { data, loading } = useFetch("https://floating-spire-28797-0031414f3322.herokuapp.com/api/events");

  return (
    <div className="page-content">
      <div className="page-panel">
        <h1>Events</h1>
        <div className="page-panel-sorter">
          <span>Sort by:</span>
          <Dropdown options={options} onSelect={setSorting} value={sorting} />
        </div>
      </div>
      {loading ? (
        "Loading..."
      ) : (
        <div className="events">
          {data?.events.map((event) => (
            <EventCard
              key={event._id}
              id={event._id}
              title={event.title}
              description={event.description}
              date={event.date}
              organizer={event.organizer}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default EventsPage;
