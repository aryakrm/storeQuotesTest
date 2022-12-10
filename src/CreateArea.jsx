import React, { useContext } from "react";
import { QuotesContext } from "./quotesContext";

function CreateArea() {
  const { addQuote, newQuote, changeInput } = useContext(QuotesContext);

  const changeHandler = (event) => {
    changeInput(event);
  };

  const submitQuote = (event) => {
    event.preventDefault();
    addQuote(newQuote);
  };

  return (
    <div>
      <input type="text" value={newQuote} onChange={changeHandler} />
      <button onClick={submitQuote}>Add</button>
    </div>
  );
}

export default CreateArea;
