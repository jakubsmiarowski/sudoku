import React from 'react';
import './Tile.css';

const Tile = props => {



    return (
        <div className="field">
            <input
                type="number"
                min="1"
                max="9"
                onChange ={}
            />
        </div>
    )
}



export default Tile;