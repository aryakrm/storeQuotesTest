import "./App.css";
import CreateArea from "./CreateArea";
import QuotesContextProvider from "./quotesContext";
import QuotesList from "./QuotesList";

function App() {
  return (
    <div className="App">
      <QuotesContextProvider>
        <CreateArea />
        <QuotesList />
      </QuotesContextProvider>
    </div>
  );
}

export default App;
