const RESERVE_STATUS = ["착석 중", "예약"];
const SEAT_STATUS = ["퇴석", "착석"];

export const reserveStatusRegex = (status) => {
  let result = "";

  if (status === "seated") {
    result = RESERVE_STATUS[0];
  } else {
    result = RESERVE_STATUS[1];
  }

  return result;
};

export const seatStatusRegex = (isSeated) => {
  let result = "";

  if (isSeated === "seated") {
    result = SEAT_STATUS[0];
  } else {
    result = SEAT_STATUS[1];
  }

  return result;
};
