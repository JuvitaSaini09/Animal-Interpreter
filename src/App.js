import "./styles.css";
import React, { useState } from "react";
//Database
const animalDictionary = {
  "🙈": " See-No-Evil Monkey",
  "🐧": " Penguin",
  "🙉": "Hear-No-Evil Monkey",
  "🐠": "Tropical Fish",
  "🙊": "Speak-No-Evil Monkey",
  "🐜": "Ant",
  "🐶": "Dog Face",
  "🐼": "Panda Face",
  "🐻": "Bear",
  "🐦": "Bird"
};
//Object-->array
var arrayOfEmoji = Object.keys(animalDictionary);

export default function App() {
  //useState1
  const [input, newInput] = useState("translation will appear here..");
  //useState2
  const [userData, newUserData] = useState("");
  //Function:updatesthe Value of useState1 by taking key from user
  function inputHandler(event) {
    var userTEXT = event.target.value;
    newUserData(userTEXT);
    //if-else to handle definded and undefined input
    if (animalDictionary[event.target.value] === undefined) {
      newInput("Emoji not found !!");
    } else {
      var userInput = event.target.value;
      newInput(animalDictionary[userInput]);
    }
  }
  //function to update userSate1 when user click on emoji
  function emojiClickHandler(event) {
    newInput(animalDictionary[event]);
  }

  return (
    <div className="App">
      <h1>The Zoo !!</h1>
      <input
        id="userInput"
        placeholder="put the emoji here to see the translation"
        onChange={inputHandler}
      ></input>
      <h3>{userData}</h3>

      <h2>{input}</h2>
      <div class="animals">
        {arrayOfEmoji.map(function (item) {
          return (
            <span
              key={item}
              onClick={() => emojiClickHandler(item)}
              class="animal"
            >
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}
