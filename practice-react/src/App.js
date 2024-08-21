import './App.css';
import React, { useState } from 'react';
import Title from './components/title'
import Modal from './components/modal'

function App() {
  // const [name, setName] = useState('luigi')
  const [showModal, setShowModal] = useState(true)
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([
    { title: 'mario party', id: 1 },
    { title: 'mario kart', id: 2 },
    { title: 'mario odyssey', id: 3 }
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

  const handleClose = () => {
    setShowModal(false)
  }

  const subtitle = "All the latest events in Mario kingdom"
  return (
    <div className="App">
      <Title title="Events in your area" subtitle={subtitle} />


      {/* <h1>My name is {name}</h1> */}


      {showEvents && <div><button onClick={() => setShowEvents(false)}>Hide</button></div>}
      {!showEvents && <div><button onClick={() => setShowEvents(true)}>Show</button></div>}

      {showEvents && events.map((event, index) => (
        <React.Fragment key={event.id}>
          <h2>{index} - {event.title}
            <button onClick={() => handleClick(event.id)}>Delete</button>
          </h2>
        </React.Fragment>
      ))}


      {/* <Modal>
        <h2>
          10% Off Coupon Code!!
        </h2>
        <p>Use the code SPECIAL at the checkout.</p>
      </Modal> */}

      {showModal && <Modal handleClose={handleClose}>
        <h2>Terms and Conditions</h2>
        <p>lorem ipsum dolor sit amet</p>
        <a href='#'>Find out more...</a>
      </Modal>}



    </div>
  );
}

export default App;
