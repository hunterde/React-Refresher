import React from 'react'
//import ReactDOM, { createPortal } from 'react-dom'
//import handleClick from '../App.js'



export default function EventList({events , setEvents}) {
   
    let handleClick = (id)=> {
        setEvents((prevEvents)=>{
          return prevEvents.filter((events)=>{
            return id !==events.id
          }) 
        })
      }
  return (
    <div>
     {events.map((events,index) => (
    <React.Fragment key={events.id}>
        <h2>{index} - {events.title}</h2>
        <p>{events.location} - {events.date}</p>
       <button onClick={()=> handleClick(events.id)}>delete event </button>
   </React.Fragment>
))}
    </div>
  )
}


