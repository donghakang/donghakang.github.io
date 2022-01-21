import React from "react";
import * as Styled from "./style/Loading.styled";

const Loading: React.FC = () => {
  return (
    <Styled.Loading>
      <div className="loading-container">
        <div className="loading-component">
          <div className="loading-circle1"></div>
          <div className="loading-circle2"></div>
        </div>
        <span>Loading...</span>
      </div>
    </Styled.Loading>
  );
};

export default Loading;
