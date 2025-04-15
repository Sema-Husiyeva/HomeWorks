import {useState} from 'react';
import "./home.css";
import Moon from '../../assets/moon.svg';
import TodoItem from '../../components/todoItem';
import Background from '../../assets/background.jpeg';
import NonSelect from '../../assets/non-select-icon.svg';


const Home = () => {
    const [item, setItem] = useState('');
    const [items, setItems] = useState([]);
    const [isError, setIsError] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [selectedItems, setSelectedItems] = useState([]);

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            if (!item) {
                setIsError(true);
            } else if (editingId !== null) {
                const updatedItems = items.map((todo) => {
                if (todo.id === editingId) {
                    return { ...todo, value: item };
                } else {
                    return todo;
                }
            });
                setItems(updatedItems);
                setEditingId(null);
                setItem('');
                setIsError(false);
            } else {
                const newTodo = {
                  id: Date.now(),
                  value: item,
                };
                setItems((prev) => [...prev, newTodo]);
                setItem('');
                setIsError(false);
            }
            }
    }

    const getClassName = () => {
        if (isError) {
            return "todo-input-error";
          } else {
            return "error none";
        }
      };
  return (
    <div className='container'>
      <img src={Background} alt="background" />
      <div className='todo'>
        <div className='todo-title'>
            <h1>TODO</h1>
            <img src={Moon} alt="moon" />
        </div>

        <div className='todo-input'>
            <img src={NonSelect} alt="non-select-icon" />
            <input onKeyDown={handleKeyDown} value={item} onChange={(e) => setItem(e.target.value)} type="text" placeholder='Create a new todo…' />
            <p className={getClassName()}>Can't be empty!</p>
        </div>

        <TodoItem items = {items} setItems = {setItems} setItem={setItem} setEditingId={setEditingId} selectedItems={selectedItems} setSelectedItems={setSelectedItems}/>
      </div>
    </div>
  )
}

export default Home
