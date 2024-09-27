import React from 'react'
import Navbar from './Components/Navbar'
import './index.css'
import Mainpage from './pages/Mainpage'
import Hamburger from './Components/Hamburger'
import Videos from './Components/Videos'
import Sidebar from './Components/Sidebar'

function App() {
  return (
    <div>
        <Mainpage />
        <Navbar />
        <Hamburger />
        <Videos />
        <Sidebar />
    </div>
  )
}

export default App