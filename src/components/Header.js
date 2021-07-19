import React, { useState } from "react";
import Switch from "@material-ui/core/Switch";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../App.scss";
import { useSelector, useDispatch } from "react-redux";
import { changeMode } from "../redux/theme";
import { changeLanguage } from "../redux/language";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  margin: 0 20px;
  z-index: 100;
  height: 60px;
`;

const SwitchButton = (props) => {
  return (
    <Switch
      {...props}
      name="checkedA"
      inputProps={{ "aria-label": "secondary checkbox" }}
    />
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
          <SwitchButton
            checked={language}
            onChange={() => dispatch(changeLanguage())}
          />
        </li>
        <li className="menu">
          <SwitchButton
            checked={theme}
            onChange={() => dispatch(changeMode())}
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
