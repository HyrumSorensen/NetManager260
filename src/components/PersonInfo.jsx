import "./PersonInfo.css";
import Popup from 'reactjs-popup'
import {useState} from 'react'
import axios from 'axios'
const PersonInfo = ({ List }) => {



  const [newName, setNewName] = useState('');
  const [newType, setNewType] = useState('');
  const [newBirthday, setNewBirthday] = useState('');
  const [newDescription, setNewDescription] = useState('');

  const [open, setOpen] = useState(false);


  const openModal = () => {
      setOpen(o => !o)
      setNewName(List.name)
      setNewType(List.type)
      setNewBirthday(List.birthday)
      setNewDescription(List.description)
  }
  const closeModal = () => {
      setOpen(false);
  }

  const settingNewDescription = (e) => {
      setNewDescription(e.target.value)
  }
  const settingNewName= (e) => {
      setNewName(e.target.value)
  }
  const settingNewType = (e) => {
      setNewType(e.target.value)
  }
  const settingNewBirthday = (e) => {
      setNewBirthday(e.target.value)
  }

  const deletePerson = () => {
    const deleteId= List.person_id;
    if (window.confirm(`You are about to delete this person from the database!
Do you wish to proceed?`)) {

    axios.delete(`http://localhost:8000/people/${deleteId}`)
    .then(
      window.location.reload()
    )
    .catch(err => console.log(err))
    }
  }

  const editPerson = (e) => {
    e.preventDefault()
    const editId = List.person_id;
    let body= {
      name: newName,
      type: newType,
      birthday: newBirthday,
      description: newDescription,
      id: editId
    }
    if (window.confirm('You are about to make permanent changes to this person, do you wish to proceed?')) {

      axios.put(`http://localhost:8000/people/${editId}`, body)
      .then (
        window.location.reload()
      )
      .catch(err => console.log(err))
    }
  }

  return (
    <div>
      <div className="person-card">
        <div className="person-type">
          <h4>{List.type}</h4>
        </div>
        <div className="person-name">
          <h3>{List.name}</h3>
        </div>
        <div className="person-birthday">
          <h5>Birthday: {List.birthday}</h5>
        </div>
        <div className="description-div">
          <h6 className="person-description">About: {List.description}</h6>
        </div>
        <div className="contact-info">
          <div>
            <button className="contact-button">contact</button>
          </div>
          <div className='picture'>
            <img onClick={openModal} className='pencil' src="https://img.icons8.com/office/344/edit.png"/>
            <p>edit</p>
          </div>
        </div>
      </div>
      <Popup open={open} closeOnDocumentClick onClose={closeModal}>
       <div className='edit-options'>
        <div className='edit-info-div'>
          <form onSubmit={editPerson}>
            <input onChange={settingNewName} type='text' value={newName}/>
            <input onChange={settingNewType}type='text' value={newType}/>
            <input onChange={settingNewBirthday}type='date' value={newBirthday}/>
            <textarea onChange={settingNewDescription} value={newDescription}>Description</textarea>
            <button type='submit'>Make Changes</button>
          </form>
        </div>
        <div className='delete-cancel'>
          <button className='bigger-buttons' onClick={deletePerson}>Delete</button>
          <button className='bigger-buttons' onClick={closeModal}>Cancel</button>
        </div>
       </div>
      </Popup>
    </div>
  );
};

export default PersonInfo;
