import Section1 from "../Section1/Section1";
import Section2 from "../Section2/Section2";
import Section3 from "../Section3/Section3";
import "./Main.scss";

const Main = () => {
  return (
    <div className="content">
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
};

export default Main;
