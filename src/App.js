import "./scss/_reset.scss";
import "./scss/_common.scss";
import { request } from "./utils/getApi";
import Header from "./components/Header/Header";
import ReserveView from "./components/ReserveView/ReserveView";

const App = ({ target }) => {
  const container = document.createElement("div");
  container.className = "container";

  const requestReserve = async () => {
    const { reservations } = await request();
    new ReserveView({ target: container, dataList: reservations });
  };

  requestReserve();
  target.appendChild(container);

  new Header({ target: container });
};

export default App;
