import React from 'react'
import Flight from "./Flyt"

const Flights = ({flights, onDelete, onToggle}) => {

        return(
        <div>
          {flights.map((flight, index) =>(
          <Flight key={index} flight={flight}
           onDelete={onDelete} onToggle={onToggle}
          />
          ))}
        </div>
    )
}

export default Flights