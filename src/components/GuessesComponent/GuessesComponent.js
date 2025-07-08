import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import GuessComponent from "../GuessComponent/GuessComponent";

function GuessesComponent({ listOfGuesses }) {
  return (
    <div class="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <GuessComponent key={num} value= {listOfGuesses[num]} />  
      ))}
    </div>
  );
}

export default GuessesComponent;
