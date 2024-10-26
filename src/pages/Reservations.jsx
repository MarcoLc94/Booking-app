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
            <h1 className="title-op">Reservations</h1>
            <div>
            {   reservations.length ? (
                Array.isArray(reservations) && reservations?.map((hotel) => (
                     <ReservationCard key={hotel?.id} hotel={hotel} deleteReservation={deleteReservation}/>
                ))) : (<div className="erro-message"><img src="/cute-cat-illustration-free-removebg-preview.png" alt="" width={"200px"} /><p>Ups.. you dont have any reservation.</p></div>)
            }
            </div>
        </div>
    </div>
  )
}

export default Reservations