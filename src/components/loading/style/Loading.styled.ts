import styled from "styled-components";

export const Loading = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .loading-component {
    width: 60px;
    height: 60px;
    margin: 0 auto;
    position: relative;
  }
  span {
    margin: 8px auto;
    font-weight: 600;
  }

  .loading-circle2 {
    background-color: ${(props) => props.theme.colors.main_blue};
  }
  .loading-circle1 {
    background-color: ${(props) => props.theme.colors.main_orange};
  }
  .loading-circle1,
  .loading-circle2 {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    -webkit-animation: sk-bounce 2s infinite ease-in-out;
    animation: sk-bounce 2s infinite ease-in-out;
  }
  .loading-circle2 {
    -webkit-animation-delay: -1s;
    animation-delay: -1s;
  }
  @-webkit-keyframes sk-bounce {
    0%,
    100% {
      -webkit-transform: scale(0);
    }
    50% {
      -webkit-transform: scale(1);
    }
  }
  @keyframes sk-bounce {
    0%,
    100% {
      transform: scale(0);
      -webkit-transform: scale(0);
    }
    50% {
      transform: scale(1);
      -webkit-transform: scale(1);
    }
  }
`;
