import styles from "./ReserveStatus.module.scss";
import ReserveStatusItem from "./ReserveStatusItem";

const ReserveStatus = ({ target, dataList, handleSelect }) => {
  const statusContainer = document.createElement("div");
  const $ul = document.createElement("ul");

  statusContainer.className = styles.reserve_status;

  statusContainer.appendChild($ul);
  target.appendChild(statusContainer);

  const handleRemove = (id) => {
    console.log(id);
  };

  dataList.map((item) => {
    if (item.status !== "done") {
      new ReserveStatusItem({ target: $ul, item, handleRemove, handleSelect });
    }
  });
};

export default ReserveStatus;
