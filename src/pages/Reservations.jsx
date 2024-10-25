import { useEffect } from "react"
import useCrud from "../hooks/useCrud"
import "./Reservation.css"
import ReservationCard from "../components/ReservationCard"

const Reservations = () => {
    const [reservations, getReservations, ,deleteReservation] = useCrud()

    useEffect(() => {
      const url = "https://hotels-api.academlo.tech/bookings"
      getReservations(url, true)
      
    }, [])

    console.log(reservations)
    
  return (
    <div>
        <div className="reservation">
            <h1>Reservations</h1>
            <div>
             {
                Array.isArray(reservations) && reservations?.map((hotel) => (
                     <ReservationCard key={hotel?.id} hotel={hotel} deleteReservation={deleteReservation}/>
                ))
            }
            </div>
        </div>
    </div>
  )
}

export default Reservations