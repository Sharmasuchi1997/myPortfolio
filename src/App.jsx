import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Skill from './Skill'

// import Home from './component/Home'
// import About from './component/About'
// import Skill from './component/Skill'
// import Projects from './component/Projects'
// import Contact from './component/Contact'
import AllRoutes from './component/AllRoutes'
import Navbar from './component/Navbar'

function App() {

      const handleNavigation=(section)=>{
      
        document.getElementById(section)?.scrollIntoView({
          behavior:"smooth",
          block:"start"
        })
      }

  return (
    <>
    <Navbar onNavigate={handleNavigation}/>
<AllRoutes onNavigate={handleNavigation}/>
     
     
    </>
  )
}

export default App
