
import React from 'react'
import Navbar from "../src/navbar/Navbar"
import LadingPage from './landingpage/LandingPage'
import { Route,Routes } from 'react-router-dom'
import Footer from './footer/Footer'
import ExplorePage from "./explorepage/ExplorePage";
import WritePage from './write/WritePage'
import ProfilePage from "./profile/ProfilePage";
import PageNotFound from './pageNotFound/pageNotFound'
import Signup from './signup/Signup'
import Login from './login/Login'


function App() {
  return (
    <div className='app'>
      <Navbar/>
      {/* <LadingPage/> */}
      <Routes>
          <Route path='/' element={<LadingPage/>} ></Route>
          <Route path='/signup' element={<Signup />} ></Route>
          <Route path='/login' element={<Login />} ></Route>
          <Route path='/explore' element={<ExplorePage />} ></Route>
          <Route path='/write' element={<WritePage/>}></Route>
          <Route path='/profile' element={<ProfilePage/>}></Route>
          <Route path='/*' element={<PageNotFound/>}></Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
