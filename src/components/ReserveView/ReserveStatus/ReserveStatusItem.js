import "./ReserveStatusItem.scss";
import { timeRegex } from "../../../utils/timeRegex";
import {
  reserveStatusRegex,
  seatStatusRegex,
} from "../../../utils/statusRegex";

function ReserveStatusList({ target, item, handleRemove, handleSelect }) {
  const { id, customer, menus, status, tables, timeReserved } = item;

  const $li = document.createElement("li");
  const timeContainer = document.createElement("div");
  const bookerContainer = document.createElement("div");
  const buttonContainer = document.createElement("div");
  const button = document.createElement("button");

  timeContainer.className = "time_container";
  bookerContainer.className = "booker_container";
  buttonContainer.className = "button_container";

  timeContainer.innerHTML = `
    <p>${timeRegex(timeReserved)}</p>
    <p class=${status === "seated" ? "seated" : "reserve"}>${reserveStatusRegex(
    status
  )}</p>
  `;

  bookerContainer.innerHTML = `
    <p>${customer.name} - ${tables.map((table) => table.name).join(", ")}</p>
    <p>성인 0${customer.adult} 아이 0${customer.child}</p>
    <p>${menus.map((menu) => `${menu.name}(${menu.qty})`).join(", ")}</p>`;

  button.innerText = `${seatStatusRegex(status)}`;

  buttonContainer.appendChild(button);
  $li.appendChild(timeContainer);
  $li.appendChild(bookerContainer);
  $li.appendChild(buttonContainer);
  target.appendChild($li);

  $li.addEventListener("click", () => {
    handleSelect(id);

    const resizeWidth = window.innerWidth;

    if (resizeWidth < 1024) {
      handleSelect(id);

      const detailView = document.querySelector(".reserve_detail");
      const closeButton = document.querySelector(".reserve_detail > button");

      detailView.style.display = "block";
      detailView.style.animation = "slide-up 0.5s ease-out";

      closeButton.style.display = "block";

      closeButton.addEventListener("click", () => {
        detailView.style.display = "none";
      });
    }
  });

  window.addEventListener("resize", () => {
    const resizeWidth = window.innerWidth;
    const detailView = document.querySelector(".reserve_detail");
    const closeButton = document.querySelector(".reserve_detail > button");

    if (resizeWidth >= 1024) {
      detailView.style.display = "block";
      closeButton.style.display = "none";
    } else {
      detailView.style.display = "none";
    }
  });

  button.addEventListener("click", (e) => {
    e.stopPropagation();

    e.target.innerText === "착석"
      ? (e.target.innerText = "퇴석")
      : handleRemove(id);
  });
}

export default ReserveStatusList;
