import "./App.css";
import BirthdayContextProvider from "./context/birthdayPeople";
import Home from "./component/Home";

function App() {
  return (
    <div className="App">
      <BirthdayContextProvider>
        <Home />
      </BirthdayContextProvider>
    </div>
  );
}

export default App;
