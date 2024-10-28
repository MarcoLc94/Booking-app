import { useEffect, useState } from "react"
import useFetch from "../hooks/useFetch"
import Stars from "../shared/Stars"

const Reviews = ({hotelId}) => {

const [visibleComments, setVisibleComments] = useState(5)

const [reviewsHotel, getReviewsHotel] = useFetch()

useEffect(() => {
    const url = `https://hotels-api.academlo.tech/reviews?hotelId=${hotelId}`
    getReviewsHotel(url)
}, [hotelId])

console.log(reviewsHotel)

const handleMore = () => {
    setVisibleComments(visibleComments + 5)
}

  return (
    <div>
      <h2>Comments:</h2>
      <div>
        {
            reviewsHotel?.results.slice(0, visibleComments).map((review) => (
                <ul key={review.id}>
                    <li>{review.user.firstName}</li>
                    <li><Stars hotel={review.rating}/>
                    {review.rating}</li>
                </ul>
            ))
        }
        {
        visibleComments < reviewsHotel?.results.length &&
        <button onClick={handleMore}>Show more...</button>
        }
      </div>
    </div>
  )
}

export default Reviews