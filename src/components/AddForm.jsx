import { useState } from "react";
import "./AddForm.css";
import axios from 'axios'
const AddForm = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [type, setType] = useState('')
    const [birthday, setBirthday] = useState('')
    const [description, setDescription] = useState('')

    const firstNameSetter = (e) => {
        setFirstName(e.target.value)
    }
    const lastNameSetter = (e) => {
        setLastName(e.target.value)
    }
    const typeSetter = (e) => {
        setType(e.target.value)
    }
    const birthdaySetter = (e) => {
        setBirthday(e.target.value)
    }
    const descriptionSetter = (e) => {
        setDescription(e.target.value)
    }
    const submitHandler = (e) => {
        e.preventDefault()


        let userId = window.sessionStorage.getItem("user")
        
        let body = {
            userId: userId,
            name: firstName + ' ' + lastName,
            type: type,
            birthday: birthday,
            description: description
        }
        axios.post('http://localhost:8000/newPerson', body)
        .then(() => {
            alert('Person successfully added to your personal network database!')

        }).catch ((err) =>  {
            console.log(err)
        })
    }
  
  return (
    <div>
      <form>
        <div className="name">
          <input onChange={firstNameSetter} type="text" placeholder="First Name" required/>
          <input onChange={lastNameSetter} type="text" placeholder="Last Name" required/>
        </div>
        <div className="radio-options">
          <input onChange={typeSetter} type="radio" name='type' value="Family" />
          <label htmlFor="Family">Family</label> <br></br>
          <input onChange={typeSetter} type="radio" name='type' value="Work" />
          <label htmlFor="Work">Work</label> <br></br>
          <input onChange={typeSetter} type="radio" name='type' value="Friends" />
          <label htmlFor="Friends">Friends</label> <br></br>
          <input onChange={typeSetter} type="radio" name='type' value="Aquaintance" />
          <label htmlFor="Aquaintance">Aquantaince</label> <br></br>
          <input onChange={typeSetter} type="radio" name='type' value="Romantic" />
          <label htmlFor="Romantic">Romantic</label> <br></br>
        </div>
        <div className='birthday'>
            <label htmlFor="birthday">Birthday</label>
            <input onChange={birthdaySetter} name='birthday' type='date' min="1900-01-01" max="2023-12-31"/>
        </div>
        <div className='description'>
            <textarea onChange={descriptionSetter} placeholder='description'></textarea>
        </div>
        <button onClick={submitHandler} type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default AddForm;
