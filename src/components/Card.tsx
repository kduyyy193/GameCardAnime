import React from 'react'
import { Card } from '../shared/model/CardContainer.model'

export const CardCP = ({avatar, name, onClick}: Card) => {
  return (
    <div className="card" onClick={() => onClick!(name)}>
        <img src={avatar} alt="Avatar" />
        <p>{name}</p>
    </div>
  )
}

export default CardCP