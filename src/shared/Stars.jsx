

const Stars = ({ hotel }) => {
  console.log(hotel)
const fullStar = Math.floor(hotel.rating)
const halfStar = !!(hotel.rating % 1)
const emptyStar = 5 - fullStar - (halfStar ? 1 : 0)

    
  return (
    <div>
      {/* Renderizar estrellas llenas */}
      {Array(fullStar)
        .fill()
        .map((_, index) => (
          <box-icon key={`full-${index}`} type="solid" name="star"></box-icon>
        ))}

      {/* Renderizar media estrella si es necesario */}
      {halfStar && (
        <box-icon key="half-star" type="solid" name="star-half"></box-icon>
      )}

      {/* Renderizar estrellas vacías */}
      {Array(emptyStar)
        .fill()
        .map((_, index) => (
          <box-icon key={`empty-${index}`} name="star"></box-icon>
        ))}
    </div>
  )
}

export default Stars