import "./Border.scss";
import { motion } from "framer-motion";

const Border = () => {
  return (
    <>
      <motion.div
        className="top"
        initial={{ x: -50, y: -50 }}
        animate={{ x: 0, y: 0 }}
        transition={{ type: "spring", delay: 0.03, duration: 1 }}
      >
        <a href="/">
          <h1>Don DeWaay III</h1>
        </a>
      </motion.div>
      <motion.div
        className="border-container"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1.0 }}
        transition={{ type: "spring", duration: 1 }}
      >
        <div className="gradient">
          <div></div>
        </div>
      </motion.div>
    </>
  );
};

export default Border;
