import React from 'react'
import styles from './EventList.module.css'

export default function EventList({ events, handleClick }) {
  return (
    <div>
      {events.map((event, index) => (
        <div className={styles.card} key={event.id}>
          <h2>
            {index} - {event.title}
            <p>{event.location}</p>
            <p>{event.date}</p>
            <button onClick={() => handleClick(event.id)}>Delete</button>
          </h2>
        </div>
      ))}
    </div>
  )
}