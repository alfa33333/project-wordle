import React from "react";

function GuessesComponent({listOfGuesses}) {
  return (
    <div class="guess-results">
      
      {listOfGuesses.map( (guess, index) => (
        <p className="guess" key={index}>
          {guess}
        </p>
    ))}
      
    </div>
  );
}

export default GuessesComponent;
