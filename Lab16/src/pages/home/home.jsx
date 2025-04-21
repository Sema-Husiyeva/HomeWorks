import React from 'react'
import "./home.css"
import FruitItem from '../../components/fruitItem/fruitItem'

const Home = () => {
  return (
    <div className='container'>
      <h1>Meyvə Seçmə Tətbiqi</h1>
      <FruitItem/>
    </div>
  )
}

export default Home
