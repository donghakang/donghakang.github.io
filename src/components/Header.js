import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../App.scss";
import { useSelector, useDispatch } from "react-redux";
import { changeMode } from "../redux/theme";
import { changeLanguage } from "../redux/language";
import { FaMoon, FaSun } from "react-icons/fa";

const Nav = styled.nav`
  position: sticky;
  top: 0;
  width: 100%;
  display: flex;
  height: 60px;
  justify-content: space-between;
  margin: 0;
  z-index: 100;
`;

// const SwitchButton = (props) => {
//   return (
//     <Switch
//       {...props}
//       name="checkedA"
//       inputProps={{ "aria-label": "secondary checkbox" }}
//     />
//   );
// };

const SwitchButton = (props) => {
  const style = {
    border: "none",
    background: "none",
    color: "inherit",
    fontSize: "20px",
  };
  const { theme, on, off, onClick } = props;

  return (
    <button onClick={onClick} style={style}>
      {theme ? on : off}
    </button>
  );
};

export default function Header() {
  const { theme } = useSelector((state) => state.theme);
  const { language } = useSelector((state) => state.language);
  const dispatch = useDispatch();

  return (
    <Nav className="nav-bar">
      <div className="brand">
        <Link to="/" className="nav-link">
          <span>d</span>
        </Link>
      </div>
      <ul>
        <li className="menu">
          {/* <SwitchButton
            checked={language}
            onChange={() => dispatch(changeLanguage())}
          /> */}
          <SwitchButton
            theme={language}
            on={<span>Ko</span>}
            off={<span>En</span>}
            onClick={() => dispatch(changeLanguage())}
          />
        </li>
        <li className="menu">
          <SwitchButton
            theme={theme}
            on={<FaMoon />}
            off={<FaSun />}
            onClick={() => dispatch(changeMode())}
          />
        </li>
        <li className="menu">
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
        <li className="menu">
          <Link to="/project" className="nav-link">
            Project
          </Link>
        </li>
      </ul>
    </Nav>
  );
}
