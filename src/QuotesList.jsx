import React, { useContext } from "react";
import { QuotesContext } from "./quotesContext";

function QuotesList() {
  const {
    quotes,
    removeQuote,
    isEditedToggle,
    editInputChange,
    editedQuote,
    editQuote,
  } = useContext(QuotesContext);

  const deleteBtn = (id) => {
    removeQuote(id);
  };

  const toggle = (id, e) => {
    e.preventDefault();
    isEditedToggle(id);
  };
  const changeHandler = (event) => {
    editInputChange(event);
  };

  const saveHandler = (id, e) => {
    e.preventDefault();
    editQuote(id);
  };

  return (
    <div>
      <ul>
        {quotes.map((quote) => {
          return quote.isEdited ? (
            <li key={quote.id}>
              <input
                type="text"
                defaultValue={editedQuote}
                onChange={changeHandler}
              />
              <button onClick={(e) => toggle(quote.id, e)}>unedit</button>
              <button onClick={(e) => saveHandler(quote.id, e)}>Save</button>
            </li>
          ) : (
            <li key={quote.id}>
              <p>{quote.content}</p>
              <button type="button" onClick={() => deleteBtn(quote.id)}>
                X
              </button>
              <button onClick={(e) => toggle(quote.id, e)}>edit</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default QuotesList;
