import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../App.scss";
import { useSelector, useDispatch } from "react-redux";
import { changeMode } from "../redux/theme";
import { changeLanguage } from "../redux/language";
import { FaMoon, FaSun } from "react-icons/fa";
import { MdClose, MdMenu } from "react-icons/md";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  height: 60px;
  justify-content: space-between;
  margin: 0;
  z-index: 4;

  .brand {
    margin: 0;
    font-size: xx-large;
  }

  .menu {
    margin: auto 1vw;
  }

  .nav-button {
    border: none;
    background: none;
    color: inherit;
    font-size: 20px;
  }

  .nav-link:hover,
  .nav-button:hover {
    color: gray;
  }

  .fas {
    display: none;
  }

  // Phone view
  @media only screen and (max-width: 768px) {
    .fas {
      display: flex;
      margin: auto 4vw;
      font-size: 24px;
      position: absolute;
      top: 30px;
      right: 0;
      transform: translate(-50%, -50%);
      z-index: 99;
    }
  }
`;

const NavMenu = styled.ul`
  list-style-type: none;
  display: flex;
  margin: 0;
  padding: 0;

  @media only screen and (max-width: 768px) {
    transform: ${(props) =>
      props.clicked ? "translateX(40vw);" : "translateX(100vw);"};
    background-color: ${(props) => props.theme.background.primary};
    padding: 0;
    position: absolute;
    display: flex;
    flex-direction: column;
    list-style: none;
    height: 100vh;
    width: 60%;
    transition: 0.3s ease-in-out;

    .menu {
      margin: 0;
      transition: 0.3s ease-in-out;
    }
    
    li:nth-child(n + 3) {
      position: absolute;
      top: 100px;
      transform: translateY(-50%);
    }

    li:nth-child(n + 4) {
      position: absolute;
      top: 140px;
      transform: translateY(-50%);
    }

    li:nth-child(-n + 2) {
      position: absolute;
      bottom: 100px;
      transform: translateY(-50%);
    }

    li:nth-child(2) {
      left: 20%;
    }
  }
`;

const SwitchButton = (props) => {
  const { theme, on, off, onClick, className } = props;

  return (
    <button onClick={onClick} className={className}>
      {theme ? on : off}
    </button>
  );
};

export default function Header() {
  const [navClicked, setNavClicked] = useState(false);
  const { theme } = useSelector((state) => state.theme);
  const { language } = useSelector((state) => state.language);
  const dispatch = useDispatch();

  const handleClick = () => {
    setNavClicked(!navClicked);
  };

  return (
    <Nav className="nav-bar">
      <div className="brand">
        <Link to="/" className="nav-link">
          <span>d</span>
        </Link>
      </div>
      <NavMenu clicked={navClicked}>
        <li className="menu">
          <SwitchButton
            className="nav-link nav-button"
            theme={language}
            on={<span>Ko</span>}
            off={<span>En</span>}
            onClick={() => dispatch(changeLanguage())}
          />
        </li>
        <li className="menu">
          <SwitchButton
            className="nav-link nav-button"
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
      </NavMenu>
      {navClicked ? (
        <MdClose className="fas fas-close" onClick={handleClick} />
      ) : (
        <MdMenu className=" fas" onClick={handleClick} />
      )}
    </Nav>
  );
}
