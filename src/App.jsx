import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Add from './components/Add'
import Navbar from './components/Navbar'
import View from './components/View'
import {Routes,Route} from 'react-router-dom'



function App() {
  const [count, setCount] = useState(0)
let appname="Stud";
  return (
    <>
    <h1>welcome to {appname} project</h1>
    
    
<Navbar/>
<Routes>
  <Route path='/' element={<View/>}></Route>
  <Route path='/add' element={<Add person={{"sname":"aishw","admission":"18","department":"bca","semester":"s3"}}/>}></Route>
</Routes>



    

    </>   
  )
}
import { formControlClasses } from '@mui/material'
export default App
