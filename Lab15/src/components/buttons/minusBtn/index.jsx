import React from 'react'
import "./minus.css"

const MinusBtn = ({setCount}) => {
    const handleDecrease = () => {
        setCount((prev)=>prev - 1);
    }
  return (
    <div>
        <button className='minusBtn' onClick={handleDecrease}>-1</button>
    </div>
  )
}

export default MinusBtn