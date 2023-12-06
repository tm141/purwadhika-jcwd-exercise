import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './components/navBar/NavBar.jsx'
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Create from './components/user/Create.jsx'
import Users from './components/user/Users.jsx'

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </>
  )
}

export default App
