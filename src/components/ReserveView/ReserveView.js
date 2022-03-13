import "./ReserveView.scss";
import ReserveStatus from "./ReserveStatus/ReserveStatus";
import ReserveDetail from "./ReserveDetail/ReserveDetail";

const ReserveView = ({ target, dataList }) => {
  const reserveContainer = document.createElement("div");
  const statusContainer = document.createElement("div");

  reserveContainer.className = "reserve_container";
  statusContainer.className = "reserve_status";

  reserveContainer.appendChild(statusContainer);
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
    filteredList = [...result];

    const listView = document.querySelector(".reserve_status > ul");
    statusContainer.removeChild(listView);

    new ReserveStatus({
      target: statusContainer,
      dataList: filteredList,
      handleRemove,
      handleSelect,
    });
  };

  new ReserveStatus({
    target: statusContainer,
    dataList: filteredList,
    handleRemove,
    handleSelect,
  });
  new ReserveDetail({ target: reserveContainer, selectedList });
};

export default ReserveView;
