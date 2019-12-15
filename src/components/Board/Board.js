import React from 'react';
import './Board.css';
import Tile from '../Tile/Tile';

const Board = (props) => {

    return(
        <div className="board">
            {props.board.map((tile, index, className) => {
                if (tile === '.') {
                    tile=""
                }else if (tile !== props.initialBoard[index]) {
                    className="enabled"
                } else {
                    className="disabled"
                }

                return(
                    <Tile
                        key={index}
                        value={tile}
                        id={index}
                        onChange={props.onChange}
                        className={className}
                        initialBoard={props.initialBoard}
                    />
                )
            })}
        </div>
    )
}


export default Board;