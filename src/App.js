import React, { useState } from "react";

import "./App.css";

const App = () => {
  const [createdAnimal, setCreatedAnimal] = useState("");
  const [firstAnimal, setFirstAnimal] = useState("");
  const [secondAnimal, setSecondAnimal] = useState("");

  const combineAnimals = () => {
    setCreatedAnimal(firstAnimal + secondAnimal);
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Animal Mixer Experiment</h1>
        <div className="inputs">
          <input
            className="letter-box"
            name="firstAnimal"
            type="text"
            onChange={(e) => {
              setFirstAnimal(e.target.value);
            }}
            placeholder="First Animal Here"
          />
          <input
            className="letter-box"
            name="secondAnimal"
            type="text"
            onChange={(e) => {
              setSecondAnimal(e.target.value);
            }}
            placeholder="Second Animal Here"
          />
          <div class="button-wrapper">
            <input
              class="button"
              type="button"
              name="button"
              value="Start Experiment"
              onClick={combineAnimals}
            />
          </div>
        </div>
        <h2>{createdAnimal}</h2>
      </div>
    </div>
  );
};

export default App;
