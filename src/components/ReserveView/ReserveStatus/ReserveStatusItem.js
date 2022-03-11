import styles from "./ReserveStatusItem.module.scss";
import { timeRegex } from "../../../utils/timeRegex";

const STATUS = ["착석 중", "예약"];
const IS_SEAT = ["착석", "퇴석"];

function ReserveStatusList({ target, item, handleRemove, handleSelect }) {
  const { id, customer, menus, status, tables, timeRegistered, timeReserved } =
    item;

  const $li = document.createElement("li");
  const timeContainer = document.createElement("div");
  const bookerContainer = document.createElement("div");
  const buttonContainer = document.createElement("div");
  const button = document.createElement("button");

  timeContainer.className = styles.time_container;
  bookerContainer.className = styles.booker_container;
  buttonContainer.className = styles.button_container;

  timeContainer.innerHTML = `
    <p>${timeRegex(timeReserved)}</p>
    <p class=${status === "seated" ? styles.seated : styles.reserve}>${
    status === "seated" ? STATUS[0] : STATUS[1]
  }</p>
  `;

  bookerContainer.innerHTML = `
    <p>${customer.name} - ${tables.map((table) => table.name).join(", ")}</p>
    <p>성인 0${customer.adult} 아이 0${customer.child}</p>
    <p>${menus.map((menu) => `${menu.name}(${menu.qty})`).join(", ")}</p>`;

  button.innerText = `${status === "seated" ? IS_SEAT[1] : IS_SEAT[0]}`;

  buttonContainer.appendChild(button);
  $li.appendChild(timeContainer);
  $li.appendChild(bookerContainer);
  $li.appendChild(buttonContainer);
  target.appendChild($li);

  $li.addEventListener("click", () => handleSelect(id));

  button.addEventListener("click", (e) => {
    e.target.innerText === "착석"
      ? (e.target.innerText = "퇴석")
      : handleRemove(id);
  });
}

export default ReserveStatusList;
