import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import { HotelDetail } from "./components/HotelDetail"
import Login from "./pages/Login"
import Register from "./pages/Register"
import NavBar from "./shared/NavBar"

const App = () => {
  return (
    <div>
      <NavBar/>
      <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/hotel/:id" element={<HotelDetail/>}/>
       <Route path="/register" element={<Register/>}/>
       <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  )
}

export default App