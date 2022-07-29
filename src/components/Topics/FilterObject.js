import React, { useState } from "react";

const FilterObject = () => {
  const [unFilteredArray, setUnfilteredArray] = useState([
    { fname: "John", lname: "Smith", age: 25, country: "USA" },
    { fname: "Abe", lname: "Lincoln", age: 250 },
    { lname: "Adams", country: "USA" },
  ]);
  const [userInput, setUserInput] = useState("");
  const [filteredArray, setFilteredArray] = useState([]);

  const filterObjArray = () => {
    let arrObj = unFilteredArray;
    console.log(arrObj[0].hasOwnProperty(userInput))
    let filteredArr = arrObj.filter((obj) => {
      return obj.hasOwnProperty(userInput);
    });
    console.log(filteredArr)
    setFilteredArray(filteredArr);
  };

  return (
    <div className="puzzleBox filterObjectPB">
      <h4>Filter Object</h4>
      <span className="puzzleText">Original: {JSON.stringify(unFilteredArray)}</span>
      <input
        className="inputLine"
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button className="confirmationButton" onClick={filterObjArray}>Filter</button>
      <span className="resultsBox filterObjectRB">Filtered: {JSON.stringify(filteredArray)}</span>
    </div>
  );
};

export default FilterObject;
