import { Map, Marker } from "pigeon-maps"

const HotelMap = ({lat, lon}) => {
  return (
    <Map center={[parseInt(lat), parseInt(lon)]} width={300} height={300}>
      <Marker width={50} anchor={[parseInt(lat), parseInt(lon)]} color="#ea4959"/>
    </Map>
  )
}

export default HotelMap