import "./Section1.scss";
import Divider from "../Divider/Divider";

const Section1 = () => {
  return (
    <div className="s1">
      <div className="lside">
        <h2>
          I'm Don 🦋
          <Divider />
        </h2>
        <p>
          Frontend Developer &<br />
          Creative
        </p>
      </div>
      <div className="rside"></div>
    </div>
  );
};

export default Section1;
