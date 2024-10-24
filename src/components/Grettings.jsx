import "./Grettings.css"

const Grettings = ({userLogged}) => {

const name = userLogged.firstName
const lastName = userLogged.lastName
const gender = userLogged.gender

  return (
    <div className="title-init">
       {
        gender === "male" ? (<img src="/hombre.png" />) : gender === "female" ? (<img src="/female.png" />) : (<img src="/other.png" />)
       }
       <p>Welcome <span>{name} {lastName}!</span></p>
       <button>Log Out</button>
    </div>
  )
}

export default Grettings