import { useState } from 'react'
import './App.css'
import Form from './components/form-component'
import Table from './components/table';

function App() {
  const [users, setUsers] = useState([]);

  const createUser = (user) => {
    setUsers([...users, user]);
  };
  return (
    <div className='container'>
      <Form createUser={createUser} />
      <Table users={users} />
    </div>
  )
}

export default App

