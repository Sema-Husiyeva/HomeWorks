import './App.css'
import { useState } from 'react'
import Table from './components/table';
import Form from './components/form-component'


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

