import {Routes, Route, Link, BrowserRouter as Router} from 'react-router-dom'
import './App.css';

import LoginPage from './screens/LoginPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage/>}/>
    </Routes>
  );
}

export default App;
