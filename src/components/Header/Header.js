import "./header.module.scss";

const Header = ({ target }) => {
  const header = document.createElement("header");
  const h1 = document.createElement("h1");

  h1.innerText = "예약 목록";

  header.appendChild(h1);
  target.appendChild(header);
};

export default Header;
