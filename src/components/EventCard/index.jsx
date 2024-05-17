import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

const EventCard = ({ title, description, date, organizer }) => {
  return (
    <div className="event-card">
      <div className="card-info">
        <h3>{title}</h3>
        <p title={description}>{description}</p>
      </div>

      <div className="actions">
        <Link to="/registration">Registration</Link>
        <Link to="/view">View</Link>
      </div>
    </div>
  );
};

export default EventCard;
