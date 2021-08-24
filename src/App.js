import "./styles.css";
import React, { useState } from "react";
const animalDictionary = {
  "🙈": " See-No-Evil Monkey",
  "🐧": " Penguin",
  "🙉": "Hear-No-Evil Monkey",
  "🐠": "Tropical Fish",
  "🙊": "Speak-No-Evil Monkey",
  "🐜": "Ant",
  "🐶": "Dog Face",
  "🐼": "Panda Face"
};
var arrayOfEmoji = Object.keys(animalDictionary);

export default function App() {
  const [input, newInput] = useState("");

  //update the Value of useState by taking key from user
  function inputHandler(event) {
    if (animalDictionary[event.target.value] === undefined) {
      newInput("Emoji not found !!");
    } else {
      var userInput = event.target.value;
      newInput(animalDictionary[userInput]);
    }
  }
  return (
    <div className="App">
      <h1>The Zoo !!</h1>
      <input
        id="userInput"
        placeholder="put the emoji here to see the translation"
        onChange={inputHandler}
      ></input>

      <h2>{input}</h2>
      <div class="animals">
        {arrayOfEmoji.map(function (item) {
          return <span class="animal">{item}</span>;
        })}{" "}
      </div>
    </div>
  );
}
