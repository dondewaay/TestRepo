import "./Section1.scss";
import Divider from "../Divider/Divider";
import { motion } from "framer-motion";

const Section1 = () => {
  return (
    <div className="s1">
      <div className="lside">
        <h1>
          I'm Don 🦋
          <Divider />
        </h1>
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", delay: 0.4, duration: 1.5 }}
        >
          Building Designs
          <br />
          That <span className="gradient">Flow&nbsp;</span>
        </motion.h2>
      </div>
      <div className="rside"></div>
    </div>
  );
};

export default Section1;
