import React from "react";

function InputComponent({ addGuess, gameStatus }) {
  const [word, setWord] = React.useState("");


  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        addGuess(word);
        setWord("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      
        <input
          id="guess-input"
          type="text"
          required
          disabled={gameStatus !== "running"}
          minLength={5}
          maxLength={5}
          pattern="[a-zA-Z]{5}"
          title="5 letter word"
          value={word}
          onChange={(event) => {
            setWord(event.target.value.toUpperCase());
          }}
        />
      
    </form>
  );
}

export default InputComponent;
