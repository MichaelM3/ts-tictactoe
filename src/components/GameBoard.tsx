import { FC } from 'react'
import GameTile from './GameTile'

const GameBoard: FC = () => {
    return (
        <div className="board">
            <div className='row'>
                <GameTile />
                <GameTile />
                <GameTile />
            </div>
            <div className='row'>
                <GameTile />
                <GameTile />
                <GameTile />
            </div>
            <div className='row'>
                <GameTile />
                <GameTile />
                <GameTile />
            </div>
        </div>
    )
}

export default GameBoard
