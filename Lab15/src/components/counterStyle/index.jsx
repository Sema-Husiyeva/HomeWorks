import React from 'react'
import "./style.css";

const CounterStyle = ({count}) => {
    const getClassName = () => {
        if (count > 0) return "counter green";
        if (count < 0) return "counter red";
        return "counter black";
      };
  return (
    <div>
      <h1 className={getClassName()}>{count}</h1>
    </div>
  )
}

export default CounterStyle
