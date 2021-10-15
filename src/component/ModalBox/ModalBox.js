import "./ModalBox.css";
import { Link } from "react-router-dom";
import { HiArrowSmRight } from "react-icons/hi";
import { FaTimes } from "react-icons/fa";
import cakeIcon from "../../Assets/Cake icon.svg";
import { motion, AnimatePresence } from "framer-motion";
import {
  buttonHoverVariants,
  modalVariants,
  backdropVariants,
} from "../../Animation";

const ModalBox = ({ open, setOpen }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {open && (
        <motion.div
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="backdrop"
        >
          <motion.div variants={modalVariants} className="modalBox">
            <FaTimes className="close-icon" onClick={() => setOpen(false)} />
            <img src={cakeIcon} className="modal-svg" alt="cake icon" />
            <p className="text">
              Birthday Wish ဖတ်ပြီးတာ <strong> သေချာပြီလား </strong>
            </p>

            <Link to="/last">
              <motion.button
                onClick={() => setOpen(false)}
                variants={buttonHoverVariants}
                whileHover="hover"
                className="button-primary"
              >
                သေချာရင် နောက် Page သွားပေတော့
              </motion.button>
            </Link>
            <button onClick={() => setOpen(false)} className="button-back">
              သွားပြန်ဖတ်မယ် <HiArrowSmRight className="button-icon" />{" "}
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalBox;
