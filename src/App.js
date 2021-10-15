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
import Letter from "./component/Letter/Letter";
import ModalBox from "./component/ModalBox/ModalBox";

function App() {
  const [person, setPerson] = useState([]);
  const location = useLocation();
  const [happyTime, setHappyTime] = useState(false);
  const [open, setOpen] = useState(false);
  return (
    <>
      <ModalBox open={open} setOpen={setOpen} />
      <AnimatePresence exitBeforeEnter initial={false}>
        {happyTime && <ConfettiModal />}

        <Switch location={location} key={location.key}>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/counter/:name">
            <Counter setPerson={setPerson} />
          </Route>

          <Route path="/landing/:name">
            <Landing person={person} setHappyTime={setHappyTime} />
          </Route>

          <Route path="/photo">
            <Photo person={person} />
          </Route>

          <Route path="/letter">
            <Letter person={person} setOpen={setOpen} />
          </Route>

          <Route path="/*">
            <NotFoundPage />
          </Route>
        </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;
