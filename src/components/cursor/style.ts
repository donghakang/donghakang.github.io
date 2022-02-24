import styled from "styled-components";

export const Cursor = styled.div`
    width: 40px;
    height: 40px;
    border: 2px solid dodgerblue;
    border-radius: 100%;
    position: fixed;
    transform: translate(-50%, -50%);
    /* transition: all 100ms ease; */
    z-index: 99;
    transition-property: opacity;
    pointer-events: none;
    transition: all 100ms ease;
   transition-property: opacity, background-color, transform;


  
`;
