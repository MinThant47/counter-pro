import { useEffect, useState, useRef } from "react";
import { client } from "../client";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [people, setPeople] = useState([]);
  const [show, setShow] = useState(false);
  const pwRef = useRef();

  useEffect(() => {
    client
      .getEntries({ content_type: "birthdayInfo" })
      .then((res) => {
        setPeople(res.items);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  const handleClick = (e, pw) => {
    e.preventDefault();
    pw === process.env.REACT_APP_PASSWORD ? setShow(true) : setShow(false);
  };

  return (
    <div className="home-body">
      <div className="home">
        <h3>
          <strong>Birthday </strong> ပိုင်ရှင်လေးများ
        </h3>

        {show ? (
          <div className="bd-people">
            {people &&
              people.map((bd) => {
                return (
                  <Link
                    className="bd-card"
                    to={`/counter/${bd.fields.name}`}
                    key={bd.sys.id}
                  >
                    {bd.fields.name} <i className="uil uil-gift bd-icon"></i>
                  </Link>
                );
              })}
          </div>
        ) : (
          <>
            <input ref={pwRef} type="text" placeholder="Enter password" />
            <button
              onClick={(e) => {
                handleClick(e, pwRef.current.value);
              }}
              className="bd-button"
            >
              Enter
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
