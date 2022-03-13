import styles from "./ReserveView.module.scss";
import ReserveStatus from "./ReserveStatus/ReserveStatus";
import ReserveDetail from "./ReserveDetail/ReserveDetail";

const ReserveView = ({ target, dataList }) => {
  const reserveContainer = document.createElement("div");
  reserveContainer.className = styles.reserve_container;
  target.appendChild(reserveContainer);

  let selectedList = [dataList[0]];
  let filteredList = [...dataList];

  const handleSelect = (id) => {
    const detailView = document.querySelector(".reserve_detail");
    reserveContainer.removeChild(detailView);

    const result = dataList.filter((item) => item.id === id);
    selectedList = [...result];

    new ReserveDetail({ target: reserveContainer, selectedList });
  };

  const handleRemove = (id) => {
    const result = filteredList.filter((item) => item.id !== id);
  };

  new ReserveStatus({
    target: reserveContainer,
    dataList,
    handleRemove,
    handleSelect,
  });
  new ReserveDetail({ target: reserveContainer, selectedList });
};

export default ReserveView;
