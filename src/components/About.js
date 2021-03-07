import Nav from "./Nav";
import "../App.scss";
import { GrLanguage } from "react-icons/gr";
import React, { useState, Component } from "react";

function Main(props) {
  console.log(props.lang)
  if (props.lang) {
    return (
        <div>
          <h2>Hi, My name is Dongha.</h2>
          <div>I recently graduated from University of Minnesota - Twin Cities</div>
        </div>
      );
  } else {
      return (
          <div>
              <h2>안녕하세요, 강동하입니다.</h2>
              <div></div>
          </div>
      )
  }
}


export default function About() {
    const [language, setLanguage] = useState(false)
    console.log(language)
  return (
    <div className="about_page">
        <div onClick={() => setLanguage(!language)}>
                <GrLanguage color="#cccccc"/>
            </div>
      <Nav />
      <h1>About Me</h1>
        <Main lang={language}/>
    </div>
  );
}
