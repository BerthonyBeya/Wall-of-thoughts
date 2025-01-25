import { FaDeleteLeft } from "react-icons/fa6";
import { context } from "../../contextApi/MyContext";
import { useContext } from "react";
import "../ThoughtCard/ThoughtCard.css";

const Thought = ({ defaultValues }) => {
  const { setDefautThought } = useContext(context);

  const deleteHandler = () => {
    setDefautThought((current) => {
      const result = current.filter((thought) => {
        return thought.id !== defaultValues.id;
      });

      return result;
    });
  };

  return (
    <>
      <div>
        <div>
          <h3 className="thought-card__name">{defaultValues.personName}</h3>
          <FaDeleteLeft
            className="thought-card__logo"
            onClick={deleteHandler}
          />
        </div>
        <p>{defaultValues.personThought}</p>
      </div>
    </>
  );
};

export default Thought;
