import { FaDeleteLeft } from "react-icons/fa6";
import "../ThoughtCard/ThoughtCard.css";

const Thought = ({ defaultThoughts }) => {
  return (
    <>
      <div>
        <div>
          <h3 className="thought-card__name">{defaultThoughts.personName}</h3>
          <FaDeleteLeft className="thought-card__logo" />
        </div>
        <p>
          {defaultThoughts.personThought}
        </p>
      </div>
    </>
  );
};

export default Thought;
