import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Welcome from './components/Welcome'
import Footer from './components/Footer'
import Counter from './components/Counter'
import EmployeeForm from './components/EmployeeForm'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      {/* <Navbar /> */}
      <EmployeeForm/>
      {/* <Welcome name = "Priyadharshini" role = "Java Full Stack Developer"/>
      <Welcome name = "Lokesh" role = "Java Developer"/> */}
      {/* <Counter /> */}
      <Footer />
    </>
  )
}

export default App
