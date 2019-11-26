import React from 'react';
import './Tile.css';

const Tile = props => {

    return (
        <>
            <input
                id={props.id}
                onChange={props.onChange}
                value={props.value}
                type="number"
                min="1"
                max="9"
                className={props.className}
            />
        </>
    )
}



export default Tile;