import Popup from 'reactjs-popup'
import { useState } from "react";
import "./AddForm.css";
import axios from 'axios'
const AddForm = () => {

    //for storing actual values to send to database

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [type, setType] = useState('')
    const [birthday, setBirthday] = useState('')
    const [description, setDescription] = useState('')

    const [open, setOpen] = useState(false);
    const closeModal = () =>  {
        setOpen(false);
        setFirstName('')
        setLastName('')
        setBirthday('01/01/2000')
        setDescription('')

    }
    const goHome = () => window.location.assign('http://localhost:3000/Welcome')

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
            setOpen(o => !o)

        }).catch ((err) =>  {
            console.log(err)
        })
    }
  
  return (
    <div>
      <form>
        <div className="name">
          <input onChange={firstNameSetter} type="text" placeholder="First Name" value={firstName} required />
          <input onChange={lastNameSetter} type="text" placeholder="Last Name" value={lastName}required/>
        </div>
        <div className="radio-options">
          <input onChange={typeSetter} type="radio" name='type' value="Family Member" />
          <label htmlFor="Family Member">Family</label> <br></br>
          <input onChange={typeSetter} type="radio" name='type' value="Work Buddy" />
          <label htmlFor="Work Buddy">Work</label> <br></br>
          <input onChange={typeSetter} type="radio" name='type' value="Friend" />
          <label htmlFor="Friend">Friends</label> <br></br>
          <input onChange={typeSetter} type="radio" name='type' value="Acquaintance" />
          <label htmlFor="Acquaintance">Acquaintance</label> <br></br>
          <input onChange={typeSetter} type="radio" name='type' value="Romantic Possibility" />
          <label htmlFor="Romantic Possibility">Romantic Possibility</label> <br></br>
        </div>
        <div className='birthday'>
            <label htmlFor="birthday">Birthday</label>
            <input onChange={birthdaySetter} name='birthday' type='date' min="1900-01-01" max="2023-12-31" value={birthday}/>
        </div>
        <div className='description'>
            <textarea onChange={descriptionSetter} placeholder='description' value={description}></textarea>
        </div>
        <button onClick={submitHandler} type='submit'>Submit</button>
      </form>
      <Popup open={open} closeOnDocumentClick onClose={closeModal}>
        <div className="modal">
            <h5>User successfully added to your personal database! </h5>
            <div className='buttons'>
          <button className="close" onClick={closeModal}>Enter Another User?</button>
          <button className="gohome" onClick={goHome}>Back To Home</button>
          </div>
        </div>
      </Popup>
    </div>
  );
};

export default AddForm;
