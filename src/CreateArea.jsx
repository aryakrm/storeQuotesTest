import React, { useState, useContext } from "react";
import { QuotesContext } from "./quotesContext";

function CreateArea() {
  const { addQuote } = useContext(QuotesContext);
  const [newQuote, setNewQuote] = useState("");

  const changeHandler = (event) => {
    setNewQuote(event.target.value);
  };

  const submitQuote = (event) => {
    event.preventDefault();
    addQuote(newQuote);
    setNewQuote("");
  };

  return (
    <div>
      <input type="text" value={newQuote} onChange={changeHandler} />
      <button onClick={submitQuote}>Add</button>
    </div>
  );
}

export default CreateArea;
