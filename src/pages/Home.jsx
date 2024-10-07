import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setProductsThunk } from "../store/slices/products.slice"
import { HotelCard } from "../components/HotelCard"

const Home = () => {
  const products = useSelector((states) => states.products)
  const dispatch = useDispatch()

  useEffect(() => {
    const url = 'https://hotels-api.academlo.tech/hotels'
    dispatch(setProductsThunk(url))
  }, [])

  console.log(products)

  return (
    <div>{
    products?.map((hotel) => (
      <HotelCard key={hotel.id} hotel={hotel}/>
    ))  
    }</div>
  )
}

export default Home