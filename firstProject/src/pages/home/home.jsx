import React, { useState } from 'react';
import "./home.scss";

const Home = () => {
    const cardsData = [
        {
            name:"Sema",
            id:1
        },
        {
            name:"Nezrin",
            id:2
        },
        {
            name:"Nigar",
            id:3
        },
    ]


  return (
    <>
    <div className='home'>
      <h2 className='home-title'>Students</h2>
      {cardsData.map((item)=>(
         <div className='home-item' key={item.id}>{item.name}</div>
      )
      )
      }
    </div>
     
    
    </>
  )
}

export default Home
