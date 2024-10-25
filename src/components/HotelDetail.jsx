import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";
import Stars from "../shared/Stars";
import OtherHotels from "./OtherHotels";
import HotelMap from "../components/HotelMap";
import "../components/HotelDetail.css";
import FormReservations from "./FormReservations";

export const HotelDetail = () => {
  const { id } = useParams();

  const [hotel, getHotel] = useFetch();

  useEffect(() => {
    const url = `https://hotels-api.academlo.tech/hotels/${id}`;
    getHotel(url);
  }, [id]);

  console.log(hotel);

  return (
    <div className="detailed">
      <div>
        <h1>{hotel?.name}</h1>
        <div className="hotel-info">
          {hotel ? <Stars hotel={hotel} /> : <div className="loader"></div>}
          <h2>{hotel?.rating}</h2>
        </div>
        <div className="img-detailed">
          <img src={hotel?.images[0].url} alt={hotel?.name} width={400} />
          {hotel && <HotelMap lat={hotel?.lat} lon={hotel?.lon} className="map"/>}
        </div>
        <div className="detailed-city">
          {hotel?.city.name}, {hotel?.city.country}
        </div>
        <div className="detailed-address">
          {
            hotel ? 
            (<box-icon name="map"></box-icon>) : null 

          }
          <address>{hotel?.address}</address>
        </div>
        <p>{hotel?.description}</p>
        <FormReservations hotelId={hotel?.id}/>
        <OtherHotels city={hotel?.city} id={hotel?.id} />
      </div>
    </div>
  );
};
