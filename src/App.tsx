import { FC, useState } from 'react'
import './App.css'
import GameBoard from './components/GameBoard'

const App: FC = () => {
    const [turn, setTurn] = useState("X")

    return (
        <div className='App'>
           <GameBoard turn={turn} setTurn={setTurn} /> 
        </div>
    )
}

export default App
