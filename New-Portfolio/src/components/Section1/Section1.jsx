import "./Section1.scss";
import Divider from "../Divider/Divider";

const Section1 = () => {
  return (
    <div className="s1">
      <div className="lside">
        <h1>
          I'm Don 🦋
          <Divider />
        </h1>
        <h2>
          Building Designs
          <br />
          That <span className="gradient">Flow</span>
        </h2>
      </div>
      <div className="rside"></div>
    </div>
  );
};

export default Section1;
