import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {BrowserRouter,Router,Route, Link} from "react-router-dom"
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'
import Video from './pages/video'

function App() {
  
  return (
    <>
    <BrowserRouter>
    <nav>
    <Link to={"/" }>Home</Link>
    <Link to={"/profile" }>Profile</Link>
    <Link to={"/video" }>Video</Link>
    </nav>
    <Router>
      <Route path='/' element={<Home/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/video' element={<Video/>}/>
      <Route  path='*' element={<NotFound/>}/>  
    </Router>
    </BrowserRouter>
    </>
  )
}

export default App
