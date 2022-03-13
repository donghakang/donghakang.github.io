import { css } from "@emotion/react";

// BLOG HEADER
export const tagContainer = css``;

export const tagFlex = css`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0.25em;
  flex: 1 0 auto;
  justify-content: space-evenly;
`;

export const tagList = css`
  background-color: orange;
  color: white;
  text-decoration: none;

  padding: 0.75em;
  margin: 0.5em 0.875em;
  font-size: 0.875rem;
  border-radius: 2em;
  position: relative;
  display: inline-block;

  .badge {
    position: absolute;
    top: -5px;
    right: -5px;
    width: 20px;
    height: 20px;
    font-size: 0.875em;
    border-radius: 50%;
    background: red;
    color: white;

    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
  }
`;

// BLOG MAIN
export const blogContainer = css`
  margin: 0;
  padding: 0;
`;

export const blogFlex = css`
  list-style-type: none;
  margin: 1em;
  padding: 0;
`;

export const blogList = css`
  margin: 1em 0;

  a {
    font-family: "Inter", sans-serif;
    font-weight: 800;
    letter-spacing: -0.3;
    line-height: 0.8;
    font-size: calc(1.5rem + 1vw);
  }
`;

