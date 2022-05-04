import React from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
function UserId3() {
  let { userName } = useParams();

  return (
    <div>
      <NavLink to="/users">Back</NavLink>
      <h1>Users: {userName}</h1>
    </div>
  );
}

export default UserId3;
