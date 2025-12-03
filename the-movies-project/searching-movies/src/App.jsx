import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router';
import { HomePage } from './HomePage';


function App() {

  return (
    <Routes>
      <Route index element={<HomePage />} />
    </Routes>
  )
}

export default App
