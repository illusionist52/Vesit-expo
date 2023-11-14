import React from 'react'
import { BrowserRouter, Navigate, Route ,Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import ForumPage from './pages/ForumPage'
import BlogsPage from './pages/BlogsPage'
import CompaniesPages from './pages/CompaniesPages'
import Login from './pages/Login'
import Signup from './pages/Signup'


function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Homepage/>} />
      <Route path='/forums' element={<ForumPage/>} />
      <Route path='/blogs' element={<BlogsPage/>} />
      <Route path='/companies' element={<CompaniesPages/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<Signup/>} />
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App