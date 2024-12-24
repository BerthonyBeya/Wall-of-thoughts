import { FaDeleteLeft } from "react-icons/fa6";
import "./ThoughtCard.css";

const ThoughtCard = () => {
  return (
    <div className="thought-card">
      <div>Card 1</div>
      <div>
        <div>
          <h3 className="thought-card__name">Berthony</h3>
          <FaDeleteLeft className="thought-card__logo" />
        </div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui
          voluptate velit deserunt veniam dignissimos consequatur
          necessitatibus! Itaque accusantium veritatis incidunt eum sint!
          Voluptatibus vel nisi ipsum
        </p>
      </div>
      <div>Card 3</div>
      <div>Card 4</div>
      <div>Card 5</div>
      <div>Card 6</div>
    </div>
  );
};

export default ThoughtCard;
