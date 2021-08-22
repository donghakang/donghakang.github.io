import styled from "styled-components";

const TimelineDiv = styled.div`
  position: absolute;

  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;

  * {
    margin: 0;
    padding: 0;
  }

  .timeline {
    width: 80%;
    height: auto;
    max-width: 600px;
    margin: 0 auto;
    position: relative;
  }

  .timeline ul {
    list-style: none;
  }

  .timeline ul li {
    display: flex;
    align-items: center;
    background-color: ${(props) => props.theme.background.primary};
    box-shadow: 1px 1px 2px 2px lightgray;
    border-radius: 10px;
    padding: 20px;
  }

  .timeline ul li h4 {
    margin: 0;
  }

  .timeline-content {
    flex-direction: column;
  }
  .timeline-content h4 {
    width: 100%;
    height: 100%;
  }

  .timeline-content .timeline-paragraph {
    font-size: 12px;
    margin: 0;
  }

  .timeline-content .timeline-paragraph span {
    font-style: italic;
    font-family: Didot, serif;
  }

  .timeline ul li:last-child {
    margin-bottom: 0;
  }

  @keyframes expand {
    from {
      display: none;
    }
    to {
      display: block;
    }
  }

  @media only screen and (min-width: 768px) {
    .timeline::before {
      content: "";
      position: absolute;
      height: 100%;
      width: 2px;
      background-color: gray;
    }
    .timeline ul li {
      margin-left: 42px;
      margin-bottom: 50px;
      position: relative;
    }
    .timeline ul li::after {
      content: "";
      position: absolute;
      height: 20px;
      width: 20px;
      background-color: gray;
      border-radius: 50%;
      top: 0;
      transform: translate(-50%, -50%);
      left: -42px;
    }
    .timeline::after {
      content: "";
      position: absolute;
      height: 20px;
      width: 20px;
      border-radius: 50%;
      background-color: pink;
      transform: translate(-50%, -50%);
    }

    .timeline ul li .timeline-paragraph {
      visibility: hidden;
      height: 0vh;
      opacity: 0;
      transition: height 0.3s, opacity 0.5s;
      margin: 0;
    }

    .timeline ul li:hover .timeline-paragraph {
      visibility: visible;
      height: 80px;
      opacity: 1;
      margin-top: 12px;
    }
  }

  @media only screen and (max-width: 768px) {
    .timeline::before {
      content: "";
      position: absolute;
      height: 100%;
      margin-left: 50%;
      width: 2px;
      background-color: gray;
    }
    .timeline ul li {
      margin-bottom: 50px;
      position: relative;
    }

    .timeline ul li .timeline-paragraph {
      visibility: hidden;
      height: 0vh;
      opacity: 0;
      transition: height 0.3s, opacity 0.5s;
      margin: 0;
    }

    .timeline ul li:hover .timeline-paragraph {
      visibility: visible;
      height: 120px;
      opacity: 1;
      margin-top: 12px;
    }
  }
`;

function MyTimeline({t}) {

  const timeline = [1,2,3,4];

  return (
    <TimelineDiv>
      <div className="timeline">
        <ul>
          {timeline.map(e => (
            <li key={`timeline${e}`}>
            <div className="timeline-content">
              <h4>{t(`about:timeline.${e}.title`)}</h4>
              <div className="timeline-paragraph">
                <div>
                  <strong>{t(`about:timeline.${e}.subtitle`)}</strong>.
                  <br />
                  <span>2011-01 ~ 2014-05</span>
                  <p>{t(`about:timeline.${e}.description`)}</p>
                </div>
              </div>
            </div>
          </li>
          ))}
        </ul>
      </div>
    </TimelineDiv>
  );
}

export default MyTimeline;
