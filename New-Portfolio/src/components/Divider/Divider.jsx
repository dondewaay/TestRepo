import "./Divider.scss";
import { motion } from "framer-motion";

const Divider = () => {
  return (
    <motion.div
      className="divider"
      initial={{ x: 75, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    ></motion.div>
  );
};

export default Divider;
