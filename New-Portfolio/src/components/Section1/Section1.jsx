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
        <h1>
          <span></span>
          <span>
            &nbsp;pop
            <span class="pops">
              <span class="pop"></span>
              <span class="pop"></span>
              <span class="pop"></span>
              <span class="pop"></span>
              <span class="pop"></span>
            </span>
          </span>
        </h1>
      </div>
      <div className="rside"></div>
    </div>
  );
};

export default Section1;
