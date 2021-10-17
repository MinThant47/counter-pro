import Waiting from "../../Assets/Waiting.svg";
import Clock from "../../Assets/Clock.svg";
import "./counter.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { client } from "../../client";
import { motion } from "framer-motion";
import { HiArrowSmLeft } from "react-icons/hi";
import { HiArrowSmRight } from "react-icons/hi";

const waitingVariants = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      type: "spring",
      ease: "easeInOut",
    },
  },
  exit: {
    x: "-100vw",
    sclae: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const clockVariants = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      type: "spring",
      ease: "easeInOut",
    },
  },
  exit: {
    x: "-100vw",
    sclae: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const counterVariants = {
  hidden: {
    x: "100vw",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      type: "spring",
      ease: "easeInOut",
    },
  },
  exit: {
    x: "-100vw",
    sclae: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const numVariants = {
  visible: {
    rotate: [3, -3],
    transition: {
      duration: 0.3,
      ease: "easeInOut",
      yoyo: Infinity,
    },
  },
};

const hoverVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 5px rgba(255,255,255)",
    boxShadow: "0px 0px 5px rgba(255,255,255)",
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    },
  },
};

const Counter = ({ setPerson }) => {
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
        setPerson(res.items);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, [name, setPerson]);

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
        clearInterval(birthdayCounter);
      };

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
          <motion.img
            variants={waitingVariants}
            initial="hidden"
            animate="visible"
            className="img-fluid"
            exit="exit"
            src={Waiting}
            alt=""
          />
          <motion.img
            variants={clockVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="img-fluid"
            src={Clock}
            alt=""
          />
        </div>
      </section>

      <motion.section
        // ref={ref}
        variants={counterVariants}
        initial="hidden"
        animate="visible"
        className="counter"
        exit="exit"
      >
        <motion.h1 className="text-white">Countdown</motion.h1>
        <motion.p className="text-white">
          အချိန်တွေကို စတင်ရေတွက်နေပါပြီ...
        </motion.p>
        <div className="timer">
          <div className="time">
            <motion.h1 variants={numVariants} animate="visible">
              {finalday}
            </motion.h1>
            <p>DAYS</p>
          </div>
          <div className="time">
            <motion.h1 variants={numVariants} animate="visible">
              {finalhour}
            </motion.h1>
            <p>HOURS</p>
          </div>
          <div className="time">
            <motion.h1 variants={numVariants} animate="visible">
              {finalminute}
            </motion.h1>
            <p>MINUTES</p>
          </div>
          <div className="time">
            <motion.h1 variants={numVariants} animate="visible">
              {finalsecond}
            </motion.h1>
            <p>SECONDS</p>
          </div>
        </div>
        <p className="text-white comeback">
          အချိန်ပြည့်သွားရင် ပြန်လာခဲ့နော်။ ဒီက စောင့်နေမယ်
        </p>

        <div className={`congra ${open ? "open" : ""}`}>
          {people.length !== 0 && (
            <>
              <HiArrowSmRight className="counter-icons text-white" />
              <Link to={`/landing/${people[0].fields.name}`}>
                <motion.button
                  variants={hoverVariants}
                  whileHover="hover"
                  className="button-outline"
                >
                  ကဲ သွားလိုက်ရအောင်
                </motion.button>
              </Link>
              <HiArrowSmLeft className="counter-icons text-white" />
            </>
          )}
        </div>
      </motion.section>
    </>
  );
};

export default Counter;
