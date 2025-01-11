import React, {useState} from 'react'

function Counter() {

    const [count, setCount] = useState(0);

    const add = () => {
        setCount(prevCount => prevCount+1)
    }

    const subtract = () => {
        setCount(prevCount => prevCount-1)
    }

    const reset = () => {
        setCount(0)
    }

    return ( 
    <>
    <h4>Number of stitches</h4>
    <p id='count-display'>{count}</p>
    <button class='counter-button' id='add-button' onClick={add}>+</button>
    <button class='counter-button' id='subtract-button' onClick={subtract}>-</button>
    <button class='counter-button' id='reset-button' onClick={reset}>Reset</button>    
    </> );
}

export default Counter;