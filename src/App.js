import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./component/Home";
import Counter from "./component/Counter/counter";
import Detail from "./component/Detail/detail";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/counter/:name">
          <Counter />
        </Route>

        <Route path="/detail/:name">
          <Detail />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
