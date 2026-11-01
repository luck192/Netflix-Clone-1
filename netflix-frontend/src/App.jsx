import React from 'react'
import Home from './pages/Home/Home'
import {Routes, Route} from 'react-router-dom'
import Login from '../src/pages/Login/Login'
import Player from './pages/Player/player'
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={ <Home/>}/>
        <Route path='/loginpage' element={ <Login/>}/>
        <Route path='/player/:id' element={ <Player/> }/>

      </Routes>

      <ToastContainer/>
    </div>
  )
}

export default App

