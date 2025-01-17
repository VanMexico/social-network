import React from 'react'
import './App.css'
import { Header } from './components/Header'
import { Aside } from './components/Aside'
import { Profile } from './components/Profile'

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Aside />
      <Profile />
    </div>
  )
}

export default App
