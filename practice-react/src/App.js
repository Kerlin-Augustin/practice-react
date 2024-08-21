import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('luigi')
  const [events, setEvents] = useState([
    {title: 'mario party', id: 1},
    {title: 'mario kart', id: 2},
    {title: 'mario odyssey', id:3}
  ])
  const handleClick = () => {
    name === 'luigi' ? setName('toad') : setName('luigi')
    console.log(name)
  }
  return (
    <div className="App">
      <h1>My name is {name}</h1>
      <button onClick={handleClick}>Change Name</button>
      {events.map((event, index) => (
        <div key={event.id}>
          <h2>{index} - {event.title}</h2>
        </div>
      ))}
    </div>
  );
}

export default App;
