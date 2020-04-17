import React from "react";
import PropTypes from "prop-types";

import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";

const Users = ({ users, loading }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};
UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};
// Styling in jsx
const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gridGap: "1rem",
};

export default Users;
