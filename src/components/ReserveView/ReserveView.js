import styles from "./ReserveView.module.scss";
import ReserveStatus from "./ReserveStatus/ReserveStatus";
import ReserveDetail from "./ReserveDetail/ReserveDetail";

const ReserveView = ({ target, dataList }) => {
  const reserveContainer = document.createElement("div");

  reserveContainer.className = styles.reserve_container;
  target.appendChild(reserveContainer);

  const handleSelect = (id) => {
    const result = dataList.filter((item) => item.id === id);
    const selectedList = [...result];

    new ReserveDetail({ target: reserveContainer, selectedList });
  };

  new ReserveStatus({ target: reserveContainer, dataList, handleSelect });
};

export default ReserveView;
