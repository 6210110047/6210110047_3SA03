import React from 'react';
import WordCard from './WordCard';
import './App.css';
const wordSearchTable = "SHOUSEBESHOEANARDRLOARUELEODCHSWBIKH";
const words = ["HOUSE", "SHOE", "BALL", "DUCK", "SEARCH", "WORD", "ICE"];
const random = Math.floor(Math.random() * words.length);
const randomWord = words[random];
let hint = "";
if (randomWord == "HOUSE") {
  hint = "favorite building"
} else if (randomWord == "SHOE") {
  hint = "footware"
} else if (randomWord == "BALL") {
  hint = "rounded item"
} else if (randomWord == "DUCK") {
  hint = "animal that can swim"
} else if (randomWord == "SEARCH") {
  hint = "find synonym"
} else if (randomWord == "WORD") {
  hint = "what you are looking for"
} else if (randomWord == "ICE") {
  hint = "cold dessert"
} else {
  hint = ""
}
console.log(words[random]);

function App() {
  return (
    <div>
      <div className="center">
        <p> *** playable only 6x6 table *** </p>
      </div>
      <div className="centerTable">
        <WordCard value={wordSearchTable}/>
      </div>
      <div className="center">
        <p> find the correct answer ( adjacent characters ) from Hint : {hint} </p>
      </div>
    </div>
  );
}
export default App;