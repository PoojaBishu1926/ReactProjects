import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Error from "./components/Error";
import FoodItems from "./components/FoodItems";
import Container from "./components/Container";

function App() {
  const items = ["food", "sabji"];
  const [itemMap, setFoodItems] = useState(["Juice", "Apple", "Milk"]);
  const [inputValue, setInputValue] = useState("");

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      let newItem = inputValue.trim(); // Trim to remove leading/trailing whitespaces
      if (newItem !== "") {
        setFoodItems([...itemMap, newItem]);
        setInputValue(""); // Clear input field after adding item
      }
    }
  }
  let textToShow = "Food Entered By User";
  function handleChange(event) {
    console.log(textToShow);
    textToShow = event.target.value;
    // setInputValue(event.target.value);
  }

  return (
    <>
      <Container>
        <h1>Healthy Foods</h1>
        <input
          type="text"
          placeholder="Enter your Favorite Food"
          value={inputValue}
          onChange={handleChange}
        />
        <p>{textToShow}</p>
        <Error item={itemMap}></Error>
        <FoodItems item={items} handleChange={handleChange}></FoodItems>
      </Container>
    </>
  );
}

export default App;
