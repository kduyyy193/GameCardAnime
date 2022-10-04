import React, { useState } from 'react'
import { score } from '../shared/model/CardContainer.model'

const ScoreBoard = ({score}: score) =>  {
    const [bestScore, setBestScore] = useState(0)
    if (score > bestScore) {
        setBestScore(score)
    }
  return (
    <div className="score-board">
        <p>Score: {score}</p>
        <p>Best Score: {bestScore}</p>
    </div>
  )
}

export default ScoreBoard