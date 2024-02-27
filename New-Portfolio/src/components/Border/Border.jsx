import "./Border.scss";
import { motion } from "framer-motion";

const Border = ({ trans }) => {
  return (
    <div className="border-div">
      <motion.div
        className="top"
        initial={{ x: -50, y: -50 }}
        animate={{ x: 0, y: 0 }}
        transition={{ type: "spring", delay: 0.35, duration: 1 }}
      >
        <a href="/">
          <h1>Don DeWaay III</h1>
        </a>
      </motion.div>
      <motion.div
        className="border-container"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1.0 }}
        transition={{ type: "spring", delay: trans, duration: 1.5 }}
      >
        <div className="gradient"></div>
      </motion.div>
    </div>
  );
};

export default Border;
