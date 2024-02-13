import Section1 from "../Section1/Section1";
import Section2 from "../Section2/Section2";
import Section3 from "../Section3/Section3";
import Section4 from "../Section4/Section4";
import "./Main.scss";

const Main = () => {
  return (
    <div className="content">
      <section><Section1 /></section>
      <section><Section2 /></section>
      <section><Section3 /></section>
      <section><Section4 /></section>
    </div>
  );
};

export default Main;
