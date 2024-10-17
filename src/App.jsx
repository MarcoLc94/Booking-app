import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import { HotelDetail } from "./components/HotelDetail"
import Login from "./pages/Login"
import Register from "./pages/Register"

const App = () => {
  return (
    <div>
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