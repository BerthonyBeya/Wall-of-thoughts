import Button from "../Button/Button";
import Form from "../Form/Form";
import Footer from "../Footer/Footer";
import "../../App.css";

const Home = () => {
  return (
    <>
      <div className="background-container">
        <h1 className="title">THE WALL OF THOUGHTS</h1>
        <Form />
        <Button title={"Check all thoughts"} />
      </div>
      <Footer />
    </>
  );
};

export default Home;
