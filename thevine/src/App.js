import './App.css'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Main from './components/Main'
import Register from './components/Register'
import Login from './components/Login'
import Grape from './components/Grape'
import Home from './components/Home'
import RatingDetail from './components/RatingDetail'
import Ratings from './components/Ratings'
import Type from './components/Type'
import Label from './components/Label'


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  }

  const handleRegister = () => {
    setIsLoggedIn(false);
  }

  const handleSignOut = () => {
    setIsLoggedIn(false)
    console.log(isLoggedIn)
  }

  return (
    <div className="App">
      {!isLoggedIn && <Login key='login' handleLogin={handleLogin} />}
      <Routes>
        <Route path='/register' element={<Register handleRegister={handleRegister}/>}/>
        <Route path='/main' element={<Main />}/>
        <Route path='/main' element={<Home handleSignOut={handleSignOut}/>}/>
        <Route path='/login' element={<Login handleRegister={handleRegister} handleLogin={handleLogin}/>}/>
        <Route path='/ratings' element={<Ratings />}/>
        <Route path='/ratings/:id' element={<RatingDetail />}/>
        <Route path='/type' element={<Type />}/>
        <Route path='/grape' element={<Grape />}/>
        <Route path='/label' element={<Label />}/>
      </Routes>
    </div>
  );
}

export default App;