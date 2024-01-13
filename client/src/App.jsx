import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import logo from "./assets/logo.jpg";


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="nav">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="links">
          <ul>
            <li className="link">Home</li>
            <li className="link">Services</li>
            <li className="link">About Us</li>
            <li className="link">Projects</li>
            <li className="link">Contact Us</li>
            <a href="/"><button>Get in Touch</button></a>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
