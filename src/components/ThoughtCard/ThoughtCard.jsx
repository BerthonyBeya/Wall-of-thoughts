import Thought from "../Thought/Thought";
import "./ThoughtCard.css";
import { v4 as uuidv4 } from "uuid";

const ThoughtCard = () => {

  const defaultThoughts = [
    {
      personName: "Professor X",
      personThought:
        "Just because someone stumbles and loses their path, doesn’t mean they’re lost forever. :)",
    },
    {
      personName: "Berthony",
      personThought:
        "Challenges make life interesting and overcoming them makes life meaningful. So, don't give up! :)",
    },
  ];

  return (
    <div className="thought-card">
      {defaultThoughts.map((eachThought) => {
        return <Thought defaultThoughts={eachThought} key={uuidv4()}/>;
      })}
    </div>
  );
};

export default ThoughtCard;
