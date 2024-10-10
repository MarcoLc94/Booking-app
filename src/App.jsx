import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import { HotelDetail } from "./components/HotelDetail"

const App = () => {
  return (
    <div>
      <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/hotel/:id" element={<HotelDetail/>}/>
      </Routes>
    </div>
  )
}

export default App