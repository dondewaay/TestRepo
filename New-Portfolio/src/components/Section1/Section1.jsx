import { useState } from "react";
import "./Section1.scss";
import { motion } from "framer-motion";

const Section1 = () => {
  const [isDark, setIsDark] = useState(true);
  return (
    <div className="s1">
      <div className="lside">
        <div className="main-content">
          <h2>
            Hi! I'm <span className="gradient">&nbsp;Don&nbsp;</span>👋
          </h2>
          <motion.h3
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", delay: 0.6, duration: 1.5 }}
          >
            I Build Web Designs
            <br />
            That <span className="gradient">&nbsp;Flow&nbsp;</span>
          </motion.h3>
        </div>
      </div>
      <div className="rside">
        <img src="/img/don.png" alt="Me!" />
      </div>

    </div>
  );
};

export default Section1;
