import styled from "@emotion/styled";

export const Chip = styled.div`
  display: flex;
  overflow: scroll;

  .tag-chip {
    background-color: ${({ theme }) => theme.colors.alternate_blue_5};
    padding: 2px 12px;
    border-radius: 12px;
    margin: 4px 8px;
    color: white;
  }
`;
