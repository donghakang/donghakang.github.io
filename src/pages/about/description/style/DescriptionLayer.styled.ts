import styled from "styled-components";

export const DescriptionLayer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 300px;
    border-radius: 150px;
    margin: 1em;
  }

  .description-container {
    div {
      width: 100%;
    }
  }
  .description-text {
    width: 540px;

    div {
      margin-top: 1em;
    }
  }

  @media screen and (max-width: 640px) {
    margin-top: 100px;
    flex-direction: column-reverse;
    justify-content: start;

    img {
      width: 75vw;
      border-radius: 37.5vw;
      margin: 1em;
    }

    .description-container {
    }
  }
`;
