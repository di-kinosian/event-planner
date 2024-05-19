import React, { useMemo, useState } from "react";
import { participants } from "../../helpers/participants";
import UserCard from "../../components/UserCard";
import "./index.scss";
import { useLocation, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { formatDate } from "../../helpers/format";

const EventDetails = () => {
  const { eventId } = useParams();

  const { data, loading } = useFetch(
    `https://floating-spire-28797-0031414f3322.herokuapp.com/api/events/${eventId}`,
  );
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const participants = useMemo(() => {
    return (
      data?.participants.filter(
        (participant) =>
          participant.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          participant.email.toLowerCase().includes(searchTerm.toLowerCase()),
      ) || []
    );
  }, [data, searchTerm]);

  if (loading || !data) {
    return "Loading...";
  }

  return (
    <>
      <div className="event-details">
        <h1>{data.title}</h1>
        <p>{data.description}</p>
        <p>Date: {formatDate(data.eventDate)}</p>
        <p>Orginizer: {data.organizer}</p>
      </div>

      <div className="event-participants">
        <h3>Participants</h3>

        <input
          className="search"
          type="text"
          placeholder="Search by name or email"
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
        />

        {!participants.length ? (
          "No participants"
        ) : (
          <div className="event-participants-list">
            {participants.map((participant) => (
              <UserCard
                key={participant._id}
                id={participant._id}
                name={participant.name}
                email={participant.email}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default EventDetails;
