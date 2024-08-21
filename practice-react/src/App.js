import './App.css';
import { useState } from 'react';

function App() {
  // const [name, setName] = useState('luigi')
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([
    {title: 'mario party', id: 1},
    {title: 'mario kart', id: 2},
    {title: 'mario odyssey', id:3}
  ])
  console.log(showEvents)
  const handleClick = (id) => {
    // name === 'luigi' ? setName('toad') : setName('luigi')
    // console.log(name)
    // you only need to do a callback function if your new state relies on the previous state value. So if I just wanted to change the name of something using state you dont need to worry about doing a callback.



    setEvents((prevEvents) => {
      return prevEvents.filter(event => id !== event.id)
    })
    console.log(id)
  }
  return (
    <div className="App">
      {/* <h1>My name is {name}</h1> */}
      {showEvents && <div><button onClick={() => setShowEvents(false)}>Hide</button></div>}
      {!showEvents && <div><button onClick={() => setShowEvents(true)}>Show</button></div>}
      
      {showEvents && events.map((event, index) => (
        <div key={event.id}>
          <h2>{index} - {event.title}
          <button onClick={() => handleClick(event.id)}>Delete</button>
          </h2>
        </div>
      ))}
    </div>
  );
}

export default App;
