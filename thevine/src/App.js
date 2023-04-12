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
import WineDetail from './components/WineDetail'


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [onRegister, setOnRegister] = useState(false)
  const [wineContent, setWineContent] = useState([])

  const handleLogin = () => {
    setIsLoggedIn(true)
    localStorage.setItem('isLoggedIn', true)
  }

  const handleRegister = () => {
    setIsLoggedIn(false)
    localStorage.setItem('isLoggedIn', false)
  }

  const handleSignOut = () => {
    setIsLoggedIn(false)
    localStorage.setItem('isLoggedIn', false)
  }

  const handleNavbar = () => {
    setOnRegister(true)
  }

  const handleNavLogin = () => {
    setOnRegister(false)
  }

  const getContent = async() => {
    const response = await Client.get(`/wines`).then((response) => {
      setWineContent(response.data)
      console.log(response.data)
    });
  };

  useEffect(() => {
    getContent()
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'
    setIsLoggedIn(isLoggedIn)
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
        <Route path='/ratings/:rating_id/:id' element={<RatingDetail wineContent={wineContent}/>}/>
        <Route path='/wines' element={<Wines wineContent={wineContent}/>}/>
        <Route path='/wines/:id' element={<WineDetail wineContent={wineContent}/>}/>
      </Routes>
    </div>
  );
}

export default App;
