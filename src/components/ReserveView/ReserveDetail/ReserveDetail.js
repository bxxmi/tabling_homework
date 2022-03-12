import styles from "./ReserveDetail.module.scss";

const ReserveDetail = ({ target, selectedList }) => {
  const { id, customer, menus, status, tables, timeRegistered, timeReserved } =
    selectedList[0];

  const detailContainer = document.createElement("div");
  const reserveInfoContainer = document.createElement("div");
  const bookerInfoContainer = document.createElement("div");

  detailContainer.className = "reserve_detail";
  reserveInfoContainer.className = styles.reserve_detail_info;
  bookerInfoContainer.className = styles.reserve_detail_booker;

  reserveInfoContainer.innerHTML = `
    <h2>예약 정보</h2>
    <div class=${styles.reserve_info}>
      <p><span>예약 상태</span>${status}</p>
      <p><span>예약 시간</span>${timeReserved}</p>
      <p><span>예약 시간</span>${timeRegistered}</p>
    </div>
  `;

  bookerInfoContainer.innerHTML = `
    <h2>고객 정보</h2>
    <div class=${styles.booker_info}>
    <p><span>고객 성명</span>${customer.name}</p>
    <p><span>고객 등급</span>${customer.level}</p>
    <p><span>고객 메모</span>${customer.memo}</p>
    <p><span>요청사항</span>${customer.request}</p>
  </div>
  `;

  detailContainer.appendChild(reserveInfoContainer);
  detailContainer.appendChild(bookerInfoContainer);
  target.appendChild(detailContainer);
};

export default ReserveDetail;
