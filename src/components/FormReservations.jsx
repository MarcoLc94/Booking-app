import { useForm } from "react-hook-form";
import "./FormReservations.css"
import useCrud from "../hooks/useCrud";
import { useNavigate } from "react-router-dom";

const FormReservations = ({ hotelId }) => {
  const {handleSubmit, register, reset} = useForm()
  const [, createBook, ] = useCrud()
  const navigate = useNavigate()
  console.log(hotelId)

  const submit = (data) => {
    const url = "https://hotels-api.academlo.tech/bookings"
    const objData = {...data, hotelId}
    createBook(url, objData, true)
    reset({
      checkIn: "",
      checkOut: ""
    })
    navigate("/reservations")
  }

  return (
    <div className="form-date">
      <form onSubmit={handleSubmit(submit)} className="form-inside">
        <h3>Make your reservation here:</h3>
        <label>
          <span>Check-in</span>
          <input type="date" {...register("checkIn")}/>
        </label>
        <label>
          <span>Check-out</span>
          <input type="date" {...register("checkOut")}/>
        </label>
        <button>Reserve</button>
      </form>
    </div>
  );
};

export default FormReservations;
