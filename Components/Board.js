import React, { useState } from 'react'
import Square from './Square'

const Board = () => {
    const [boardSquares, setBoardSquars] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    let over = false;


    const clickHandlr = (index) => {
        if (!over) {
            const squares = [...boardSquares];

            if (winner(boardSquares) || squares[index]) {
                over = true
                return;
            } else {
                squares[index] = xIsNext ? "❌" : "⭕";
            }


            setBoardSquars(squares);
            setXIsNext(!xIsNext);
        } else {
            alert('Game Over !, You can\'t Play anymore.')
        }
    }



    const renderSquare = (index) => {
        return <Square value={boardSquares[index]} onClick={() => clickHandlr(index)} />
    }

    let status;

    const won = winner(boardSquares);
    status = won ? `Game Over, ${won} won the match` : `Next Turn : ${xIsNext ? "❌" : "⭕"}`


    return (
        <div className='board' >
            <div className='ststus' >{status}</div>
            <div className='row' >{renderSquare(0)}{renderSquare(1)}{renderSquare(2)}</div>
            <div className='row' >{renderSquare(3)}{renderSquare(4)}{renderSquare(5)}</div>
            <div className='row' >{renderSquare(6)}{renderSquare(7)}{renderSquare(8)}</div>
        </div>
    )
}

const winner = (boxes) => {
    const favorLines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let ind = 0; ind < favorLines.length; ind++) {
        const [a, b, c] = favorLines[ind]
        if (boxes[a] && boxes[a] === boxes[b] && boxes[b] === boxes[c]) {
            return boxes[a]
        }
    }
    return null;
}


export default Board