import './NewEventForm.css'
import React, { useState  } from 'react'


export default function NewEventForm({addEvent}) {

   const [title,setTitle]=useState('')
    const [date,setDate]=useState('')
    const [location,setLocation] = useState('US')
//    const title = useRef()
//    const date= useRef()

    const resetForm=()=> {
    setTitle('') 
    setDate('')
    setLocation('')
    // title.current.value=""
    // date.current.value=""
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
      //  console.log(title,date)
        const event={
            title:title,
            date: date,
            location: location,
            id: Math.floor(Math.random()*10000)
        }
        addEvent(event)
        console.log(event)
        // console.log(Math.Random)
         resetForm()
    }

    return (
    <form className="new-event-form" onSubmit={handleSubmit}>
      <label>
        <span>Event Title:</span>
      <input 
      type="text"
      //ref={title} 
      onChange={(e)=> setTitle(e.target.value)}
     value={title}
      />
      </label>
      <label>
        <span>Event Date:</span>
        <input 
        type="date"
        //ref={date} 
        onChange={(e)=> setDate(e.target.value)}
        value={date}
        />
      </label>
      <label>
        <span>Event Location:</span>
        <select onChange={(e)=> setLocation(e.target.value)}>
            <option value="US">US</option>
            <option value="TX">TX</option>
            <option value="AL">AL</option>
        </select>
      </label>
      <button>Submit</button>
      
    </form>
  )
}
/* reset button and title checking
<button onClick={resetForm}  >Reset</button>
      <p>title {title} date {date}</p>
      <p onClick={resetForm} >Reset form</p>
*/
