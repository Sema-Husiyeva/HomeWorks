import React from 'react'
import './todo.css'

const TodoItem = ({items, setItems}) => {
    const handleDelete = (id) =>{
        const removedItems = items.filter((item) => item.id!==id);
        setItems(removedItems);
    }
  return (
    <>
      {items.map((item)=> (
        <div key={item.id} className='todo-list'>
            <p className='todo-list-item'>{item.value}</p>
            <button className='todo-list-btn' onClick={()=> handleDelete(item.id)}>Sil</button>
        </div>
      ))}
    </>
  )
}

export default TodoItem
