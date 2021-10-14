import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./component/Home";
import Counter from "./component/Counter/counter";
import NotFoundPage from "./component/NotFoundPage/NotFoundPage";
import Landing from "./component/Landing/Landing";
import { useState } from "react";
import Photo from "./component/Photo/Photo";
import { useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ConfettiModal from "./component/Confetti";

function App() {
  const [person, setPerson] = useState([]);
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <Switch location={location} key={location.key}>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/counter/:name">
          <Counter setPerson={setPerson} />
        </Route>

        <Route path="/landing/:name">
          <ConfettiModal />
          <Landing person={person} />
        </Route>

        <Route path="/photo">
          <Photo person={person} />
          <ConfettiModal />
        </Route>

        <Route path="/*">
          <NotFoundPage />
        </Route>
      </Switch>
    </AnimatePresence>
  );
}

export default App;
