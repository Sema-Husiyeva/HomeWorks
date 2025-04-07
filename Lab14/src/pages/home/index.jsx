import './home.css'
import React, { useState } from 'react'
import TodoItem from '../../components/todoItem';

const HomePage = () => {
    const [item, setItem] = useState('');
    const [items, setItems] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        setItem(e.target.value);
    }

    const handleAdd = () =>{
      if (handleError()) return;

      const newTodo = {
        id: Date.now(),
        value: item,
      };
      setItems((prev) => [...prev, newTodo]);
      setItem('');
      setErrorMessage('');
    }

    const handleError = () =>{
      if (!item) {
        setErrorMessage("Can't be empty!");
        return true;
      }
      return false;
    }
  return (
    <div className='todo'>
      <div>
        <input className='todo-input' onChange={handleChange} value={item} type="text" />
        <button className='todo-btn' onClick={handleAdd}>Add</button>
        {errorMessage && <p className="todo-error"> {errorMessage} </p>}
      </div>

      <TodoItem items = {items} setItems = {setItems}/>
    </div>
  )
}

export default HomePage