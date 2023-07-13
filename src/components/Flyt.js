// import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Flyt = ({flight, onDelete, onToggle}) =>{
    return(
        <div className={`flight ${ flight.reminder ? 'reminder' : ""} `} onDoubleClick={() =>onToggle(flight.id)} >
           <h3>{flight.event} <FaTimes style={{ color: 'hotpink', cursor: 'pointer' }} 
             onClick={() => onDelete(flight.id)}
           />
            </h3>
           <p>{flight.dayAndTime}</p>
        </div>
    )
}

export default Flyt  