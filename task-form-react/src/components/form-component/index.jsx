import { useState } from 'react'
import './form.css'

const Form = ({createUser}) => {
    const [user, setUser] = useState({username:"", surname:"", email:"", number:""});

    const handleSubmit = (e) =>{
        e.preventDefault();
        createUser(user);
        setUser({ username: "", surname: "", email: "", number: "" });
    }

    const handleChange = (e) =>{
        setUser({...user, [e.target.name]: e.target.value});
    }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input onChange={handleChange} type="text" name='username' placeholder='Enter your name' />
        </div>
        <div>
          <label htmlFor="surname">Surname</label>
          <input onChange={handleChange} type="text" name='surname' placeholder='Enter your surname' />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input onChange={handleChange} type="email" name='email' placeholder='Enter your email' />
        </div>
        <div>
          <label htmlFor="number">Number</label>
          <input onChange={handleChange} type="number" name='number' placeholder='Enter your number' />
        </div>

        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default Form
