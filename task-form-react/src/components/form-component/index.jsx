import { useState } from 'react'
import './form.css'

const Form = ({createUser}) => {
    const [user, setUser] = useState({username:"", position:"", department:"", email:"", salary:"", date:""});
    const [errorMessages, setErrorMessages] = useState({username:"", position:"", department:"", email:"", salary:"", date:""});

    const handleError = () =>{
      const errors = {};
      if (!user.username) {
        errors.username = "Boş olmamalıdır!";
      }
      if (!user.position) {
        errors.position = "Boş olmamalıdır!";
      }
      if (!user.department) {
        errors.department = "Boş olmamalıdır!";
      }
      if (!user.email) {
        errors.email = "Boş olmamalıdır!";
      } else if (!user.email.includes('@')){
        errors.email = "@ işarəsi istifadə olunmalıdır!"
      }
      if (!user.salary) {
        errors.salary = "Boş olmamalıdır!";
      } else if (isNaN(user.salary)) {
        errors.salary = "Əmək haqqı yalnız rəqəmlərdən ibarət olmalıdır!"
      }
      if (!user.date) {
        errors.date = "Boş olmamalıdır!";
      }

      setErrorMessages(errors);
      return Object.keys(errors).length === 0;
    }

    const handleSubmit = (e) =>{
      e.preventDefault();
      if (handleError()) {
        createUser(user);
        alert('Form uğurla yaradıldı!')
        setUser({ 
          username:"", 
          position:"", 
          department:"", 
          email:"", 
          salary:"", 
          date:"" 
      });
        setErrorMessages({
          username:"", 
          position:"", 
          department:"", 
          email:"", 
          salary:"", 
          date:""
       });
      }
    }

    const handleChange = (e) =>{
      setUser({...user, [e.target.name]: e.target.value});
      setErrorMessages({...errorMessages, [e.target.name]: ''});
    }

  return (
    <div className='form'>
      <h2 className='form-title'>İşçi qeydiyyat forması</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <div className='form-group-info'>
          <label className='form-group-info-name' htmlFor="username">Tam adı</label>
          <input className='form-group-info-input' onChange={handleChange} type="text" name='username' value={user.username}/>
          </div>
          {errorMessages.username && <p className="form-group-error"> {errorMessages.username} </p>}
        </div>
        <div className='form-group'>
          <div className='form-group-info'>
          <label className='form-group-info-name' htmlFor="position">Vəzifəsi</label>
          <input className='form-group-info-input' onChange={handleChange} type="text" name='position' value={user.position}/>
          </div>
          {errorMessages.position && <p className="form-group-error"> {errorMessages.position} </p>}
        </div>
        <div className='form-group'>
          <div className='form-group-info'>
          <label className='form-group-info-name' htmlFor="department">Şöbəsi</label>
          <input className='form-group-info-input' onChange={handleChange} type="text" name='department' value={user.department}/>
          </div>
          {errorMessages.department && <p className="form-group-error"> {errorMessages.department} </p>}
        </div>
        <div className='form-group'>
          <div className='form-group-info'>
          <label className='form-group-info-name' htmlFor="email">Email</label>
          <input className='form-group-info-input' onChange={handleChange} type="text" name='email' value={user.email}/>
          </div>
          {errorMessages.email && <p className="form-group-error"> {errorMessages.email} </p>}
        </div>
        <div className='form-group'>
          <div className='form-group-info'>
          <label className='form-group-info-name' htmlFor="salary">Əmək haqqı</label>
          <input className='form-group-info-input' onChange={handleChange} type="text" name='salary' value={user.salary}/>
          </div>
          {errorMessages.salary && <p className="form-group-error"> {errorMessages.salary} </p>}
        </div>
        <div className='form-group'>
          <div className='form-group-info'>
          <label className='form-group-info-name' htmlFor="date">İşə qəbul tarixi</label>
          <input className='form-group-info-input' onChange={handleChange} type="date" name='date' value={user.date}/>
          </div>
          {errorMessages.date && <p className="form-group-error"> {errorMessages.date} </p>}
        </div>

        <button className='form-btn' type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Form
