import Waiting from "../../Assets/Waiting.png";
import Clock from "../../Assets/Clock.png";
import "./counter.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { client } from "../../client";
import { Link } from "react-router-dom";

const Counter = () => {
  const { name } = useParams();
  const [people, setPeople] = useState([]);
  const [open, setOpen] = useState(false);

  const [finalday, setDay] = useState("N/A");
  const [finalhour, setHour] = useState("N/A");
  const [finalminute, setMinute] = useState("N/A");
  const [finalsecond, setSecond] = useState("N/A");

  useEffect(() => {
    client
      .getEntries({ content_type: "birthdayInfo", "fields.name": name })
      .then((res) => {
        setPeople(res.items);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, [name]);

  useEffect(() => {
    if (people.length !== 0) {
      // Counter Function

      const birthday = () => {
        const today = new Date().getTime();
        const countDate = new Date(people[0].fields.birthdayDate).getTime();
        let gap = countDate - today;

        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        const d = Math.floor(gap / day);
        const h = Math.floor((gap % day) / hour);
        const m = Math.floor((gap % hour) / minute);
        const s = Math.floor((gap % minute) / second);

        setDay(d);
        setHour(h);
        setMinute(m);
        setSecond(s);

        if (
          finalday === 0 &&
          finalhour === 0 &&
          finalminute === 0 &&
          finalsecond === 0
        ) {
          stopCounter();
          setOpen(true);
        }
      };

      var birthdayCounter = setInterval(function () {
        birthday();
      });

      const stopCounter = () => {
        console.log("Stopping");
        clearInterval(birthdayCounter);
      };

      console.log("useEffect Running");
      // End of Counter Function

      const today = new Date().getTime();
      const countDate = new Date(people[0].fields.birthdayDate).getTime();

      if (today >= countDate) {
        setOpen(true);
        setDay(0);
        setHour(0);
        setMinute(0);
        setSecond(0);
        stopCounter();
      } else {
        birthday();
      }
    }
  }, [people, finalday, finalhour, finalminute, finalsecond]);

  return (
    <>
      <section className="waiting">
        <div className="waiting-img">
          <img clas="img-fluid" src={Waiting} alt="" />
          <img className="img-fluid" src={Clock} alt="" />
        </div>
      </section>

      <section className="counter">
        <h1 className="text">Countdown</h1>
        <p className="text">အချိန်တွေကို စတင်ရေတွက်နေပါပြီ...</p>
        <div className="timer">
          <div className="time">
            <h1 id="day">{finalday}</h1>
            <p>DAYS</p>
          </div>
          <div className="time">
            <h1 id="hour">{finalhour}</h1>
            <p>HOURS</p>
          </div>
          <div className="time">
            <h1 id="minute">{finalminute}</h1>
            <p>MINUTES</p>
          </div>
          <div className="time">
            <h1 id="second">{finalsecond}</h1>
            <p>SECONDS</p>
          </div>
        </div>
        <p className="text comeback">
          အချိန်ပြည့်သွားရင် ပြန်လာခဲ့နော်။ ဒီက စောင့်နေမယ်
        </p>

        <div className={`congra ${open ? "open" : ""}`}>
          {people.length !== 0 && (
            <Link className="button" to={`/detail/${people[0].fields.name}`}>
              ကဲ သွားလိုက်ရအောင်
            </Link>
          )}
          <div className="content">
            <h1 className="text">Yayyyyyy</h1>
            <p className="text">အချိန်ပြည့်ဖို့ စောင့်နေရတာ မောနေပြီလား</p>
            <p className="text">အခုပဲ ဝင်ကြည့်လိုက်တော့နော်</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Counter;
