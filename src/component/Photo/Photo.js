import "./Photo.css";
import { HiArrowSmRight } from "react-icons/hi";
import { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import {
  buttonHoverVariants,
  containerVariants,
  imageVariants,
  textVariants,
} from "../../Animation";
import { motion } from "framer-motion";

const Photo = ({ person }) => {
  const [num, setNum] = useState(0);
  const [front, setFront] = useState(false);
  const [back, setBack] = useState(true);

  const history = useHistory();

  const checkMore = () => {
    if (num < 3) {
      setNum((num) => num + 1);
    } else {
      setNum((num) => num);
    }
  };

  const checkBack = () => {
    if (num > 0) {
      setNum((num) => num - 1);
    } else {
      setNum((num) => num);
    }
  };

  useEffect(() => {
    if (num === 0) {
      setBack(true);
    } else {
      setBack(false);
    }

    if (num === 3) {
      setFront(true);
    } else {
      setFront(false);
    }
  }, [num]);

  return (
    <motion.div
      className="photo"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {person.length !== 0 && (
        <>
          {num >= 0 && num <= 3 ? (
            <>
              <motion.img
                variants={imageVariants}
                src={person[0].fields.birthdayPhoto[num].fields.file.url}
                alt=""
                className="bd-photo"
              />
              <motion.div
                variants={containerVariants}
                className="photo-content"
              >
                <p variants={textVariants}>
                  {person[0].fields.birthdayPhoto[num].fields.title}
                </p>
                <div className="photo-button">
                  {/* New Page သွားဖို့ */}

                  {front ? (
                    <Link to="/letter">
                      <motion.button
                        variants={buttonHoverVariants}
                        whileHover="hover"
                        className="text-uppercase me-4 button-primary"
                      >
                        Next Page
                      </motion.button>
                    </Link>
                  ) : (
                    <motion.button
                      variants={buttonHoverVariants}
                      whileHover="hover"
                      onClick={() => {
                        checkMore();
                      }}
                      className="text-uppercase me-4 button-primary"
                    >
                      Next Photo
                    </motion.button>
                  )}

                  {/* အရင် Page ပြန်သွားဖို့ */}

                  {back ? (
                    <button
                      onClick={() => {
                        history.goBack();
                      }}
                      className="button-back"
                    >
                      Back <HiArrowSmRight className="button-icon" />
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        checkBack();
                      }}
                      className="button-back"
                    >
                      Previous Photo <HiArrowSmRight className="button-icon" />
                    </button>
                  )}
                </div>
              </motion.div>
            </>
          ) : (
            <>
              <motion.img
                variants={imageVariants}
                src={person[0].fields.birthdayPhoto[0].fields.file.url}
                alt=""
                className="bd-photo"
              />
              <motion.div
                variants={containerVariants}
                className="photo-content"
              >
                <p>{person[0].fields.birthdayPhoto[0].fields.title}</p>
                <div className="photo-button">
                  <button className="text-uppercase me-4 button-primary">
                    Next Photo
                  </button>
                  <button className="button-back">
                    Back <HiArrowSmRight />
                  </button>
                </div>
              </motion.div>
            </>
          )}
        </>
      )}
    </motion.div>
  );
};

export default Photo;
