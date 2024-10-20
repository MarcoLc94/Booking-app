import { useForm } from "react-hook-form"
import "../pages/Register.css"
import useAuth from "../hooks/useAuth"

const Register = () => {
    const {handleSubmit, register, reset, formState: {errors}} = useForm({mode: "onChange"})
    
    const { createUser } = useAuth()

    const submit = (data) => {
      createUser(data)
      reset(
        {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            gender: "male",
        }
      )
    }

  return (
    <div>
        <article className="form-container">
            <form onSubmit={handleSubmit(submit)}>
                <h2>Register</h2>
                <label>
                    <span>firstname:</span>
                    <input type="text" {...register("firstName")}/>
                </label>
                <label>
                    <span>lastname:</span>
                    <input type="text" {...register("lastName")}/>
                </label>
                <label>
                    <span>email:</span>
                    <input type="email" {...register("email")}/>
                </label>
                <label>
                    <span>password:</span>
                    <input type="password" {...register("password")}/>
                </label>
                <label>
                    <span>gender:</span>
                    <select {...register("gender")}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </label>
                <button>submit</button>
            </form>
        </article>
    </div>
  )
}

export default Register