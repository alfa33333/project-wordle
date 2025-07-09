import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import GuessComponent from "../GuessComponent/GuessComponent";

function GuessesComponent({ listOfGuesses, answer}) {

  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <GuessComponent key={num} value= {listOfGuesses[num]} answer={answer}/>  
      ))}
    </div>
  );
}

export default GuessesComponent;
