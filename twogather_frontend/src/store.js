import React from "react";

const initialValue = {
  user_name: null,
  user_email: null,
  user_id: null,
  user_tags: null,
  user_events: null,
};


const UserContext = React.createContext(initialValue);

export default UserContext;
