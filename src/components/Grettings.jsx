import { useNavigate } from "react-router-dom"
import "./Grettings.css"

const Grettings = ({logOut, setLogOut}) => {

const name = logOut.firstName
const lastName = logOut.lastName
const gender = logOut.gender
const navigate = useNavigate()

const handleLogOut = () => {
  setLogOut(null)
  localStorage.removeItem("token")
  localStorage.removeItem("userLogged")
  navigate("/login")
 }

  return (
    <div className="title-init">
       {
        gender === "male" ? (<img src="/hombre.png" />) : gender === "female" ? (<img src="/female.png" />) : (<img src="/other.png" />)
       }
       <p>Welcome <span>{name} {lastName}!</span></p>
       <button onClick={handleLogOut}>Log Out</button>
    </div>
  )
}

export default Grettings