import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import "./Login.css";

const Login = () => {
  const { handleSubmit, reset, register } = useForm();
  const { loginUser } = useAuth();

  const submit = (data) => {
    loginUser(data);
    reset({
      email: "",
      password: "",
    });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(submit)} className="form-data">
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
  );
};

export default Login;
