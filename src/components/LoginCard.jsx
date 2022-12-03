import { useState, useEffect, } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./LoginCard.css";

// import {useContext} from "react";
// import UserContext from '../contexts/UserContexts';

const LoginCard = () => {
let navigate = useNavigate();
  // let myContext = useContext(UserContext);

  let [userName, setUserName] = useState("");
  let [password, setPassword] = useState("");
  let [currentUser, setCurrentUser] = useState();



  const submitHandler = (e) => {
    e.preventDefault();

    let body = {
      username: userName,
      password: password,
    };
    window.sessionStorage.setItem("userInfo", userName);

    // let testingAxios = axios
    //   .get(`http://localhost:8000/authenticate`, { params: {username: body.username, password: body.password} })
    //   .then(res => {
    //     if (res.data.length > 0) {
    //       let guy = res.data[0].user_id
    //       console.log('success! User: ', guy)
    //       // myContext.setUser(guy)
          window.sessionStorage.setItem("user", userName)
          // window.location.assign("http://localhost:3000/Welcome")
          navigate("/Welcome");
 

      //   } else {
      //     alert('wrong username or password, please try again')
      //   }
  
      // })
      // .catch((err) => {
      //   console.log(err);
      // });
  };
  const setStateUsername = (e) => {
    setUserName(e.target.value);
  };
  const setStatePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="main-div">
      <div className="box">
        <h2>Login</h2>
       
        <form onSubmit={submitHandler}>
          <input
            onChange={setStateUsername}
            placeholder="Username"
            type="username"
          />
          <input
            onChange={setStatePassword}
            placeholder="Password"
            type="password"
          />
          <button value="Submit" type="submit">
            Login
          </button>
        </form>
        <h6>Don't Have an Account Yet?</h6>
        <Link className="sign-up" to="/Sign-Up">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default LoginCard;
