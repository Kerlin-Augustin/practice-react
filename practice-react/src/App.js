import './App.css';
import { useState } from 'react';
import Title from './components/title'
import Modal from './components/modal'
import EventList from './components/EventList';
import NewEventForm from './components/NewEventForm';

function App() {
  // const [name, setName] = useState('luigi')
  const [showModal, setShowModal] = useState(false)
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([])

  const addEvent = (event) => {
    setEvents((prevEvents) => {
      return [...prevEvents, event]
    })
    setShowModal(false)
  }



  const handleClick = (id) => {
    // name === 'luigi' ? setName('toad') : setName('luigi')
    // console.log(name)
    // you only need to do a callback function if your new state relies on the previous state value. So if I just wanted to change the name of something using state you dont need to worry about doing a callback.
    setEvents((prevEvents) => {
      return prevEvents.filter(event => id !== event.id)
    })
    console.log(id)
  }

  const openModal = () => {setShowModal(true)}

  const subtitle = "All the latest events in Mario kingdom"
  return (
    <div className="App">
      <Title title="Events in your area" subtitle={subtitle} />


      {/* <h1>My name is {name}</h1> */}


      {showEvents && <div><button onClick={() => setShowEvents(false)}>Hide</button></div>}
      {!showEvents && <div><button onClick={() => setShowEvents(true)}>Show</button></div>}

      {showEvents && <EventList events={events} handleClick={handleClick} />}


      {/* <Modal>
        <h2>
          10% Off Coupon Code!!
        </h2>
        <p>Use the code SPECIAL at the checkout.</p>
      </Modal> */}

      {showModal && <Modal isSalesModal={true}>
        <NewEventForm addEvent={addEvent}/>
      </Modal>}

      <button onClick={openModal}>Add New Event</button>

    </div>
  );
}

export default App;
