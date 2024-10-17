import { Map, Marker } from "pigeon-maps"

const HotelMap = ({lat, lon}) => {
  return (
    <Map center={[parseInt(lat), parseInt(lon)]} width={"40%"} height={"auto"} defaultZoom={12}>
      <Marker width={50} anchor={[parseInt(lat), parseInt(lon)]} color="red"/>
    </Map>
  )
}

export default HotelMap