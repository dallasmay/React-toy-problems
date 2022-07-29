import React, { useState } from "react";

const EvenAndOdd = () => {
  const [evenArray, setEvenArray] = useState([]);
  const [oddArray, setOddArray] = useState([]);
  const [userInput, setUserInput] = useState("");

  const updateUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const evenOddSort = (input) => {
    let evenNums = [];
    let oddNums = [];
    input = userInput;
    let inputArr = input.split(",");
    for (let num of inputArr) {
      if (num % 2 === 0) {
        evenNums.push(+num);
      } else {
        oddNums.push(+num);
      }
    }
    setEvenArray(evenNums);
    setOddArray(oddNums);
    console.log(evenArray);
    console.log(oddArray);
    return
  };

  return (
    <div className="puzzleBox evenAndOddPB">
      <h4>Evens and Odds</h4>
      <input className="inputLine" onChange={updateUserInput} />
      <button className="confirmationButton" onClick={evenOddSort}>Split</button>
      <span className="resultsBox">Evens: {JSON.stringify(evenArray)}</span>
      <span className="resultsBox">Odds: {JSON.stringify(oddArray)}</span>
    </div>
  );
};

export default EvenAndOdd;
