import { useState } from "react";
import "./Section1.scss";
import { motion, AnimatePresence } from "framer-motion";

const Section1 = () => {
  const [isDark, setIsDark] = useState(true);

  return (
    <div className="s1">
      <div className="lside">
        <div className="main-content">
          <h2>
            Hi! I'm<span className="gradient">&nbsp;Don&nbsp;</span>
          </h2>
          <motion.h3
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "ease", delay: 0.6, duration: 0.8 }}
          >
            I Build Web Designs
            <br />
            That<span className="gradient">&nbsp;Flow&nbsp;</span>
          </motion.h3>
        </div>
      </div>
      <div className="rside">
        <img src="/img/don.png" alt="Me!" />
      </div>
      <AnimatePresence>
        <motion.div
          initial={{ rotate: 90, y: 200 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", delay: 1.5, duration: 1 }}
          className="page"
        >
          Main
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          className="toggle"
        >
          🌙
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Section1;
