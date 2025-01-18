import Thought from "../Thought/Thought";
import "./ThoughtCard.css";
import { context } from "../../contextApi/MyContext";
import { useContext } from "react";


const ThoughtCard = () => {
  const { defaultThoughts } = useContext(context);

  return (
    <div className="thought-card">
      {defaultThoughts.map((eachThought) => {
        return <Thought defaultThoughts={eachThought} key={eachThought.id} />;
      })}
    </div>
  );
};

export default ThoughtCard;
