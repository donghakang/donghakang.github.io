import React from 'react'
import * as Styled from './style'
interface TimeProps {
  id: number
  title: string
  date: string
  detail: string
}
interface TimelineProps {
  content: TimeProps[]
}
const Timeline: React.FC<TimelineProps> = ({ content }) => {
  return (
    <Styled.Timeline>
      <ul className="events-ul">
        {content.map((time: TimeProps) => (
          <li key={time.id} className="events-li">
            <div className="events-wrapper">
              <h4 className="events-title kr">{time.title}</h4>
              <span className="events-date">{time.date}</span>
            </div>
            <span className="kr">{time.detail}</span>
          </li>
        ))}
      </ul>
    </Styled.Timeline>
  )
}

export default Timeline
