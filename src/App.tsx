import { FC, useEffect, useState } from 'react'
import './App.css'
import GameBoard from './components/GameBoard'

const App: FC = () => {
    const [turn, setTurn] = useState<string>("X")
    const [winner, setWinner] = useState<string>("")
    const [showWinner, setShowWinner] = useState<boolean>(false)

    useEffect(() => {
        if (winner !== "") setShowWinner(true)
    }, [winner])

    return (
        <div className='App'>
           <GameBoard turn={turn} setTurn={setTurn} setWinner={setWinner} /> 
           { showWinner ?
               <h1 id="winner">The winner is {winner}!</h1> 
               :
               null
           }
        </div>
    )
}

export default App
