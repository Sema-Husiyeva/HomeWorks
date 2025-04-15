import React from 'react';
import "./todo.css"
import NonSelect from '../../assets/non-select-icon.svg';
import Selected from '../../assets/selected-icon.svg';

const TodoItem = ({items, setItems, setItem, setEditingId, selectedItems, setSelectedItems}) => {
    const handleDelete = (id) =>{
        const removedItems = items.filter((item) => item.id!==id);
        setItems(removedItems);
    }

    const handleEdit = (id, value) => {
        setItem(value);
        setEditingId(id);
    };

    const handleSelect = (id) => {
        if (selectedItems.includes(id)) {
          setSelectedItems((prev) => prev.filter((itemId) => itemId !== id));
        } else {
          setSelectedItems((prev) => [...prev, id]);
        }
    };

    const handleClearSelected = () => {
        const filteredItems = items.filter((item) => !selectedItems.includes(item.id));
        setItems(filteredItems);
        setSelectedItems([]);
    };
  return (
    <div className='todo-list'>
      {items.map((item)=> (
        <div key={item.id} className='todo-list-item'>
            <div className='todo-list-item-left'>
              <img src={selectedItems.includes(item.id) ? Selected : NonSelect} onClick={() => handleSelect(item.id)} alt="selected-icon" />
              <p>{item.value}</p>
            </div>
            <div className='todo-list-item-right'>
              <button onClick={()=> handleDelete(item.id)}>Delete</button>
              <button onClick={() => handleEdit(item.id, item.value)}>Edit</button>
            </div>
        </div>
      ))}
      {selectedItems.length > 0 && (<button onClick={handleClearSelected} className="todo-list-clear">Clear All</button>)}
    </div>
  )
}

export default TodoItem
