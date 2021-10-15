import "./Last.css";
import { motion } from "framer-motion";
import {
  containerVariants,
  imageVariants,
  buttonHoverVariants,
} from "../../Animation";
import { useHistory } from "react-router-dom";

const Last = ({ person }) => {
  const history = useHistory();
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="last"
    >
      {person.length !== 0 && (
        <>
          <div className="last-img">
            <motion.img
              variants={imageVariants}
              src={person[0].fields.lastPhoto.fields.file.url}
              alt=""
            />
          </div>
          <div className="last-content">
            <motion.h1 variants={containerVariants} id="happyWord">
              Happy
            </motion.h1>
            <motion.h1 variants={containerVariants} id="birthdayWord">
              Birthday to you!
            </motion.h1>
            <motion.p
              variants={containerVariants}
              className="birthdayLast text"
            >
              {person[0].fields.lastPhoto.fields.title}
            </motion.p>
            <motion.button
              variants={buttonHoverVariants}
              whileHover="hover"
              className="button-primary"
              onClick={() => history.goBack()}
            >
              Go Back
            </motion.button>
          </div>
        </>
      )}
    </motion.div>
  );
};

export default Last;
