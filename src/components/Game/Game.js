import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import InputComponent from "../InputComponent/InputComponent";
import GuessesComponent from "../GuessesComponent/GuessesComponent";
import WinBanner from "../WinBanner/WinBanner";
import LostBanner from "../LostBanner/LostBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [listOfGuesses, setListOfGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("running");

  function addGuess(newGuess) {
    // Add the new guess to the list of guesses
    console.log("New guess:", newGuess);
    const nextGuesses = [...listOfGuesses, newGuess];
    if (newGuess === answer) {
      setGameStatus("won");
      console.log("You won!");
    } else if (nextGuesses.length >= 6) {
      setGameStatus("lost");
      console.log("You lost!");
    }
    setListOfGuesses(nextGuesses);  
  };


  return (
    <>
      <GuessesComponent listOfGuesses={listOfGuesses} answer={answer}/>
      <InputComponent addGuess={addGuess} gameStatus={gameStatus}/>
     {gameStatus === "won" && <WinBanner guesses={listOfGuesses.length}/>}
      {gameStatus === "lost" && <LostBanner answer={answer}/>}
    </>
  );
}

export default Game;
