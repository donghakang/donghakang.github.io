import styled from "styled-components";

export const DescriptionLayer = styled.div`
  max-width: 860px;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  

  img {
    width: 300px;
    border-radius: 150px;
  }

  .description-container {
    padding-right: 40px;

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

  @media screen and (max-width: 640px) {
    margin-top: 40px;
    flex-direction: column-reverse;

    .description-container {

      padding: 1em;
    }

  }
`;
