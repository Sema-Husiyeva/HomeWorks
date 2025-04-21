import React from 'react'
import "./fruitItem.css"
import { useSelector, useDispatch } from 'react-redux'
import { toggleFruits, selectAll, deleteAll } from '../../store/features/fruitSlice'


const FruitItem = () => {
    const fruits = useSelector((state) => state.fruits?.fruits)
    const selectedFruits = useSelector((state) => state.fruits?.selectedFruits)
    const dispatch = useDispatch()
  return (
    <div className='fruits'>
    <div className='fruits-list'>
      <h2>Meyvə kartları</h2>
      <div className='fruits-list-buttons'>
        <button onClick={() => dispatch(selectAll())}>Select All</button>
        <button onClick={() => dispatch(deleteAll())}>Delete All</button>
      </div>
      {fruits.map((fruit)=>(
        <div className={`fruits-list-item ${selectedFruits.includes(fruit.id) ? 'selected' : ''}`} key={fruit.id} onClick={()=>dispatch(toggleFruits(fruit.id))}>
            {fruit.name}
        </div>
      ))}
    </div>

    <div className='fruits-selected'>
        <h2>Seçilmiş Meyvələr</h2>
        <div className='fruits-selected-list'>
            {selectedFruits.length === 0 ? (
                <p>Heç bir meyvə seçilməyib!</p>
            ) : (
                <ul>
                    {selectedFruits.map(id => {
                        const fruit = fruits.find(f => f.id ==id);
                        return <li className='fruits-selected-list-item' key={id}>{fruit.name}</li>
                    })}
                </ul>
            )}
        </div>
    </div>
    </div>
  )
}

export default FruitItem
