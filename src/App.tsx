import { FC, useEffect, useState } from 'react'
import './App.css'
import GameBoard from './components/GameBoard'

const App: FC = () => {
    const [turn, setTurn] = useState<string>("X")
    const [winner, setWinner] = useState<string>("")

    useEffect(() => {
        console.log(`The winner is ${winner}`)
    }, [winner])

    return (
        <div className='App'>
           <GameBoard turn={turn} setTurn={setTurn} setWinner={setWinner} /> 
        </div>
    )
}

export default App
