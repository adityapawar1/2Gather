import React from "react";

const initialValue = {
  user_name: null,
  user_email: null,
  user_id: null,
  jwt_token: null,
};

const UserContext = React.createContext(initialValue);

export default UserContext;
