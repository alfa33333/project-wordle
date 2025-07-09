import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers.js";

function GuessComponent({ value, answer }) {
  const response = value ? checkGuess(value,answer) : undefined
  

  return (
    <p className="guess">
      {range(5).map((num) => {
        const letter = response ? response[num].letter : undefined;
        const status = response ? response[num].status : "";
        return (<span className={`cell ${status}`} key={num}>
          {letter}
        </span>) ;
      })}
    </p>
  );
}

export default GuessComponent;
