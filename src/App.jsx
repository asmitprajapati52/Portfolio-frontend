import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import Hero from './components/Hero'

const App = () => {
  return (
    <div className='min-h-screen w-full bg-dark-bg text-slate-100 font-sans antialiased overflow-x-hidden'>
      <Navbar/>
      <main>
        <Routes>
          <Route path="/" element={<Hero/>} />
          <Route path='/' element={<About/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/skills' element={<Skills/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='*' element={<div className='p-20'>404 - Not Found</div>}/>
        </Routes>
      </main>
    </div>
  )
}

export default App