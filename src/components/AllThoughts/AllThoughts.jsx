import "./AllThoughts.css";
import "../../App.css";
import Button from "../Button/Button";
import ThoughtCard from "../ThoughtCard/ThoughtCard";

const AllThoughts = () => {
  return (
    <div className="background-container">
      <div className="allThoughts-title-button">
        <h1 className="title">THE WALL OF THOUGHTS</h1>
        <Button title={"Back Home"} />
      </div>
      <div className="thoughtCard-container">
        <ThoughtCard />
      </div>
    </div>
  );
};

export default AllThoughts;
