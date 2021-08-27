import React from "react";
import styled from "styled-components";


const LoadingDiv = styled.div`
    margin: 0;
    padding: 0;

    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: ${(props) => props.theme.background.primary};
    color: ${(props) => props.theme.text.primary};

  .wavy {
    position: relative;
    // -webkit-box-reflect: below -12px linear-gradient(transparent, rgba(0, 0, 0, 0.2));
  }
  .wavy span {
    position: relative;
    display: inline-block;
    font-size: 2em;
    text-transform: uppercase;
    animation: animate 1.5s ease-in-out infinite;
    animation-delay: calc(.1s * var(--i))
  }
  @keyframes animate {
    0%, 100% {
      transform: translateY(0px);
    }
    20% {
      transform: translateY(-20px);
    }
    40% {
      transform: translateY(0px);
    }
  }
`;

function Loading({theme}) {
  return (
    <LoadingDiv>
      <div className="wavy">
        <span style={{"--i":"1"}}>D</span>
        <span style={{"--i":"2"}}>O</span>
        <span style={{"--i":"3"}}>N</span>
        <span style={{"--i":"4"}}>G</span>
        <span style={{"--i":"5"}}>H</span>
        <span style={{"--i":"6"}}>A</span>
        <span style={{"--i":"7"}}>K</span>
        <span style={{"--i":"8"}}>A</span>
        <span style={{"--i":"9"}}>N</span>
        <span style={{"--i":"10"}}>G</span>
      </div>
    </LoadingDiv>
  );
}

export default Loading;
