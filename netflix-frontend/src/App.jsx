import React from 'react'
import Home from './pages/Home/Home'
import {Routes, Route} from 'react-router-dom'
import Login from '../src/pages/Login/Login'
import Player from './pages/Player/player'
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import ProtectedRoute from './Components/Protectedpath/Protected'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login/> }/>

        <Route element={<ProtectedRoute />}>
          <Route path='/home' element={<Home />} />
          <Route path='/player/:id' element={<Player />} />
        </Route>
      </Routes>

      <ToastContainer/>
    </div>
  )
}

export default App

