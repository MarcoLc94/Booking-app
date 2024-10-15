import { useEffect } from "react"
import useFetch from "../hooks/useFetch"
import { HotelCard } from "../components/HotelCard"
import "../components/OtherHotel.css"


const OtherHotels = ( {city, id }) => {

    const [hotelsByCity, getHotelByCity] = useFetch()
    
    useEffect(() => {
     const url = `https://hotels-api.academlo.tech/hotels?cityId=${city?.id}`
     if(city){
         getHotelByCity(url)
     }
    }, [])
    
    useEffect(() => {
    console.log(hotelsByCity) // Se ejecutará cuando 'products' cambie
  }, [hotelsByCity])

  return (
    <div>
        <h2 className="title-other">Other hotels in {city?.country}</h2>
        <div className="other-container">
          {
            hotelsByCity?.filter((hotel) => hotel.id !== id).map((hotel) => (
              <HotelCard key={hotel?.id} hotel={hotel}/>
            ))
          }
        </div>
    </div>
  )
}

export default OtherHotels