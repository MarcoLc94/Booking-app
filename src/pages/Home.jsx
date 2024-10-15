import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setProductsThunk } from "../store/slices/products.slice"
import { HotelCard } from "../components/HotelCard"
import "../pages/Home.css"

const Home = () => {
  const products = useSelector((states) => states.products)
  const dispatch = useDispatch()

  useEffect(() => {
    const url = 'https://hotels-api.academlo.tech/hotels'
    dispatch(setProductsThunk(url))
  }, [dispatch])

  useEffect(() => {
    console.log(products) // Se ejecutará cuando 'products' cambie
  }, [products])

  return (
    <div className="cardsgroup">{
      products?.length ? (
        products.map((hotel) => (
          <HotelCard key={hotel?.id} hotel={hotel} />
        ))
      ) : (
        <p>Loading hotels...</p> // Mensaje de carga mientras no haya productos
      )
    }</div>
  )
}

export default Home