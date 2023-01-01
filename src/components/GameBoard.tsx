import { FC, MouseEvent, useState } from 'react'

interface IProps {
    turn: string;
    setTurn: (turn: string) => void;
}

const GameBoard: FC<IProps> = ({ turn, setTurn }) => {
    const [tiles, setTiles] = useState<string[]>(["", "", "", "", "", "", "", "", ""])

    const placeShape = (e: MouseEvent) => {
        const target = e.target as HTMLDivElement
        if (checkValidMove(target.innerText)) {
            const pos: number = +target.id as number
            setTiles([...tiles.slice(0, pos), turn, ...tiles.slice(pos+1, 9)])
            target.innerText = turn
            turn === "X" ? setTurn("O") : setTurn("X")
        }
    }

    const checkValidMove = (pos: string): boolean => {
        return pos === "" ? true : false
    }

    return (
        <div className="board">
            <div className='row'>
                <div id="0" className='tile' onClick={placeShape}></div>
                <div id="3" className='tile' onClick={placeShape}></div>
                <div id="6" className='tile' onClick={placeShape}></div>
            </div>
            <div className='row'>
                <div id="1" className='tile' onClick={placeShape}></div>
                <div id="4" className='tile' onClick={placeShape}></div>
                <div id="7" className='tile' onClick={placeShape}></div>
            </div>
            <div className='row'>
                <div id="2" className='tile' onClick={placeShape}></div>
                <div id="5" className='tile' onClick={placeShape}></div>
                <div id="8" className='tile' onClick={placeShape}></div>
            </div>
        </div>
    )
}

export default GameBoard
