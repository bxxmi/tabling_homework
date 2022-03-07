import "./scss/_reset.scss";
import "./scss/_common.scss";
import Header from "./components/Header/Header";
import ReserveView from "./components/ReserveView/ReserveView";

const App = ({ target }) => {
  const container = document.createElement("div");
  container.className = "container";

  target.appendChild(container);

  new Header({ target: container });
  new ReserveView({ target: container });
};

export default App;
