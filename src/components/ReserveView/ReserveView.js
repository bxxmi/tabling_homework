import styles from "./reserveView.module.scss";
import { timeRegex } from "../../utils/timeRegex";

const STATUS = ["착석 중", "예약"];
const IS_SEAT = ["착석", "퇴석"];

const ReserveView = ({ target, dataList }) => {
  const main = document.createElement("main");
  const leftContainer = document.createElement("div");
  const ul = document.createElement("ul");

  leftContainer.className = styles.left_container;

  dataList.map((item) => {
    const {
      id,
      customer,
      menus,
      status,
      tables,
      timeRegistered,
      timeReserved,
    } = item;

    if (status !== "done") {
      const li = document.createElement("li");

      li.innerHTML += `
       <div class=${styles.time_info}>
          <p>${timeRegex(timeReserved)}</p>
          <p class=${status === "seated" ? styles.seated : styles.reserve}>${
        status === "seated" ? STATUS[0] : STATUS[1]
      }</p>
       </div>
       <div class=${styles.person_info}>
         <p>${customer.name} - ${tables
        .map((table) => table.name)
        .join(", ")}</p>
         <p>성인 0${customer.adult} 아이 0${customer.child}</p>
         <p>${menus.map((menu) => `${menu.name}(${menu.qty})`).join(", ")}</p>
       </div>
       <div class=${styles.button_area}>
        <button>${status === "seated" ? IS_SEAT[1] : IS_SEAT[0]}</button>
       </div>
      `;
      ul.appendChild(li);
    }
  });

  const handleButton = () => {
    console.log("ed");
  };

  leftContainer.appendChild(ul);
  main.appendChild(leftContainer);
  target.appendChild(main);
};

export default ReserveView;
