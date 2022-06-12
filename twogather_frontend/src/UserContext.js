import React, { useState, createContext } from "react";

const defaultData = {
  user_name: "LETS GOO",
  user_email: null,
  user_id: null,
  jwt_token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NTUwOTA2NzYsImlhdCI6MTY1NTA2MTg3NiwiaWQiOjMzLCJpc3MiOiIyZ2F0aGVyLWF1dGgiLCJqdGkiOiIycnJ2YzBmaWZmOThsZ3ZsMDgwMDAwbzQiLCJuYmYiOjE2NTUwNjE4NzZ9.iFPg9uyG2jwasj_RuIXBd_TApiIE6ohkTU4onObZIRc",
  user_tags: null,
};

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [data, setData] = useState(defaultData);

  return (
    <UserContext.Provider value={[data, setData]}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
