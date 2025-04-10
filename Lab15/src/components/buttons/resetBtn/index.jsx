import React from 'react'
import "./reset.css"

const ResetBtn = ({setCount}) => {
    const handleReset = () => setCount(0);  
  return (
    <div>
        <button className='resetBtn' onClick={handleReset}>Reset</button>
    </div>
  )
}

export default ResetBtn