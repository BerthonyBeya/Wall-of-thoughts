import { BsChatTextFill } from "react-icons/bs";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="background-container">
        <h1 className="title">THE WALL OF THOUGHTS</h1>
        <form className="textbox">
          <div className="textbox__name">
            <label className="textbox__label" htmlFor="">Enter your name:</label>
            <input className="textbox__text"  type="text" placeholder="here" />
          </div>
          <textarea
            className="textbox__thought"
            placeholder="What's on your mind, nigga?"
          />
        </form>
      </div>
    </div>
  );
}

export default App;
