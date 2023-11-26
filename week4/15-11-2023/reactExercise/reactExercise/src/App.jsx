import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/Header.jsx'
import Hero from './components/hero/Hero.jsx'
import Profile from './components/profile/Profile.jsx'
import Footer from './components/footer/Footer.jsx'

function App() {

  return (
    <div>
      <Header />
      <Hero />
      <Profile />
      <Footer />
    </div>
  )
}

export default App
