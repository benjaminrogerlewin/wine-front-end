import './App.css'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Main from './components/Main'
import Register from './components/Register'
import Login from './components/Login'


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  }

  const handleRegister = () => {
    setIsLoggedIn(false);
  }

  return (
    <div className="App">
      {!isLoggedIn && <Login key='login' handleLogin={handleLogin} />}
      <Routes>
        <Route path='/register' element={<Register handleRegister={handleRegister}/>}/>
        <Route path='/main' element={<Main />}/>
      </Routes>
    </div>
  );
}

export default App;