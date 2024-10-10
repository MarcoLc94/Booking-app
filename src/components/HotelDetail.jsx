import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"
import Stars from "../shared/Stars"

export const HotelDetail = () => {
    const { id } = useParams()
    
    const [hotel, getHotel] = useFetch()

    useEffect(() => {
     const url = `https://hotels-api.academlo.tech/hotels/${id}`
     getHotel(url)
    }, [id])

    console.log(hotel)
    
    

  return (
    <div>
        <h1>{hotel?.name}</h1>
        <div>
            {
            hotel ? (<Stars hotel={hotel}/>) : (<div>Loading...</div>) 
            }
            <h2>{hotel.rating}</h2>
        </div>
    </div>
  )
}
