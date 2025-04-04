import React from 'react'
import './table.css'

const Table = ({users}) => {
  return (
    <div className='table'>
      <h2 className='table-title'>İşçilər cədvəli</h2>
      <table>
        <thead>
            <tr>
                <th>Tam ad</th>
                <th>Vəzifəsi</th>
                <th>Şöbəsi</th>
                <th>Email</th>
                <th>Əmək haqqı</th>
                <th>İşə qəbul tarixi</th>
            </tr>
        </thead>
        <tbody>
            {users.map((user,index)=>(
                <tr key={index}>
                    <td>{user.username}</td>
                    <td>{user.position}</td>
                    <td>{user.department}</td>
                    <td>{user.email}</td>
                    <td>{user.salary} AZN</td>
                    <td>{user.date}</td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
