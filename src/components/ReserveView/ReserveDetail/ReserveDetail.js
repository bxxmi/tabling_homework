import "./ReserveDetail.scss";
import { reserveStatusRegex } from "../../../utils/statusRegex";

const ReserveDetail = ({ target, selectedList }) => {
  const { customer, status, timeRegistered, timeReserved } = selectedList[0];

  const detailContainer = document.createElement("div");
  const reserveInfoContainer = document.createElement("div");
  const bookerInfoContainer = document.createElement("div");
  const button = document.createElement("button");

  detailContainer.className = "reserve_detail";
  reserveInfoContainer.className = "reserve_detail_info";
  bookerInfoContainer.className = "reserve_detail_booker";
  button.innerText = "닫기";

  reserveInfoContainer.innerHTML = `
    <h2>예약 정보</h2>
    <div class="reserve_info">
      <p><span>예약 상태</span>${reserveStatusRegex(status)}</p>
      <p><span>예약 시간</span>${timeReserved}</p>
      <p><span>예약 시간</span>${timeRegistered}</p>
    </div>
  `;

  bookerInfoContainer.innerHTML = `
    <h2>고객 정보</h2>
    <div class="booker_info">
    <p><span>고객 성명</span><span>${customer.name}</span></p>
    <p><span>고객 등급</span><span>${customer.level}</span></p>
    <p><span>고객 메모</span><span>${customer.memo}</span></p>
    <p><span>요청사항</span><span>${customer.request}</span></p>
  </div>
  `;

  detailContainer.appendChild(button);
  detailContainer.appendChild(reserveInfoContainer);
  detailContainer.appendChild(bookerInfoContainer);
  target.appendChild(detailContainer);
};

export default ReserveDetail;
