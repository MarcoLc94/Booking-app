import React from 'react'

const Stars = ({ rating}) => {
const fullStar = Math.floor(rating)
const halfStar = !!(rating % 1)
const emptyStar = 5 - fullStar - (halfStar ? 1 : 0)
    
  return (
    <div>
      {Array(fullStar).fill(<box-icon type="solid" name="star"></box-icon>)}
      
      {/* Renderizar media estrella si es necesario */}
      {halfStar && <box-icon type="solid" name="star-half"></box-icon>}

      {/* Renderizar estrellas vacías */}
      {Array(emptyStar).fill(<box-icon name="star"></box-icon>)}
    </div>
  )
}

export default Stars