import { useState, useEffect} from "react"
import Header from "./components/Header";
import ButtonOut from "./components/ButtonOut";
import Flights from "./components/Flights";
import AddFlight from "./components/AddFlight";

function App() {
  const [showAddFlight, setShowAddFlight] = useState(false)
  const [flights, setFlights] = useState([])

  useEffect(() =>{ 
    const getFlights = async() =>{
      const flightsFromServer = await fetchFlights()
      setFlights(flightsFromServer)
    }

    getFlights()
  }, [])

  // Fetch Flights

  const fetchFlights = async () =>{
    const res = await fetch("http://localhost:5000/flights")
    const data = await res.json()

    console.log(data)
     return data
  }

    // Fetch Flight

    const fetchFlight = async (id) =>{
      const res = await fetch(`http://localhost:5000/flights/${id}`)
      const data = await res.json()
  
      console.log(data)
       return data
    }


// Add Flight
const addFlight = async (flight) =>{
   const res = await fetch("http://localhost:5000/flights", {
    method: 'POST',
    headers: {   
      'Content-type': 'application/json'
    },
    body: JSON.stringify(flight)
   } ) 

   const data = await res.json()

   setFlights([...flights, data])

  // const id = Math.floor(Math.random() * 10000) + 1
  // const newFlight = {id, ...flight}
  // setFlights([ ...flights, newFlight])
}

// Delete Flight
   const deleteFlight = async (id) =>{
    await fetch(`http:localhost:5000/flights/${id}`, {
      method: 'DELETE'
    })
     setFlights(flights.filter((flight) => flight.id !== id))
   }

   // toggle Reminder

   const toggleReminder = async (id) =>{
      const flightToToggle = await fetchFlight(id)
      const updFlight = { ...flightToToggle,  
         reminder: !flightToToggle.reminder}

         const res = await fetch(`http://localhost:5000/flights/${id}`, {
          method: 'PUT',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(updFlight)
         })

         const data = await res.json()

      setFlights(
        flights.map((flight) => 
        flight.id === id ? { ...flight, reminder:
           data.reminder} : flight))
     }

  return (
    <div className="container">

      <div className="two_divs">
      <Header title="Hello Princess" />
      <ButtonOut onAdd={() =>{ setShowAddFlight(!showAddFlight)}} 
       showAdd={showAddFlight}
       />
      </div>
      
       {showAddFlight && <AddFlight onAdd={addFlight} />}

      {flights.length > 0 ? <Flights flights={flights} 
      onDelete={deleteFlight} onToggle={toggleReminder}
      /> : "no flight to show"}
    </div>
  );
}

export default App;
