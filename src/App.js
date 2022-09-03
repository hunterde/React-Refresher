import './App.css';
import Modal from './Components/Modal'
import React,{useEffect, useState} from 'react'
import EventList from './Components/EventList'
import NewEventForm from './Components/NewEventForm';
//import ReactDOM, { createPortal } from 'react-dom'

function App() {
  const [showModal, setShowModal] = useState(false)

  const [events, setEvents]= useState ([])
  /*const [events2, setEvents2]= useState ([
    {title: "event4", id:4},
    {title: "event5", id:5},
    {title: "event6", id:6}
  ])*/
  const addEvent=(event)=>{
    setEvents((prevEvents) =>{
      return [...prevEvents,event]
    })
    setShowModal(false)
  }

  useEffect(() => {
    console.log(showModal);
  }, [showModal])
  return (
    <div className="App">
      {showModal &&(
      <Modal>
        
        <NewEventForm addEvent ={addEvent}/>
        <button onClick={()=> setShowModal(false)}>hide model</button>
      </Modal>
       )}
      <p> not modal</p>
      
      <button onClick={()=> setShowModal(true)}>Add New Event</button>
     {<EventList events={events} setEvents={setEvents}/>}
     
    </div>
  );
}

export default App;
//{<EventList events={events2} setEvents={setEvents2}/>}