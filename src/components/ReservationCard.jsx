import "./ReservationCard.css";

const ReservationCard = ({ hotel, deleteReservation }) => {
  return (
    <div className="reservation-detail">
      <div>
        <img src={hotel.hotel.images[1]} alt={hotel.hotel.name} />
      </div>
      <div>
        <h2>{hotel?.hotel.name}</h2>
        <div>
          <p>{hotel?.hotel.city.name},</p>
          <p>{hotel?.hotel.city.country}</p>
        </div>
        <a href="">Rate and comment this visit...</a>
      </div>
      <div>
        <div>
          <span>
            <span>Reservation days</span>
            <span>4</span>
          </span>
        </div>
        <div>
          <span>
            <span>Subtotal Price</span>
            <span> Usd 0</span>
          </span>
        </div>
      </div>
      <button>Delete</button>
    </div>
  );
};

export default ReservationCard;
