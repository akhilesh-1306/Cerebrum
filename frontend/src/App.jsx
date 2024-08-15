import './App.css'
import React from 'react'
import Navbar from "../src/navbar/Navbar"
import LadingPage from './landingpage/LandingPage'
import { Route,Routes } from 'react-router-dom'
import Footer from './footer/Footer'

function App() {
  return (
    <div className='app'>
      <Navbar/>
      <LadingPage/>
      {/* <Routes>
          <Route path='/' element={<LadingPage/>} ></Route>
          <Route path='/explore' element={<ExplorePage/>} ></Route>
      </Routes> */}
      <Footer/>
    </div>
  )
}

export default App
