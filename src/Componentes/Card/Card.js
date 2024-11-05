import React from 'react'
import './card.css'

const Card = ({name, position, image, background}) => {
  return (
    <div className='card'>
        <div className='header' style={{background: background}}>
            <img src={image} alt={name}></img>
        </div>
        <div className='footer'>
            <h4>{name}</h4>
            <h5>{position}</h5>
        </div>
    </div>
  )
}

export default Card
