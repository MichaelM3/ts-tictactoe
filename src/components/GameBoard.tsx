import { FC, MouseEvent } from 'react'

const GameBoard: FC = () => {

    const placeShape = (e: MouseEvent<HTMLDivElement>) => {
       (e.target as HTMLDivElement).innerText = "X"
    }

    return (
        <div className="board">
            <div className='row'>
                <div className='tile' onClick={placeShape}></div>
                <div className='tile' onClick={placeShape}></div>
                <div className='tile' onClick={placeShape}></div>
            </div>
            <div className='row'>
                <div className='tile' onClick={placeShape}></div>
                <div className='tile' onClick={placeShape}></div>
                <div className='tile' onClick={placeShape}></div>
            </div>
            <div className='row'>
                <div className='tile' onClick={placeShape}></div>
                <div className='tile' onClick={placeShape}></div>
                <div className='tile' onClick={placeShape}></div>
            </div>
        </div>
    )
}

export default GameBoard
