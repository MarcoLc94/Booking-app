import { useForm } from "react-hook-form";
import axios from "axios";
import useCrud from "../hooks/useCrud";

const FormReviews = ({
  formIsOpen,
  bookSelected,
  setFormIsOpen,
  setBookSelected,
}) => {
  const { handlesubmit, reset, register } = useForm();

  const initialDate = new Date(bookSelected.checkIn).getTime()
    const finalDate = new Date(bookSelected.checkOut).getTime()
    const reservationDays = (finalDate - initialDate) / (1000 * 60 * 60 * 24)
    console.log(initialDate, finalDate)

    const [, ,createReview, ] = useCrud()

    const submit = (data) => { 
        const url = "https://hotels-api.academlo.tec/reviews"
        const reviewData = {...data, hotelId: bookSelected?.hotelId}

        createReview(url, reviewData, true)
        reset({
            rating: "5",
            comment: ""
        })
        setBookSelected("")
        setFormIsOpen(false

        )
    }

  return (
    <div>
      <section>
        <box-icon name="x"></box-icon>
        <h2>Rate your reserve</h2>
        <article>
          <header>
            <img
              src={bookSelected?.hotel.images[0].url}
              alt={bookSelected?.hotel.name}
            />
          </header>
          <h3>{bookSelected?.hotel.name}</h3>
          <ul>
            <li>
              {bookSelected?.hotel.city.name}
              {bookSelected?.hotel.city.country}
            </li>
            <li>
              <span>Reservation Day</span>
              <span>{reservationDays}</span>
            </li>
            <li>
              <span>Subtotal Price</span>
              <span>USD $ {reservationDays * +bookSelected?.hotel.price}</span>
            </li>
          </ul>
        </article>
        <form onSubmit={handlesubmit(submit)}>
            <label htmlFor="">
                <span>Rating</span>
                <select {...register("rating")}>
                    <option value="5">⭐⭐⭐⭐⭐</option>
                    <option value="4">⭐⭐⭐⭐</option>
                    <option value="3">⭐⭐⭐</option>
                    <option value="2">⭐⭐</option>
                    <option value="1">⭐</option>
                </select>
            </label>
            <label htmlFor="">
                <span>Comments</span>
                <textarea name="" id="" {...register("comment")}>
                </textarea>
            </label>
            <button>Submit</button>
        </form>
      </section>
    </div>
  );
};

export default FormReviews;
