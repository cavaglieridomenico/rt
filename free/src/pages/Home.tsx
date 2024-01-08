import { useState } from "react";
import CustomButton from "../components/CustomButton";
import CustomButton2 from "../components/CustomButton2";
import CustomInput from "../components/CustomInput";

const Home = () => {
  const [name, setName] = useState("");
  const [name2, setName2] = useState("");
  return (
    <div className="page">
      <div className="single-block">
        <h2>Function as a prop with useState and controlled input</h2>
        <p>My name is {name2}</p>
        <CustomInput handleNameChange={setName2} name={name2} />
      </div>
      <div className="single-block">
        <h2>Function as a prop with useState</h2>
        <p>My name is {name}</p>
        <CustomButton2 handleClick={setName} />
      </div>
      <div className="single-block">
        <h2>Popover API</h2>
        <span style={{ margin: "0 .3rem 0 0" }}>Article</span>
        <button popovertarget="info">info</button>
        <div popover="true" id="info" style={{ top: "4.6rem", left: "6rem" }}>
          Extra info
        </div>
      </div>
      <div className="single-block">
        <h2>React ComponentProps</h2>
        <CustomButton
          disabled
          className="custom-button"
          textContent="TEXT BUTTON"
        />
      </div>
    </div>
  );
};

export default Home;
