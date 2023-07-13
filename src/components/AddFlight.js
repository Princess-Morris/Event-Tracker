import { useState } from "react"

const AddFlight = ({onAdd}) =>{
    const [event, setEvent] = useState('')
    const [dayAndTime, setDayAndTime] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) =>{
        e.preventDefault()

        if(!event){
            alert("please add flight")
            return
        }

        onAdd({event, dayAndTime, reminder})

        setEvent('')
        setDayAndTime('')
        setReminder(false)
    }

    return(
        <form className="add-form" onSubmit={onSubmit} >
           <div className="form-control">
              <label>Event</label>
              <input type='text' placeholder='Add Event to your event'
              value={event} onChange={(e)=> setEvent(e.target.value)} />
           </div>

           <div className="form-control">
              <label>Day & Time</label>
              <input type='text' placeholder='Add Time'
              value={dayAndTime} onChange={(e)=> setDayAndTime(e.target.value)} />
           </div>

           <div className="form-control form-control-check">
              <label>Reminder</label>
              <input 
              type='checkbox' 
              checked={reminder}
                  value={reminder} 
                   onChange={(e) => setReminder(e.currentTarget.checked)}
              />
           </div>

           <input type="submit" value="Save Event"
           className="btn btn-block" />
        </form>
    )     
}

export default AddFlight