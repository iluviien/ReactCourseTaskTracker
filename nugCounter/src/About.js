import React, { useState } from "react";
import "./style.css";
import chickenNuggi from "./images/chickenNuggi.jpg";
import hamGurber from "./images/hamGurber.jpg";
import mcFlurry from "./images/mcFlurry.jpg";

export default function About() {
  const [count, setCount] = useState(0);
  const [image, setImage] = useState(chickenNuggi);
  const [calories, setCalories] = useState(59);
  const increment = () => {
    setCount(count + 1);
  };

  const changeImage = (img, cal) => {
    setImage(img);
    setCalories(cal);
    setCount(0);
  };

  return (
    <>
      <div>
        <div className="nav">
          <div className="nav-butt">
            <button onClick={() => changeImage(chickenNuggi, 59)}>
              Chicken nuggi
            </button>
            <button onClick={() => changeImage(hamGurber, 257)}>
              Ham Gurger
            </button>
            <button onClick={() => changeImage(mcFlurry, 165)}>McFlurry</button>
          </div>
        </div>

        <img src={image} className="avatar" alt="A single chicken nugget" />
      </div>

      <div className="nug-counter">
        <p>counter: {count}</p>
        <p>Calories: {calories * count}</p>
        <button onClick={increment}>I want more</button>
      </div>
    </>
  );
}
