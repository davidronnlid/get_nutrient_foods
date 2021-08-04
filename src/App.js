import "bulma/css/bulma.min.css";
import APIData from "./APIData";
import AboutProjectCard from "./aboutProjectCard";

const App = () => {
  return (
    <div classname="main">
      <APIData />
      <AboutProjectCard />
    </div>
  );
};

export default App;
