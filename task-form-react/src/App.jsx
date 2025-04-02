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
    <>
      <Form createUser={createUser} />
      <Table users={users} />
    </>
  )
}

export default App

