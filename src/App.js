import {
  Routes,
  Route,
  Navigate,
  HashRouter as Router,
} from "react-router-dom";

import { useState } from "react";
import "./App.css";

import LoginPage from "./screens/LoginPage";
import SignUp from "./screens/SignUp";
import Welcome from "./screens/Welcome";
import AddPerson from "./screens/AddPerson";
import People from "./screens/People";
import RandomGuy from "./screens/RandomGuy";
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
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route path="/Sign-Up" element={<SignUp />} />
        <Route path="/Welcome" element={<Welcome />} />
        <Route path="/Welcome/Add-Person" element={<AddPerson />} />
        <Route path="/Welcome/My-NettWork" element={<People />} />
        <Route path="/Welcome/Generator" element={<RandomGuy />} />
      </Routes>
    </Router>
  );
}

export default App;
