import React, { useContext } from "react";
import { QuotesContext } from "./quotesContext";

function QuotesList() {
  const { quotes } = useContext(QuotesContext);
  return (
    <div>
      <ul>
        {quotes.map((quote) => {
          return (
            <li key={quote.id}>
              <p>{quote.content}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default QuotesList;
