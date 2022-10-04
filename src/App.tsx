import { useState, useEffect } from 'react'
import './App.css'
import ScoreBoard from './components/ScoreBoard'
import CardContainer from './components/CardContainer'
import { Card } from './shared/model/CardContainer.model'
import data from "./data.json"
import ReactModal from "react-modal";
function App() {

  const [selectedPile, setSelectedPile] = useState<Card[]>([])
  const [randomized, setRamdomized] = useState<Card[]>([])
  const [isOverGame, setIsOverGame] = useState<boolean>(false)

  const checkForDuplicate = (newSelectedCard :any) => {
    if (
      selectedPile.findIndex(
        alreadySelectedCard => newSelectedCard === alreadySelectedCard 
      ) === -1
    ) {
      setSelectedPile([...selectedPile, newSelectedCard])
    } else
    {
      setIsOverGame(true)
    }
  }

  const randomizedCardFromAsset = () => {
    const mainAssetPile: Card[] = data.asset
    let tempPile: Card[] = []
    while ( tempPile.length < 6 ) {
      let randomIdx =  Math.floor(Math.random() * mainAssetPile.length)
      if (tempPile.findIndex(tempCard => tempCard.name === mainAssetPile[randomIdx].name) == -1)
      {
        tempPile.push(mainAssetPile[randomIdx] )
      } else {
        randomIdx =  Math.floor(Math.random() * mainAssetPile.length)
      }
    }
    setRamdomized(tempPile);
  } 

  const newGame = () => {
    setIsOverGame(false)
    setSelectedPile([])
  }

  useEffect(() => {
		randomizedCardFromAsset();
	}, [selectedPile]);
  return (
    <div className="App">
      <ScoreBoard score={selectedPile.length} />
      <CardContainer pile={randomized} onClick={checkForDuplicate}  />
      <ReactModal  isOpen={isOverGame} ariaHideApp={false} className="modal">
				<h3>Game over</h3>
				<p>You got {selectedPile.length} score</p>
				<button onClick={() => newGame()} className="new-game-btn">
					Play again
				</button>
			</ReactModal>
    </div>
  )
}

export default App
