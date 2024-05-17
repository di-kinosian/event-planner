import React, { useState } from "react";
import { participants } from "../../helpers/participants";
import UserCard from "../../components/UserCard";
import "./index.scss";

const ViewPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(participants);

  const handleSearch = (term) => {
    setSearchTerm(term);
    const results = participants.filter(
      (participant) =>
        participant.fullName.toLowerCase().includes(term.toLowerCase()) ||
        participant.email.toLowerCase().includes(term.toLowerCase()),
    );
    setSearchResults(results);
  };

  return (
    <>
      <h1>Event Participants</h1>
      <div className='view-wrapp'>
        <input
          className="input-serch"
          type="text"
          placeholder="Search by name or email"
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
        />
        <div className="users-container">
          {searchResults.map((participant) => (
            <UserCard
              key={participant.id}
              id={participant.id}
              name={participant.fullName}
              email={participant.email}
            ></UserCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default ViewPage;
