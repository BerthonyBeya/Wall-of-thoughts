import { useNavigate } from "react-router-dom";
import { context } from "../../contextApi/MyContext";
import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";

import "./Button.css";

const Button = ({ title }) => {
  const { personName, personThought, setDefautThought } = useContext(context);

  const navigateTo = useNavigate();

  const addThoughtHandler = () => {
    if (!personName || !personThought) {
      alert("Field is empty!");
    } else {
      //
      const thought = {
        id: uuidv4(),
        personName: personName,
        personThought: personThought,
      };

      setDefautThought((current) => {
        return [...current, thought];
      });

      navigateTo("/allThoughts");
    }
  };

  const AllThoughtsHandler = () => {
    navigateTo("/allThoughts");
  };

  const backHomeHandler = () => {
    navigateTo("/");
  };

  const addingEventListenerHandler = (event) => {
    event.preventDefault();

    if (title === "Add thought") {
      return addThoughtHandler();
    }

    if (title === "Check all thoughts") {
      return AllThoughtsHandler();
    }

    if (title === "Back Home") {
      return backHomeHandler();
    }
  };

  return (
    <button
      onClick={addingEventListenerHandler}
      className="all-thoughts-button"
    >
      {title}
    </button>
  );
};

export default Button;
