import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import "./Login.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Grettings from "../components/Grettings";

const Login = () => {
  const { handleSubmit, reset, register } = useForm();
  const { loginUser } = useAuth();
  const [userLogged, setUserLogged] = useState("")
  const navigate = useNavigate()


  const submit = (data) => {
    loginUser(data);
    reset({
      email: "",
      password: "",
    });
   navigate("/")
  };

  useEffect(() => {
    const userLocalStorage = localStorage.getItem("userLogged")
    if(userLocalStorage){
      const parsedUser = JSON.parse(userLocalStorage)
      setUserLogged(parsedUser)
    }
    console.log(userLogged)
  }, [])

  return (
    <section>
    {
      userLogged ? <div className="name-vs"><Grettings userLogged={userLogged}/></div> :
    <div className="form-container">
      <form onSubmit={handleSubmit(submit)} className="form-data">
      <box-icon type='solid' name='user-circle' className="icon-user"></box-icon>
        <h2>Login User</h2>
        <div className="inputsdata">
          <label>
            <span>Email:</span>
            <input type="email" {...register("email")} />
          </label>
          <label>
            <span>Password:</span>
            <input type="password" {...register("password")} />
          </label>
        </div>
          <button>Submit</button>
      </form>
    </div>
     }
    </section>
  );
};

export default Login;
