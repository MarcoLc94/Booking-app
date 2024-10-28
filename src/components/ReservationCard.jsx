import "./ReservationCard.css";

const ReservationCard = ({ hotel, deleteReservation, setBookSelected, setFormIsOpen }) => {

    const initialDate = new Date(hotel.checkIn).getTime()
    const finalDate = new Date(hotel.checkOut).getTime()
    const reservationDays = (finalDate - initialDate) / (1000 * 60 * 60 * 24)
    console.log(initialDate, finalDate)

    const handleDelete = () => {
        const url = `https://hotels-api.academlo.tech/bookings/${hotel.id}`
        deleteReservation(url, hotel.id, true)
    }

    const handleModal = () => {
      setFormIsOpen(true)
      setBookSelected(hotel)
    }

  return (
    <div className="reservation-detail">
      <div className="img-detail">
        <img src={hotel.hotel.images[0].url} alt={hotel.hotel.name} width={"200px"}/>
      </div>
      <div className="hotel-detail">
        <h2>{hotel?.hotel.name}</h2>
        <div className="hotel-names">
          <p>{hotel?.hotel.city.name}</p>
          <p>, {hotel?.hotel.city.country}.</p>
        </div>
        <a onClick={handleModal}>Rate and comment this visit... Here!</a>
      </div>
      <div>
        <div className="hotel-days">
          <span>
            <span className="titles">Reservation days:</span>
            <span>{reservationDays}</span>
          </span>
        </div>
        <div className="hotel-price">
          <span>
            <span className="titles">Subtotal Price:</span>
            <span>USD ${reservationDays * +hotel?.hotel.price}</span>
          </span>
        </div>
      </div>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default ReservationCard;
