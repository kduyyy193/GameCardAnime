import React from 'react'
import { Card } from '../shared/model/CardContainer.model';
import CardCP from "./Card";

const CardContainer = (props: {pile: Card[], onClick:  Function}) => {
    const drawPile  = props.pile.map((card) => (
        console.log(card.avatar),
        <CardCP 
            name={card.name}
            avatar={card.avatar}
            key={card.name}
            onClick={props.onClick}
        />
        ))
        console.log(drawPile)
  return (
     <div className="card-container">{drawPile}</div>
  )
}

export default CardContainer