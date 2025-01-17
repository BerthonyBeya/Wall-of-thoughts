import { createContext, useState } from "react";

export const context = createContext();

export const GlobalProvider = ({ children }) => {
  const [personName, setPersonName] = useState("");
  const [personThought, setPersonThought] = useState("");

  return (
    <context.Provider
      value={{ personName, setPersonName, personThought, setPersonThought }}
    >
      {children}
    </context.Provider>
  );
};
