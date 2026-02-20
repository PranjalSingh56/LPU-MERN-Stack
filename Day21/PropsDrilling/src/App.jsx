import { useState } from 'react'

import './App.css'
import Parent from './components/parent'


function App() {


  return (
    <>
    <h2>Props Drilling</h2>
    <Parent user = {"Pranjal"}/>
    </>
  )
}

export default App;
