import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { AddTeacher, Base ,FormQuize } from './components'
import { Routes ,Route } from 'react-router-dom'
import Home from './components/Home'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar className="z-[0]" />
<section className='px-2 xs:px-2 md:px-4 lg:px-10  '>
<Routes >
{/* <Route exact path="/" element={<Home />} /> */}

<Route exact path="/" element={<Base />} />
<Route exact path="/teachers" element={<Home />} />
<Route exact path="/addteacher" element={<AddTeacher />} />


<Route exact path="/forms" element={<FormQuize />} />


</Routes>


</section>
    

      
    </>
  )
}

export default App
