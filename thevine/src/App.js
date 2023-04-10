import './App.css'
import Client from './services/api'
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Register from './components/Register'
import Login from './components/Login'
import Home from './components/Home'
import RatingDetail from './components/RatingDetail'
import Ratings from './components/Ratings'
import Wines from './components/Wines'
import Nav from './components/Nav'


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [onRegister, setOnRegister] = useState(false)
  const [wineContent, setWineContent] = useState([])

  const handleLogin = () => {
    setIsLoggedIn(true)
  }

  const handleRegister = () => {
    setIsLoggedIn(false)
  }

  const handleSignOut = () => {
    setIsLoggedIn(false)
  }

  const handleNavbar = () => {
    setOnRegister(true)
  }

  const handleNavLogin = () => {
    setOnRegister(false)
  }

  const getContent = () => {
    Client.get(`/wines`).then((getContent) => {
      setWineContent(getContent.data)
    });
  };

  useEffect(() => {
    getContent()
  }, [])

  return (
    <div className="App">
      {!isLoggedIn && <Login key='login' handleLogin={handleLogin} handleNavbar={handleNavbar} handleNavLogin={handleNavLogin}/>}
      {isLoggedIn && !onRegister && <Nav handleSignOut={handleSignOut}/>}
      <Routes>
        <Route path='/register' element={<Register handleRegister={handleRegister}/>}/>
        <Route path='/home' element={<Home wineContent={wineContent}/>}/>
        <Route path='/login' element={<Login handleRegister={handleRegister} handleLogin={handleLogin} handleNavbar={handleNavbar}/>}/>
        <Route path='/ratings' element={<Ratings wineContent={wineContent}/>}/>
        <Route path='/ratings/:id' element={<RatingDetail />}/>
        <Route path='/wines' element={<Wines wineContent={wineContent}/>}/>
      </Routes>
    </div>
  );
}

export default App;