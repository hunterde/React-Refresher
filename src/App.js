import './App.css';
import Modal from './Components/Modal'
import React,{useEffect, useState} from 'react'
import EventList from './Components/EventList'
import NewEventForm from './Components/NewEventForm';
//import ReactDOM, { createPortal } from 'react-dom'

function App() {
  const [showModal, setShowModal] = useState(false)

  const [events, setEvents]= useState ([
    {title: "event1", id:1},
    {title: "event2", id:2},
    {title: "event3", id:3}
  ])
  const [events2, setEvents2]= useState ([
    {title: "event4", id:4},
    {title: "event5", id:5},
    {title: "event6", id:6}
  ])
 

  useEffect(() => {
    console.log(showModal);
  }, [showModal])
  return (
    <div className="App">
      {showModal &&(
      <Modal>
        
        <NewEventForm/>
        <button onClick={()=> setShowModal(false)}>hide model</button>
      </Modal>
       )}
      <p> not modal</p>
      
      <button onClick={()=> setShowModal(true)}>Add New Event</button>
     {<EventList events={events} setEvents={setEvents}/>}
     {<EventList events={events2} setEvents={setEvents2}/>}
    </div>
  );
}

export default App;
