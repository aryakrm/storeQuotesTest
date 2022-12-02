import { createContext, useState } from "react";
import { nanoid } from "nanoid";

export const QuotesContext = createContext();

const QuotesContextProvider = (props) => {
  const [quotes, setQuotes] = useState([
    {
      id: nanoid(),
      content: "Hello, This is a quote",
    },
  ]);
  const addQuote = (content) => {
    setQuotes((state) => [...state, { id: nanoid(), content }]);
  };
  return (
    <QuotesContext.Provider value={{ quotes, addQuote }}>
      {props.children}
    </QuotesContext.Provider>
  );
};

export default QuotesContextProvider;
