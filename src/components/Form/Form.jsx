import Button from "../Button/Button";
import { useState } from "react";
import "../../App.css";

const Form = () => {
  return (
    <form className="textbox">
      <div className="textbox__name">
        <label className="textbox__label">Enter your name:</label>
        <input className="textbox__text" type="text" placeholder="right here" />
      </div>
      <textarea
        className="textbox__thought"
        placeholder="What's on your mind, nigga?"
      />
      <Button title={"Add thought"} />
    </form>
  );
};

export default Form;
