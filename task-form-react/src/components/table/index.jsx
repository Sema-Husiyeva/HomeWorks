import React from 'react'
import './table.css'

const Table = ({users}) => {
  return (
    <>
      <table>
        <thead>
            <tr>
                <th>Username</th>
                <th>Surname</th>
                <th>Email</th>
                <th>Number</th>
            </tr>
        </thead>
        <tbody>
            {users.map((user)=>(
                <tr key={user.number}>
                    <td>{user.username}</td>
                    <td>{user.surname}</td>
                    <td>{user.email}</td>
                    <td>{user.number}</td>
                </tr>
            ))}
        </tbody>
      </table>
    </>
  )
}

export default Table
