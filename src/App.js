import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllThoughts from "./components/AllThoughts/AllThoughts";
import Home from "./components/Home/Home";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/allThoughts" Component={AllThoughts} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
