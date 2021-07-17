import React, { useState } from "react";
import Switch from "@material-ui/core/Switch";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../App.scss";
import { useSelector, useDispatch } from "react-redux";
import { changeMode } from "../redux/theme";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  margin: 0 20px;
  z-index: 100;
  height: 60px;
`;

const SwitchButton = () => {
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  return (
    <Switch
      checked={theme}
      onChange={() => dispatch(changeMode())}
      name="checkedA"
      inputProps={{ "aria-label": "secondary checkbox" }}
    />
  );
};

export default function Header() {
  return (
    <Nav className="nav-bar">
      <div className="brand">
        <Link to="/" className="nav-link">
          <span>d</span>
        </Link>
      </div>
      <ul>
        <li className="menu">
          <SwitchButton />
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
