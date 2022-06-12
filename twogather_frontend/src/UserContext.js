import React, {useState, createContext} from "react";

const defaultData = {
  user_name: null,
  user_email: null,
  user_id: null,
  jwt_token: null,
  user_tags: null,
};

export const UserContext = createContext();

export const UserProvider = props => {
  const [data, setData] = useState(defaultData)

  return (
    <UserContext.Provider value={[data, setData]}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContext;
