import React from "react";

function InputComponent({addGuess}) {
  const [word, setWord] = React.useState("");

  return (
    <form
      class="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        // console.log({ word });
        addGuess(word)
        setWord("");
      }}
    >
      <label for="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        required
        minLength={5}
        maxLength={5}
        attern="[a-zA-Z]{5}"
        title="5 letter word"
        value={word}
        onChange={(event) => {
          setWord(event.target.value.toUpperCase());
        }}
      />
      <button>Submit</button>
    </form>
  );
}

export default InputComponent;
