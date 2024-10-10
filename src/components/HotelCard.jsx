import "./HotelCard.css";
import Stars from "../shared/Stars";
import { useNavigate } from "react-router-dom";

export const HotelCard = ({ hotel }) => {
  const navigate = useNavigate()

  const handleDetail = () => {
    navigate(`/hotel/${hotel.id}`)
  }

  return (
    <div className="card-container">
      <div className="card">
        <img src={hotel.images[0].url} alt="" />
        <div className="info-container">
          <h1>{hotel.name}</h1>
          <Stars hotel={hotel}/>
          <p>{hotel.rating}</p>
          <div className="country-name">
            <p>{hotel.city.country},</p>
            <p>{hotel.city.name}</p>
          </div>
          <h2>${hotel.price}</h2>
          <div className="button">
            <button onClick={handleDetail}>See more...</button>
          </div>
        </div>
      </div>
    </div>
  );
};
