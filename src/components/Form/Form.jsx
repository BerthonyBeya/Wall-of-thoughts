import Button from "../Button/Button";
import { useContext } from "react";
import { context } from "../../contextApi/MyContext";
import "../../App.css";

const Form = () => {
  const { personName, setPersonName, personThought, setPersonThought } =
    useContext(context);

  //* Getting name
  const nameHandler = (event) => {
    setPersonName(event.target.value);
  };

  //* Getting Thought
  const thoughtHandler = (event) => {
    setPersonThought(event.target.value);
  };

  return (
    <form className="textbox">
      <div className="textbox__name">
        <label className="textbox__label">Enter your name:</label>
        <input
          value={personName}
          onChange={nameHandler}
          className="textbox__text"
          type="text"
          placeholder="right here"
          required
        />
      </div>
      <textarea
        onChange={thoughtHandler}
        value={personThought}
        required
        className="textbox__thought"
        placeholder="What's on your mind today?"
      />
      <Button title={"Add thought"} />
    </form>
  );
};

export default Form;
