import React, {useState} from 'react'


const Counter = () => {
    const [count, setCount] = useState(0);
    
        function countIncrease(){
           return setCount((prev)=>prev+1);
        }
    
        function countDecrease(){
            return setCount((prev)=>prev-1);
         }
  return (
      <div className='counter'>
        <button onClick={countDecrease}>-</button>
        <p>{count}</p>
        <button onClick={countIncrease}>+</button>
      </div>
  )
}

export default Counter
