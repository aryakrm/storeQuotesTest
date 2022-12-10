import { createContext, useState, useEffect } from "react";
import { nanoid } from "nanoid";

export const QuotesContext = createContext();

const QuotesContextProvider = (props) => {
  const [quotes, setQuotes] = useState([]);
  const [newQuote, setNewQuote] = useState("");
  const [editedQuote, setEditedQuote] = useState(newQuote);

  const changeInput = (event) => {
    setNewQuote(event.target.value);
  };

  const editInputChange = (event) => {
    setEditedQuote(event.target.value);
  };

  const addQuote = (content) => {
    setQuotes((state) => [
      ...state,
      { id: nanoid(), content, isEdited: false },
    ]);
    setNewQuote("");
  };
  const removeQuote = (id) => {
    setQuotes((state) => state.filter((q) => q.id !== id));
  };
  const isEditedToggle = (id) => {
    setQuotes((quotes) =>
      quotes.map((q) => (q.id === id ? { ...q, isEdited: !q.isEdited } : q))
    );
  };

  useEffect(() => {
    localStorage.setItem("Quotes", JSON.stringify(quotes));
  }, [quotes]);

  const editQuote = (id) => {
    setQuotes((quotes) =>
      quotes.map((q) =>
        q.id === id ? { ...q, content: editedQuote, isEdited: false } : q
      )
    );
  };

  return (
    <QuotesContext.Provider
      value={{
        quotes,
        addQuote,
        removeQuote,
        isEditedToggle,
        newQuote,
        changeInput,
        editInputChange,
        editedQuote,
        editQuote,
      }}
    >
      {props.children}
    </QuotesContext.Provider>
  );
};

export default QuotesContextProvider;
