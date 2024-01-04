"use client";

import { useState, createContext } from "react";

const { RxAvatar } = require("react-icons/rx");

export const UserContext = createContext({
  username: "test_user",
  avatar: <RxAvatar />,
});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
//   const [isLoading, setIsLoading] = useState(true);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
