import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import { HotelDetail } from "./components/HotelDetail"
import Login from "./pages/Login"
import Register from "./pages/Register"
import NavBar from "./shared/NavBar"
import { useState } from "react"

const App = () => {
const [logOut, setLogOut] = useState(null)

  return (
    <div>
      <NavBar logOut={logOut} setLogOut={setLogOut}/>
      <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/hotel/:id" element={<HotelDetail/>}/>
       <Route path="/register" element={<Register/>}/>
       <Route path="/login" element={<Login setLogOut={setLogOut} logOut={logOut}/>} />
      </Routes>
    </div>
  )
}

export default App