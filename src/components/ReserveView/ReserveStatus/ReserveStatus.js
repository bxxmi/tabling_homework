import "./ReserveStatus.scss";
import ReserveStatusItem from "./ReserveStatusItem";

const ReserveStatus = ({ target, dataList, handleSelect, handleRemove }) => {
  const $ul = document.createElement("ul");

  target.appendChild($ul);

  dataList.map((item) => {
    if (item.status !== "done") {
      new ReserveStatusItem({ target: $ul, item, handleRemove, handleSelect });
    }
  });
};

export default ReserveStatus;
