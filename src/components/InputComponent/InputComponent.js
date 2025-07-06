import React from "react";

function InputComponent() {
  const [ word, setWord ] = React.useState("");

  return (
    <form class="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        console.log({ word });
        setWord("");
      }}>
      <label for="guess-input">Enter guess:</label>
      <input 
      id="guess-input" 
      type="text"
      required={true}
      minLength={5}
      value={word}
      onChange={(event) => {
        setWord(event.target.value.toUpperCase());}
      } 
      />
      <button>Submit</button>
    </form>
  );
}

export default InputComponent;
