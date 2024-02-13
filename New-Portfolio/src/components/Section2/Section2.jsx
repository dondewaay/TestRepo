import Divider from "../Divider/Divider";
import "./Section2.scss";

const Section2 = () => {
  return (
    <div className="s2">
      <h2>
        Languages &<br />
        Technologies
        <Divider />
      </h2>
      <div className="lside"></div>
      <div className="rside">
        <p>
          Experience in HTML, CSS, JavaScript, React.js, Three.js, Python, Java,
          Haskell, and C
        </p>
      </div>
    </div>
  );
};

export default Section2;
