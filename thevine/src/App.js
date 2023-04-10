import './App.css'
import Client from './services/api'
import { useState, useEffect } from 'react'
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
import Nav from './components/Nav'


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [wineContent, setWineContent] = useState([])

  const handleLogin = () => {
    setIsLoggedIn(true);
  }

  const handleRegister = () => {
    setIsLoggedIn(false);
  }

  const handleSignOut = () => {
    setIsLoggedIn(false)
  }

  const getContent = () => {
    Client.get(`/wines`).then((getContent) => {
      setWineContent(getContent.data);
      console.log(getContent.data)
    });
  };

  useEffect(() => {
    getContent();
  }, []);

  return (
    <div className="App">
      {!isLoggedIn && <Login key='login' handleLogin={handleLogin} />}
      {isLoggedIn && <Nav handleSignOut={handleSignOut}/>}
      <Routes>
        <Route path='/register' element={<Register handleRegister={handleRegister}/>}/>
        <Route path='/home' element={<Home wineContent={wineContent}/>}/>
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