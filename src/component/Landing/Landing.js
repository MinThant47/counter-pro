import "./Landing.css";
import { Link } from "react-router-dom";
import celebrate from "../../Assets/celeberate.svg";
import cake from "../../Assets/cake.svg";
import triangle from "../../Assets/triangle shape.svg";
import gift from "../../Assets/gift.svg";
import { imageVariants } from "../../Animation";
import { textVariants } from "../../Animation";
import { buttonVariants } from "../../Animation";
import { containerVariants } from "../../Animation";
import { motion } from "framer-motion";

const Landing = ({ person }) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="landing"
    >
      {person && (
        <>
          <div className="landing-content">
            <motion.h1 variants={textVariants} id="nickname">
              {person[0].fields.nickname} 's
            </motion.h1>
            <motion.h1 variants={textVariants} id="years">
              {person[0].fields.years}
            </motion.h1>
            <motion.h3 variants={textVariants} id="birthday">
              Birthday
            </motion.h3>
            <motion.h5 variants={textVariants} id="bd-short">
              on {person[0].fields.birthdayShort}
            </motion.h5>
            <Link to="/photo">
              <motion.button
                variants={buttonVariants}
                className="button-primary"
              >
                GO NOW
              </motion.button>
            </Link>
          </div>
          <div className="decorators">
            <motion.img
              variants={imageVariants}
              src={celebrate}
              id="celebrate"
              className="img-fluid"
            />
            <motion.img
              variants={imageVariants}
              src={gift}
              id="gift"
              className="img-fluid"
            />
            <motion.img
              variants={imageVariants}
              src={cake}
              id="cake"
              className="img-fluid"
            />
            <motion.img
              variants={imageVariants}
              src={triangle}
              id="triangle"
              className="img-fluid"
            />
          </div>
        </>
      )}
    </motion.div>
  );
};

export default Landing;
