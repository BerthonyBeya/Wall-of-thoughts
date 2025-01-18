import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const context = createContext();

export const GlobalProvider = ({ children }) => {
  const [personName, setPersonName] = useState("");
  const [personThought, setPersonThought] = useState("");
  const [defaultThoughts, setDefautThought] = useState([
    {
      id: uuidv4(),
      personName: "Professor X",
      personThought:
        "Just because someone stumbles and loses their path, doesn’t mean they’re lost forever. :)",
    },
    {
      id: uuidv4(),
      personName: "Berthony",
      personThought:
        "Challenges make life interesting, and overcoming them makes life meaningful. So, don't give up! :)",
    },
  ]);

  return (
    <context.Provider
      value={{
        personName,
        setPersonName,
        personThought,
        setPersonThought,
        defaultThoughts,
        setDefautThought,
      }}
    >
      {children}
    </context.Provider>
  );
};
