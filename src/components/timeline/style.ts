import styled from '@emotion/styled'

export const Timeline = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  /* justify-content: space-around; */
  .events-ul {
    position: relative;
    list-style-type: none;
    align-items: center;
    margin: 0;
    padding: 0;

    max-width: 60%;
    .events-li {
      margin: auto;
      padding-bottom: 4rem;
      padding-left: 1.25rem;
      border-left: 1px solid var(--primary);
      .events-wrapper {
        transform: translateY(-8px);
        .events-title {
          margin: 0;
          padding: 0;
          font-size: 1.125rem;
        }

        .events-date {
          font-size: 12px;
          color: var(--primary);
        }
      }

      &::before {
        content: '';
        position: absolute;
        left: -4px;
        width: 8px;
        height: 8px;
        border-radius: 4px;
        background-color: var(--primary);
      }

      &:last-of-type {
        padding-bottom: 0;
      }
    }
  }
`
