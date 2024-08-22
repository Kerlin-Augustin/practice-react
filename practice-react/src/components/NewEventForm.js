import './NewEventForm.css'
import { useState, useRef } from 'react'

export default function NewEventForm({ addEvent }) {

  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [location, setLocation] = useState('boston')
  // const title = useRef()
  // const date = useRef()

  const resetForm = () => {
    setTitle('')
    setDate('')
    setLocation('boston')
    // title.current.value = ""
    // date.current.value = ""
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(title, date)
    const event = {
      title: title,
      date: date,
      location: location,
      id: Math.floor(Math.random() * 100000)
    }
    console.log(event)
    addEvent(event)
    resetForm()
  }

  return (
    <form className='new-event-form' onSubmit={handleSubmit}>
      <label>
        <span>Event Title:</span>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        // ref={title}
        />
      </label>
      <label>
        <span>Event Date:</span>
        <input
          type="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        // ref={date}
        />
      </label>
      <label>
        <span>
          Event Location:
        </span>
        <select onChange={(e) => setLocation(e.target.value)}>
          <option value='boston'>Boston</option>
          <option value="lawrence">Lawrence</option>
          <option value="newton">Newton</option>
        </select>
      </label>
      <button>Submit</button>
    </form>
  )
}