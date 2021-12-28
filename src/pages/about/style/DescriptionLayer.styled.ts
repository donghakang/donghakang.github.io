import styled from "styled-components";

export const DescriptionLayer = styled.div`
  width: 860px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    width: 300px;
    border-radius: 150px;
  }

  .description-container {
    width: 60%;

    div {
      width: 100%;
    }
  }

  h1 {
    font-weight: 700;
  }
  .description-text {
    width: 540px;
  }
`;
