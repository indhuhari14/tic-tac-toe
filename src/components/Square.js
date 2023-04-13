//import { useState } from 'react';

function Square ({value, onSquareClick}) {
    let valueColor = 'square';
    if(value === "X") {
        valueColor += ' square-x';
    } else if(value === "O") {
        valueColor += ' square-o';
    }
    return(
        <button className={valueColor} onClick={onSquareClick} >{value}</button>
    );
}

export default Square;