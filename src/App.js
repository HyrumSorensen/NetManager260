import {
  Routes,
  Route,
  Navigate,
  BrowserRouter as Router,
} from "react-router-dom";

import { useState } from "react";
import "./App.css";

import LoginPage from "./screens/LoginPage"
import SignUp from "./screens/SignUp"
import Welcome from "./screens/Welcome"
import AddPerson from "./screens/AddPerson"
import People from "./screens/People"
import RandomGuy from "./screens/RandomGuy"
// import UserContext from "./contexts/UserContexts";

function App() {
  // let [currentUser, setCurrentUser] = useState();

  // const setUser = (user) => {
  //   setCurrentUser(user);
  // };

  // const userSettings = {
  //   currentUser: currentUser,
  //   setCurrentUser: setCurrentUser,
  //   setUser: setUser,
  // };

  return (
    // <UserContext.Provider value={userSettings}>
      <Routes>
        <Route path="/:anything" element={<Navigate replace to="/" />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/Sign-Up" element={<SignUp />} />
        <Route path="/Welcome" element={<Welcome />} />
        <Route path="Add-Person" element={<AddPerson />} />
        <Route path="My-NettWork" element={<People/>} />
        <Route path="Generator" element={<RandomGuy/>} />
      </Routes>
    // </UserContext.Provider>
  );
}

export default App;
