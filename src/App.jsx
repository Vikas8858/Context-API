import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home'
import { Link, Route,Routes } from 'react-router-dom'
import User from './Components/User'
import About from './Components/About'
import UserDetails from './Components/UserDetails'

function App() {
  const [user, setUser] = useState([
    {
      
      "id": 1,
      "email": "john@gmail.com",
      "username": "johnd",
      "password": "m38rmF$",
      
    },
    {
      "id": 2,
      "email": "morrison@gmail.com",
      "username": "mor_2314",
      "password": "83r5^_",
     
    },
  ])

  return (
    <div className='pt-[5%] w-1/2 m-auto'>
     <nav className='mt-10 mb-10 flex  justify-center gap-3'>
      <Link to='/'>Home</Link>
      <Link to='/user'>User</Link>
      <Link to='/about'>About</Link>
     </nav>

     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/user' element={<User/>}/>
      <Route path='/user/:id' element={<UserDetails/>}/>
      <Route path='/about' element={<About/>}/>
     </Routes>
     
    </div>
  )
}

export default App
