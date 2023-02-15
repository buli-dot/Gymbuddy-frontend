import React from 'react'
import Navbar from './components/navbar/navbar'
import './layout.css'
import {Routes,Route} from 'react-router-dom'
import {Administration,Login,Register,Home} from './containers/index';
function Layout() {
  return (
    <>
          <Navbar/>
          <Routes>
            <Route path='/administration' element={<Administration/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
          </Routes>
    </>
  )
}

export default Layout