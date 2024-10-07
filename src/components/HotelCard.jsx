import "./HotelCard.css";
import Stars from "../shared/Stars";

export const HotelCard = ({ hotel }) => {
  return (
    <div className="card-container">
      <div className="card">
        <img src={hotel.images[0].url} alt="" />
        <div className="info-container">
          <h1>{hotel.name}</h1>
          <Stars rating={hotel.rating}/>
          <p>{hotel.rating}</p>
          <div className="country-name">
            <p>{hotel.city.country},</p>
            <p>{hotel.city.name}</p>
          </div>
          <h2>${hotel.price}</h2>
          <div className="button">
            <button>See more...</button>
          </div>
        </div>
      </div>
    </div>
  );
};
