import React from "react";
import { useContext } from "react";
import userContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(userContext);

  if (!user) return <h1>User Not Logged In</h1>;
  return (
    <div>
      profile : {user.username}
      <h1>More Component</h1>{" "}
    </div>
  );
}

export default Profile;
