import React from 'react'

export default function EventList({ events, handleClick }) {
  return (
    <div>
      {events.map((event, index) => (
        <React.Fragment key={event.id}>
          <h2>
            {index} - {event.title}
            <button onClick={() => handleClick(event.id)}>Delete</button>
          </h2>
        </React.Fragment>
      ))}
    </div>
  )
}