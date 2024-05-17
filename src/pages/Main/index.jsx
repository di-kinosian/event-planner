import React, { useEffect, useState } from "react";
import EventCard from "../../components/EventCard";
import "./index.scss";

const MainPage = () => {
  const [events, setEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetch(process.env.PUBLIC_URL + "/events.json")
      .then((response) => response.json())
      .then((data) => {
        setEvents(data.events);
        setSearchResults(data.events);
      })
      .catch((error) => console.error("Error loading events:", error));
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
    const results = events.filter(
      (event) =>
        event.title.toLowerCase().includes(term.toLowerCase()) ||
        event.date.includes(term) ||
        event.organizer.toLowerCase().includes(term.toLowerCase()),
    );
    setSearchResults(results);
  };

  return (
    <>
      <h1>Events</h1>
      <div className="view-wrapp">
        <input
          className="input-serch"
          type="text"
          placeholder="Search title/date(yyyy-mm-dd) or organizer"
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
        />
        <div className="events-container">
          {searchResults?.map((event) => (
            <EventCard
              key={event.id}
              title={event.title}
              description={event.description}
              date={event.date}
              organizer={event.organizer}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default MainPage;
