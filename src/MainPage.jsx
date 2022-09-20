import { useState } from 'react'
import './App.css'
import NavigationBar from './components/NavigationBar'
import Home from './Pages/Home/Home'
import Work from './Pages/Work/Work'
import AboutUs from './Pages/About Us/AboutUs'
import Contact from './Pages/Contact/Contact'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <div className='main-page-container'>
    <NavigationBar />
    {/* <div> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/work' element={<Work/>}/>
        <Route path='/about-us' element={<AboutUs/>}/>
        <Route path='/contact' element={<Contact/>}/> 
      </Routes>
    {/* </div>     */}
    <Footer/>
    </div>
  )
}

export default App