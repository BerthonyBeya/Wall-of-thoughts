import { useNavigate } from "react-router-dom";
import "./Button.css";

const Button = ({ title }) => {
  const navigateTo = useNavigate();

  const addThoughtHandler = () => {
    console.log("Add thought!");
  };

  const AllThoughtsHandler = () => {
    navigateTo("/allThoughts");
    console.log("Check all thoughts!");
  };

  const addingEventListenerHandler = (event) => {
    event.preventDefault();

    if (title === "Add thought") {
      return addThoughtHandler();
    }

    if (title === "Check all thoughts") {
      return AllThoughtsHandler();
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
