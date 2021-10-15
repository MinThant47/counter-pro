import "./Letter.css";
import letter from "../../Assets/bd letter.svg";
import { motion } from "framer-motion";
import {
  buttonHoverVariants,
  containerVariants,
  imageVariants,
} from "../../Animation";

const Letter = ({ person, setOpen }) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="letter"
    >
      {person.length !== 0 && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="card"
          >
            <div className="imgBox">
              <motion.img variants={imageVariants} src={letter} alt="" />
            </div>
            <div className="details">
              <p id="wish">{person[0].fields.birthdayWish}</p>
            </div>
          </motion.div>

          <motion.div variants={containerVariants} className="letter-content">
            <p className="text">
              စိတ်ထဲရှိတာတွေ <br /> ရေးတတ်သလောက် ရေးထားတဲ့ <br />{" "}
              <strong> Birthday Wish လေးပါ။ </strong>
              <i className="uil uil-envelope"></i>
            </p>

            <div className="line"> </div>

            <span className="text">
              ပုံကို Mouse နဲ့ထောက်ပြီး ဖတ်ကြည့်လိုက်နော်။
              <i className="uil uil-mouse-alt"></i>
            </span>

            <motion.button
              variants={buttonHoverVariants}
              whileHover="hover"
              className="button-primary"
              onClick={() => setOpen(true)}
            >
              Last Page
            </motion.button>
          </motion.div>
        </>
      )}
    </motion.div>
  );
};

export default Letter;
