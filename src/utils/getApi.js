import axios from "axios";

const API_ADDRESS = "https://frontend.tabling.co.kr/v1/store/9533/reservations";

export const request = async () => {
  try {
    const { data } = await axios.get(`${API_ADDRESS}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
