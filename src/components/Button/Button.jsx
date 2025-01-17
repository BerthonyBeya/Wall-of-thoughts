import { useNavigate } from "react-router-dom";
import { context } from "../../contextApi/MyContext";
import { useContext } from "react";
import "./Button.css";

const Button = ({ title }) => {
  const { personName, personThought } = useContext(context);

  const navigateTo = useNavigate();

  const addThoughtHandler = () => {
    console.log("Add thought!");
    /* console.log(personName);
    console.log(personThought); */
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
