import Border from "./components/Border/Border";
import Main from "./components/Main/Main";
import "./App.scss";

const App = () => {
  return (
    <>
      <Border trans="0" />
      <Border trans="0.1" />
      <Border trans="0.2" />
      <Border trans="0.3" />
      <Main />
    </>
  );
};

export default App;
