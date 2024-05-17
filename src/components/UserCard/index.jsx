import React from "react";
import "./index.scss";

const UserCard = ({ id, name, email }) => {
  return (
    <div className="user-card" key={id}>
      <div>Full Name: {name}</div>
      <div>Email: {email}</div>
    </div>
  );
};

export default UserCard;
