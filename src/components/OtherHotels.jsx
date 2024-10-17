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
    }, [city])
    
    useEffect(() => {
    console.log(hotelsByCity) // Se ejecutará cuando 'products' cambie
  }, [hotelsByCity])

  return (
    <div>
        <h2 className="title-other">Other hotels in {city?.name}</h2>
        <div className="other-container">
          {
            hotelsByCity?.filter((hotel) => hotel.id !== id).map((hotel) => (
              hotel ? <HotelCard key={hotel?.id} hotel={hotel}/> : <h2 key={hotel?.id}>Not found</h2>
            ))
          }
        </div>
    </div>
  )
}

export default OtherHotels