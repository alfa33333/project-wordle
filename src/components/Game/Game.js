import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import InputComponent from "../InputComponent/InputComponent";
import GuessesComponent from "../GuessesComponent/GuessesComponent";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [listOfGuesses, setListOfGuesses] = React.useState([]);

  function addGuess(newGuess) {
    // Add the new guess to the list of guesses
    console.log("New guess:", newGuess);
    const nextGuesses = [...listOfGuesses, newGuess];
    setListOfGuesses(nextGuesses);  
  };


  return (
    <>
      <GuessesComponent listOfGuesses={listOfGuesses} />
      <InputComponent addGuess={addGuess}/>
    </>
  );
}

export default Game;
