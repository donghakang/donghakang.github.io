import styled from "styled-components";

interface LoadingProps {
    loadColor: string[];
}

export const Loading = styled.div<LoadingProps>`
  .loading-container {
    position: fixed;
    width: 60px;
    height: 60px;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
  }
  .loading-component {
    width: 60px;
    height: 60px;
    position: absolute;
    margin: 0 auto;
  }
  .loading-circle2 {
    background-color: ${({loadColor}) => loadColor[0]};
  }
  .loading-circle1 {
    background-color: ${({loadColor}) => loadColor[1]};
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
