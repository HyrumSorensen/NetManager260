import {useState} from 'react'
import './LoginCard.css'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const SignUpCard = () => {
    let navigate = useNavigate();
    let [userName, setUserName] = useState('')
    let [password, setPassword] = useState('')
    
    const submitHandler = (e) => {
        e.preventDefault()

        let body = {
            username: userName,
            password: password
        }

        axios.post('http://localhost:8000/newUser', body)
        .then(() => {
            setUserName = ''
            setPassword = ''
            alert('Account Successfully Created!')

        })
        navigate('/')
    }
    const setStateUsername = (e) => {
        setUserName(e.target.value)
    }
    const setStatePassword = (e) => {
        setPassword(e.target.value)
    }
    return (
        <div className='main-div'>
        <div className='box'>
          <h2>Sign Up</h2>
          <form onSubmit={submitHandler}>
            <input onChange={setStateUsername} placeholder="Create Username" type="username" />
            <input onChange={setStatePassword} placeholder="Create Password" type="password"/>
            <button value="Submit" type='submit'>Sign Up</button>
        </form>
        <h6>Welcome to Nettwork Manager!</h6>
          
        </div>
      </div>
    )
}
export default SignUpCard