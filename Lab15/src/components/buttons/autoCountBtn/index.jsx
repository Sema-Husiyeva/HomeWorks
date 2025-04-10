import React from 'react'
import "./auto.css";

const AutoCountBtn = ({ autoCount, setAutoCount }) => {
    const handleAutoBtn = () => setAutoCount((prev) => !prev);
  
    let buttonText = "";
    let buttonClass = "auto-btn";
  
    if (autoCount) {
      buttonText = "Stop Auto-Count";
      buttonClass += " on";
    } else {
      buttonText = "Start Auto-Count";
      buttonClass += " off";
    }
  
    return (
      <div>
        <button className={buttonClass} onClick={handleAutoBtn}>
          {buttonText}
        </button>
      </div>
    );
  };

export default AutoCountBtn
