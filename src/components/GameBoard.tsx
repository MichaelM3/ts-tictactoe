import { FC, MouseEvent, useState } from 'react'

interface IProps {
    turn: string;
    setTurn: (turn: string) => void;
    setWinner: (winner: string) => void;
}

const GameBoard: FC<IProps> = ({ turn, setTurn, setWinner }) => {
    const [tiles, setTiles] = useState<string[]>(["", "", "", "", "", "", "", "", ""])

    const placeShape = (e: MouseEvent) => {
        const target = e.target as HTMLDivElement
        if (target.innerText === "") {
            const pos: number = +target.id as number
            setTiles([...tiles.slice(0, pos), turn, ...tiles.slice(pos + 1, 9)])
            target.innerText = turn
            if (checkWinner(turn)) setWinner(turn)
            turn === "X" ? setTurn("O") : setTurn("X")
        }
    }

    const checkWinner = (shape: string): boolean => {
        if (
            (tiles[0] === turn && tiles[0] === tiles[1] && tiles[1] === tiles[2]) || // Checks first row
            (tiles[3] === turn && tiles[3] === tiles[4] && tiles[4] === tiles[5]) || // Checks second row
            (tiles[6] === turn && tiles[6] === tiles[7] && tiles[7] === tiles[8]) || // Checks third row
            (tiles[0] === turn && tiles[0] === tiles[3] && tiles[3] === tiles[6]) || // Checks first column
            (tiles[1] === turn && tiles[1] === tiles[4] && tiles[4] === tiles[7]) || // Checks second column
            (tiles[2] === turn && tiles[2] === tiles[5] && tiles[5] === tiles[8]) || // Checks third column
            (tiles[0] === turn && tiles[0] === tiles[4] && tiles[4] === tiles[8]) || // Checks first diagnal
            (tiles[2] === turn && tiles[2] === tiles[4] && tiles[4] === tiles[6]) // Checks second diagnal
        ) return true   
        return false
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
