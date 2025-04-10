import React from 'react'
import "./plus.css"

const PlusBtn = ({setCount}) => {
    const handleIncrease = () => {
        setCount((prev)=>prev + 1);
    }
  return (
    <div>
        <button className='plusBtn' onClick={handleIncrease}>+1</button>
    </div>
  )
}

export default PlusBtn